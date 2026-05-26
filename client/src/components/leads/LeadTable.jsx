import "./LeadTable.css";

function LeadTable({ leads, onEdit, onDelete, onConvert }) {

  return (

    <div className="lead-table-container">

      <table className="lead-table">

        <thead>

          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Company</th>
            <th>Phone</th>
            <th>Source</th>
            <th>Assigned</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>

        </thead>



        <tbody>

          {leads.map((lead, index) => (

            <tr key={lead._id}>

              <td>{index + 1}</td>

              <td>{lead.leadName}</td>

              <td>{lead.companyName}</td>

              <td>{lead.phone}</td>

              <td>{lead.leadSource}</td>

              <td>{lead.assignedTo}</td>



              <td>
                <span className={`status ${lead.status}`}>
                  {lead.status}
                </span>
              </td>



              <td>
                <span className={`priority ${lead.priority}`}>
                  {lead.priority}
                </span>
              </td>



              <td className="action-buttons">

                <button onClick={() => onEdit(lead)}>
                  Edit
                </button>

                                <button
                  className="convert-btn"
                  onClick={() => onConvert(lead._id)}
                >
                  Convert
                </button>

                <button
                  className="delete-btn"
                  onClick={() => onDelete(lead._id)}
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

export default LeadTable;