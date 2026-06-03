import api from "../../services/api";
import "../../styles/shipping.css";
const ShippingTable = ({ shippings }) => {
  return (
    <table className="shipping-table">

      <thead>
        <tr>
          <th>GFJ No</th>
          <th>Product Name</th>
          <th>Client Name</th>
          <th>Tracking Number</th>
          <th>Status</th>
          <th>Created Date</th>
        </tr>
      </thead>

      <tbody>

        {shippings.map((shipping) => (
          <tr key={shipping._id}>
            <td>{shipping.gfjNo}</td>
            <td>{shipping.productName}</td>
            <td>{shipping.clientName}</td>
            <td>{shipping.trackingNumber}</td>
            <td>{shipping.status}</td>
            <td>
              {new Date(
                shipping.createdAt
              ).toLocaleDateString()}
            </td>
          </tr>
        ))}

      </tbody>

    </table>
  );
};

export default ShippingTable;