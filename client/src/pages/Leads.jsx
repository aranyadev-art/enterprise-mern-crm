import { useEffect, useState } from "react";

import LeadForm from "../components/leads/LeadForm";
import LeadTable from "../components/leads/LeadTable";

function Leads() {

  const [leads, setLeads] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const [editLead, setEditLead] = useState(null);




  const fetchLeads = async () => {

    try {

      const response = await fetch("http://localhost:5000/api/leads");

      const data = await response.json();

      setLeads(data);

    } catch (error) {
      console.log(error);
    }
  };




  useEffect(() => {
    fetchLeads();
  }, []);




  const handleSaveLead = async (formData) => {

    try {

      // UPDATE
      if (editLead) {

        await fetch(
          `http://localhost:5000/api/leads/${editLead._id}`,
          {
            method: "PUT",

            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify(formData),
          }
        );

      }

      // CREATE
      else {

        await fetch("http://localhost:5000/api/leads", {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        });
      }

      fetchLeads();

      setShowForm(false);

      setEditLead(null);

    } catch (error) {
      console.log(error);
    }
  };




  const handleDelete = async (id) => {

    try {

      await fetch(`http://localhost:5000/api/leads/${id}`, {
        method: "DELETE",
      });

      fetchLeads();

    } catch (error) {
      console.log(error);
    }
  };




  const handleEdit = (lead) => {

    setEditLead(lead);

    setShowForm(true);
  };


  const handleConvert = async (id) => {

  try {

    await fetch(
      `http://localhost:5000/api/leads/convert/${id}`,
      {
        method: "POST",
      }
    );

    fetchLeads();

  } catch (error) {
    console.log(error);
  }
};


  return (

    <div style={{ padding: "20px" }}>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >

        <h2>Leads</h2>

       {!showForm && (

  <button
    onClick={() => {
      setShowForm(true);
      setEditLead(null);
    }}
    style={{
      background: "#2563eb",
      color: "#fff",
      border: "none",
      padding: "10px 18px",
      borderRadius: "6px",
      cursor: "pointer",
    }}
  >
    + Add Lead
  </button>

)}

      </div>



      {showForm ? (

  <LeadForm
    onSave={handleSaveLead}
    editLead={editLead}
    onClose={() => {
      setShowForm(false);
      setEditLead(null);
    }}
  />

) : (

  <LeadTable
    leads={leads}
    onEdit={handleEdit}
    onDelete={handleDelete}
    onConvert={handleConvert}
  />

)}

    </div>
  );
}

export default Leads;