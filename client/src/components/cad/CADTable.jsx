function CADTable({ cadList }) {

  return (

    <div className="cad-table-wrapper">

      <table className="cad-table">

        <thead>

          <tr>

            <th>
              CAD Code
            </th>

            <th>
              Start Time
            </th>

            <th>
              End Time
            </th>

            <th>
              CPX
            </th>

            <th>
              Status
            </th>

            <th>
              Comment
            </th>

          </tr>

        </thead>

        <tbody>

          {cadList.length > 0 ? (

            cadList.map((cad, index) => (

              <tr key={index}>

                <td>
                  {cad.cadCode}
                </td>

                <td>
                  {cad.startTime}
                </td>

                <td>
                  {cad.endTime}
                </td>

                <td>

                  {cad.cpxSent
                    ? "Yes"
                    : "No"}

                </td>

                <td>

                  <span className="status-badge">

                    {cad.status}

                  </span>

                </td>

                <td>
                  {cad.comment}
                </td>

              </tr>

            ))

          ) : (

            <tr>

              <td
                colSpan="6"
                className="empty-data"
              >

                No CAD Records Found

              </td>

            </tr>

          )}

        </tbody>

      </table>

    </div>

  );

}

export default CADTable;