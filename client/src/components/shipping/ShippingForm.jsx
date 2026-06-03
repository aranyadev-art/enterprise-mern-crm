import api from "../../services/api";
import "../../styles/shipping.css";

const ShippingForm = ({
  form,
  setForm,
  fetchShippings,
  setShowForm,
}) => {

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/shippings", form);

      fetchShippings();

      setShowForm(false);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="shipping-form-container">

      <h2>Add Shipping</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="gfjNo"
          placeholder="GFJ No"
          value={form.gfjNo}
          onChange={handleChange}
        />

        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={form.productName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="salesRep"
          placeholder="Sales Rep"
          value={form.salesRep}
          onChange={handleChange}
        />

        <input
          type="text"
          name="clientName"
          placeholder="Client Name"
          value={form.clientName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="finalQuotation"
          placeholder="Final Quotation"
          value={form.finalQuotation}
          onChange={handleChange}
        />

        <input
          type="text"
          name="metalStoneDetails"
          placeholder="Metal & Stone Details"
          value={form.metalStoneDetails}
          onChange={handleChange}
        />

        <input
          type="text"
          name="trackingNumber"
          placeholder="Tracking Number"
          value={form.trackingNumber}
          onChange={handleChange}
        />

        <input
          type="text"
          name="systemType"
          placeholder="System Type"
          value={form.systemType}
          onChange={handleChange}
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option>Pending</option>
          <option>Packed</option>
          <option>Shipped</option>
          <option>Delivered</option>
        </select>

        <div className="form-buttons">

          <button type="submit">
            Save
          </button>

          <button
            type="button"
            onClick={() => setShowForm(false)}
          >
            Cancel
          </button>

        </div>

      </form>

    </div>
  );
};

export default ShippingForm;