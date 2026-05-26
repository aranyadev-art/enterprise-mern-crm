import { useEffect, useState } from "react";

import "./LeadForm.css";

function LeadForm({ onSave, editLead, onClose }) {

  const [formData, setFormData] = useState({
    leadName: "",
    companyName: "",
    email: "",
    phone: "",
    leadSource: "Website",
    assignedTo: "",
    status: "New",
    priority: "Medium",
    notes: "",
  });




  useEffect(() => {

    if (editLead) {
      setFormData(editLead);
    }

  }, [editLead]);




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

    <div className="lead-form-container">

      <form className="lead-form" onSubmit={handleSubmit}>

        <h3>
          {editLead ? "Edit Lead" : "Create Lead"}
        </h3>



        <input
          type="text"
          name="leadName"
          placeholder="Lead Name"
          value={formData.leadName}
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



        <select
          name="leadSource"
          value={formData.leadSource}
          onChange={handleChange}
        >
          <option>Website</option>
          <option>Facebook</option>
          <option>Instagram</option>
          <option>Referral</option>
          <option>Call</option>
          <option>Other</option>
        </select>



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
          <option>New</option>
          <option>Contacted</option>
          <option>Qualified</option>
          <option>Proposal Sent</option>
          <option>Converted</option>
          <option>Lost</option>
        </select>



        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>



        <textarea
          name="notes"
          placeholder="Notes"
          rows="4"
          value={formData.notes}
          onChange={handleChange}
        />



        <div className="form-buttons">

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

export default LeadForm;