import { useState, useEffect } from "react";
import api from "../../services/api";

const FactoryForm = ({
  form,
  setForm,
  fetchFactories,
  setShowForm,
}) => {
  const [loading, setLoading] = useState(false);

  const [quotations, setQuotations] = useState([]);

  console.log(quotations);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    });
  };

  const fetchQuotations = async () => {
    try {
      const response = await api.get("/quotations");

      setQuotations(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuotations();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      console.log(form);

      await api.post("/factories", form);

      fetchFactories();

      setForm({
        quotation: "",
        factoryEmployee: "",
        orderNo: "",
        shippingNo: "",
        metalWeight: "",
        stoneCtWeight: "",
        finalWeight: "",
        dailyComment: "",
        completed: false,
      });

      alert("Factory Record Created");

      setShowForm(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="quotation-form">
      <h2>Create Factory Record</h2>

      <form onSubmit={handleSubmit}>

        <select
          name="quotation"
          value={form.quotation}
          onChange={handleChange}
        >
          <option value="">
            Select Quotation
          </option>

          {quotations.map((quotation) => (
            <option
              key={quotation._id}
              value={quotation._id}
            >
              {quotation.quotationId}
            </option>
          ))}
        </select>

        <input
          name="factoryEmployee"
          value={form.factoryEmployee}
          placeholder="Factory Employee"
          onChange={handleChange}
        />

        <input
          name="orderNo"
          value={form.orderNo}
          placeholder="Order No"
          onChange={handleChange}
        />

        <input
          name="shippingNo"
          value={form.shippingNo}
          placeholder="Shipping No"
          onChange={handleChange}
        />

        <input
          name="metalWeight"
          value={form.metalWeight}
          placeholder="Metal Weight"
          onChange={handleChange}
        />

        <input
          name="stoneCtWeight"
          value={form.stoneCtWeight}
          placeholder="Stone CT Weight"
          onChange={handleChange}
        />

        <input
          name="finalWeight"
          value={form.finalWeight}
          placeholder="Final Weight"
          onChange={handleChange}
        />

        <textarea
          name="dailyComment"
          value={form.dailyComment}
          placeholder="Daily Comment"
          onChange={handleChange}
          rows="4"
        />

        {/* Completed Checkbox */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "10px",
            marginTop: "15px",
            marginBottom: "20px",
          }}
        >
          <input
            id="completed"
            type="checkbox"
            name="completed"
            checked={form.completed}
            onChange={handleChange}
            style={{
              width: "18px",
              height: "18px",
              margin: 0,
              flex: "0 0 auto",
            }}
          />

          <label
            htmlFor="completed"
            style={{
              margin: 0,
              width: "auto",
              display: "inline",
              cursor: "pointer",
            }}
          >
            Completed
          </label>
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: "10px 20px",
              background: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            {loading ? "Creating..." : "Create"}
          </button>

          <button
            type="button"
            onClick={() => setShowForm(false)}
            style={{
              padding: "10px 20px",
              background: "#6b7280",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default FactoryForm;