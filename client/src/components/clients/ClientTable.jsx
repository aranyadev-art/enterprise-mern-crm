import "./ClientTable.css";

function ClientTable({ clients, onEdit, onDelete }) {

  return (

    <div className="client-table-container">

      <table className="client-table">

        <thead>

          <tr>
            <th>#</th>
            <th>Client Name</th>
            <th>Company</th>
            <th>Phone</th>
            <th>Assigned</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

        </thead>



        <tbody>

          {clients.map((client, index) => (

            <tr key={client._id}>

              <td>{index + 1}</td>

              <td>{client.clientName}</td>

              <td>{client.companyName}</td>

              <td>{client.phone}</td>

              <td>{client.assignedTo}</td>



              <td>
                <span className={`client-status ${client.status}`}>
                  {client.status}
                </span>
              </td>



              <td className="client-actions">

                <button onClick={() => onEdit(client)}>
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => onDelete(client._id)}
                >
                  Delete
                </button>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ClientTable;