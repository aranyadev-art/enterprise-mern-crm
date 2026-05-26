import { useState, useEffect } from "react";


import "./SalesJob.css";

function SalesJobForm({
  onSave,
  editJob,
}) {

  const [formData, setFormData] = useState({

    client: "",

    designer: "",

    quantity: 1,

    priority: "Medium",

    status: "Pending",

    notes: "",

  });

  // EDIT PREFILL

  useEffect(() => {

    if (editJob) {

      setFormData(editJob);
    }

  }, [editJob]);

  const fetchClients = async () => {

  try {

    const response = await fetch(
      "http://localhost:5000/api/clients"
    );

    const data = await response.json();

    setClients(data);

  } catch (error) {
    console.log(error);
  }
};

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    onSave(formData);
  };

  const [clients, setClients] = useState([]);

    useEffect(() => {

  fetchClients();

}, []);


  return (

    <div className="sales-form-container">

      <h2>

        {editJob
          ? "Edit Sales Job"
          : "Create Sales Job"}

      </h2>

      <form
        onSubmit={handleSubmit}
        className="sales-form"
      >

        {/* Client */}


         <select
           name="client"
           value={formData.client}
           onChange={handleChange}
           required
         >

           <option value="">
             Select Client
           </option>
         
           {clients.map((client) => (
         
             <option
               key={client._id}
               value={client.clientName}
             >
               {client.clientName}
             </option>
         
           ))}
         
         </select>
        {/* Designer */}

        <select
          name="designer"
          value={formData.designer}
          onChange={handleChange}
        >

          <option value="">
            Select Designer
          </option>

          <option value="Designer 1">
            Designer 1
          </option>

          <option value="Designer 2">
            Designer 2
          </option>

        </select>

        {/* Quantity */}

        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
        />

        {/* Priority */}

        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
        >

          <option value="Low">
            Low
          </option>

          <option value="Medium">
            Medium
          </option>

          <option value="High">
            High
          </option>

          <option value="Urgent">
            Urgent
          </option>

        </select>

        {/* Status */}

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >

          <option value="Pending">
            Pending
          </option>

          <option value="In Progress">
            In Progress
          </option>

          <option value="Completed">
            Completed
          </option>

        </select>

        {/* File */}

        <input type="file" />

        {/* Notes */}

        <textarea
          name="notes"
          placeholder="Notes"
          value={formData.notes}
          onChange={handleChange}
        />

        {/* Tracking */}

        <input
          type="text"
          value={
            editJob
              ? editJob.tracking
              : "Auto Generated"
          }
          readOnly
        />

        {/* Submit */}

        <button
          type="submit"
          className="sales-btn"
        >

          {editJob
            ? "Update Sales Job"
            : "Create Sales Job"}

        </button>

      </form>

    </div>

  );
}

export default SalesJobForm;