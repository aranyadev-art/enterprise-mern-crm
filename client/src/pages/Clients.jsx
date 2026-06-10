import { useEffect, useState } from "react";

import ClientForm from "../components/clients/ClientForm";
import ClientTable from "../components/clients/ClientTable";

function Clients() {

  const [clients, setClients] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const [editClient, setEditClient] = useState(null);




  const fetchClients = async () => {

    try {

      const response = await fetch("http://localhost:5000/api/clients");

      const data = await response.json();

      setClients(data);

    } catch (error) {
      console.log(error);
    }
  };




  useEffect(() => {
    fetchClients();
  }, []);




  const handleSaveClient = async (formData) => {

    try {

      // UPDATE
      if (editClient) {

        await fetch(
          `http://localhost:5000/api/clients/${editClient._id}`,
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

        await fetch("http://localhost:5000/api/clients", {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        });
      }

      fetchClients();

      setShowForm(false);

      setEditClient(null);

    } catch (error) {
      console.log(error);
    }
  };




  const handleDelete = async (id) => {

    try {

      await fetch(`http://localhost:5000/api/clients/${id}`, {
        method: "DELETE",
      });

      fetchClients();

    } catch (error) {
      console.log(error);
    }
  };




  const handleEdit = (client) => {

    setEditClient(client);

    setShowForm(true);
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

        <h2>Clients</h2>



        {!showForm && (

          <button
            onClick={() => {
              setShowForm(true);
              setEditClient(null);
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
            + Add Client
            
          </button>


        )}

      </div>




      {showForm ? (

        <ClientForm
          onSave={handleSaveClient}
          editClient={editClient}
          onClose={() => {
            setShowForm(false);
            setEditClient(null);
          }}

        />

      ) : (

        <ClientTable
          clients={clients}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

      )}

    </div>
  );
}

export default Clients;