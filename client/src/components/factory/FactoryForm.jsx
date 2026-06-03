import { useState, useEffect } from "react";
import "../../styles/factory.css";
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
   <div className="factory-form-card">
      <h2>Create Factory Record</h2>

     <form
  onSubmit={handleSubmit}
  className="factory-form"
>

        <select
          name="quotation"
          value={form.quotation}
          onChange={handleChange}
          className="factory-input"
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
          className="factory-input"
        />

        <input
          name="orderNo"
          value={form.orderNo}
          placeholder="Order No"
          onChange={handleChange}
          className="factory-input"
        />

        <input
          name="shippingNo"
          value={form.shippingNo}
          placeholder="Shipping No"
          onChange={handleChange}
          className="factory-input"
        />

        <input
          name="metalWeight"
          value={form.metalWeight}
          placeholder="Metal Weight"
          onChange={handleChange}
          className="factory-input"
        />

        <input
          name="stoneCtWeight"
          value={form.stoneCtWeight}
          placeholder="Stone CT Weight"
          onChange={handleChange}
          className="factory-input"
        />

        <input
          name="finalWeight"
          value={form.finalWeight}
          placeholder="Final Weight"
          onChange={handleChange}
          className="factory-input"
        />

        <textarea
          name="dailyComment"
          value={form.dailyComment}
          placeholder="Daily Comment"
          onChange={handleChange}
          rows="4"
          className="factory-input"
        />

        {/* Completed Checkbox */}
   <div className="factory-checkbox">
          <input
            id="completed"
            type="checkbox"
            name="completed"
            checked={form.completed}
            onChange={handleChange}
            className="factory-checkbox-input"
          />
             <label
               htmlFor="completed"
               className="factory-checkbox-label"
             >
            Completed
          </label>
        </div>

        {/* Buttons */}
     <div className="factory-btn-group">
          <button
            type="submit"
            disabled={loading}
          className="factory-save-btn"
          >
            {loading ? "Creating..." : "Create"}
          </button>

          <button
            type="button"
            onClick={() => setShowForm(false)}
            className="factory-cancel-btn"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default FactoryForm;