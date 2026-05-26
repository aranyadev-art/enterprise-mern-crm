import "./SalesJob.css";

function SalesJobTable({
  jobs,
  onDelete,
  onEdit,
}) {

  return (
           
      
    <div className="sales-table-container">
        <h2>Sales Jobs</h2>
      <table className="sales-table">

    

        <thead>

          <tr>

            <th>ID</th>

            <th>Client</th>

            <th>CAD Designer</th>

            <th>Qty</th>

            <th>Priority</th>

            <th>Status</th>

            <th>Tracking</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {jobs.map((job) => (

            <tr key={job.id}>

              <td>{job.id}</td>

              <td>{job.client}</td>

              <td>{job.designer}</td>

              <td>{job.quantity}</td>

              <td>

                <span className="priority-badge">
                  {job.priority}
                </span>

              </td>

              <td>

                <span className="status-badge">
                  {job.status}
                </span>

              </td>

              <td>{job.tracking}</td>

              <td>

                <button
                  className="edit-btn"
                  onClick={() => onEdit(job)}
                >

                  Edit

                </button>

                <button
                  className="delete-btn"
                  onClick={() => onDelete(job.id)}
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

export default SalesJobTable;