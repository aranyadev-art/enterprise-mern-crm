import { useState } from "react";
import api from "../../services/api";

const OrderForm = ({ fetchOrders }) => {
  const [form, setForm] = useState({
    salesName: "",
    cadName: "",
    clientName: "",
    quotationId: "",
    status: "Pending",
  });

  const [loading, setLoading] = useState(false);

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // CREATE ORDER
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await api.post("/orders/create", form);

      alert("Order Created");

      setForm({
        salesName: "",
        cadName: "",
        clientName: "",
        quotationId: "",
        status: "Pending",
      });

      if (fetchOrders) {
        fetchOrders();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="quotation-form">
      <h2>Create Order</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="salesName"
          placeholder="Sales Name"
          value={form.salesName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="cadName"
          placeholder="CAD Name"
          value={form.cadName}
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
          name="quotationId"
          placeholder="Quotation ID"
          value={form.quotationId}
          onChange={handleChange}
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option value="Pending">Pending</option>
          <option value="CAD Started">CAD Started</option>
          <option value="CAD Approved">CAD Approved</option>
          <option value="Production">Production</option>
          <option value="Completed">Completed</option>
          <option value="Delivered">Delivered</option>
        </select>

        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Order"}
        </button>

      </form>
    </div>
  );
};

export default OrderForm;