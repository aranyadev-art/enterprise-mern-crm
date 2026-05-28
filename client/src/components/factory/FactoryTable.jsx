import api from "../../services/api";

const FactoryTable = ({
  factories,
  fetchFactories,
}) => {
  const handleCompleted = async (
    id,
    value
  ) => {
    try {
      await api.put(
        `/factories/${id}`,
        {
          completed: value,
        }
      );

      fetchFactories();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="quotation-table">
      <h2>Factory Records</h2>

      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Order</th>
            <th>Shipping</th>
            <th>Metal</th>
            <th>Stone CT</th>
            <th>Final</th>
            <th>Comment</th>
            <th>Completed</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {factories.map((f) => (
            <tr key={f._id}>
              <td>{f.factoryEmployee}</td>
              <td>{f.orderNo}</td>
              <td>{f.shippingNo}</td>
              <td>{f.metalWeight}</td>
              <td>{f.stoneCtWeight}</td>
              <td>{f.finalWeight}</td>
              <td>{f.dailyComment}</td>

              <td>
                <input
                  type="checkbox"
                  checked={f.completed}
                  onChange={(e) =>
                    handleCompleted(
                      f._id,
                      e.target.checked
                    )
                  }
                />
              </td>

              <td>
                {f.completedDate
                  ? new Date(
                      f.completedDate
                    ).toLocaleDateString()
                  : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FactoryTable;