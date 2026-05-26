import { useEffect, useState } from "react";

import "./ClientForm.css";

function ClientForm({ onSave, editClient, onClose }) {

  const [formData, setFormData] = useState({
    clientName: "",
    companyName: "",
    email: "",
    phone: "",
    assignedTo: "",
    status: "Active",
    notes: "",
  });




  useEffect(() => {

    if (editClient) {
      setFormData(editClient);
    }

  }, [editClient]);




  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };




  const handleSubmit = (e) => {

    e.preventDefault();

    onSave(formData);
  };




  return (

    <div className="client-form-container">

      <form className="client-form" onSubmit={handleSubmit}>

        <h3>
          {editClient ? "Edit Client" : "Create Client"}
        </h3>



        <input
          type="text"
          name="clientName"
          placeholder="Client Name"
          value={formData.clientName}
          onChange={handleChange}
          required
        />



        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleChange}
        />



        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />



        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />



        <input
          type="text"
          name="assignedTo"
          placeholder="Assigned To"
          value={formData.assignedTo}
          onChange={handleChange}
        />



        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option>Active</option>
          <option>Inactive</option>
        </select>



        <textarea
          name="notes"
          placeholder="Notes"
          rows="4"
          value={formData.notes}
          onChange={handleChange}
        />



        <div className="client-form-buttons">

          <button type="submit">
            Save
          </button>

          <button
            type="button"
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

        </div>

      </form>

    </div>
  );
}

export default ClientForm;