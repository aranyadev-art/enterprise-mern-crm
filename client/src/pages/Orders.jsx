import { useEffect, useState } from "react";
import api from "../services/api";

import OrderForm from "../components/orders/OrderForm";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // FETCH ORDERS
  const fetchOrders = async () => {
    try {
      const res = await api.get("/orders");

      setOrders(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // TABLE STYLES
  const tableHeading = {
    textAlign: "left",
    padding: "16px",
    fontSize: "14px",
    fontWeight: "600",
    color: "#374151",
  };

  const tableCell = {
    padding: "16px",
    fontSize: "14px",
    color: "#111827",
  };

  return (
    <div className="p-6">

      {/* SHOW FORM */}
      {showForm ? (
        <div>

          <button
            onClick={() => setShowForm(false)}
            style={{
              marginBottom: "20px",
              padding: "10px 16px",
              background: "#ef4444",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Back to Orders
          </button>

          <OrderForm fetchOrders={fetchOrders} />

        </div>
      ) : (

        /* SHOW TABLE */
        <div style={{ marginTop: "30px" }}>

          {/* HEADER */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#111827",
              }}
            >
              All Orders
            </h2>

            <button
              onClick={() => setShowForm(true)}
              style={{
                padding: "12px 20px",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Create Order
            </button>
          </div>

          {/* TABLE CARD */}
          <div
            style={{
              background: "#fff",
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
            }}
          >

            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
              }}
            >
              <thead
                style={{
                  background: "#f3f4f6",
                }}
              >
                <tr>
                  <th style={tableHeading}>Order ID</th>
                  <th style={tableHeading}>Sales</th>
                  <th style={tableHeading}>CAD</th>
                  <th style={tableHeading}>Client</th>
                  <th style={tableHeading}>Quotation</th>
                  <th style={tableHeading}>Status</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr
                    key={order._id}
                    style={{
                      borderBottom: "1px solid #e5e7eb",
                    }}
                  >
                    <td style={tableCell}>{order.orderId}</td>

                    <td style={tableCell}>
                      {order.salesName}
                    </td>

                    <td style={tableCell}>
                      {order.cadName}
                    </td>

                    <td style={tableCell}>
                      {order.clientName}
                    </td>

                    <td style={tableCell}>
                      {order.quotationId}
                    </td>

                    <td style={tableCell}>
                      <span
                        style={{
                          padding: "6px 12px",
                          borderRadius: "20px",
                          background:
                            order.status === "Pending"
                              ? "#fef3c7"
                              : "#dbeafe",
                          color:
                            order.status === "Pending"
                              ? "#92400e"
                              : "#1d4ed8",
                          fontSize: "13px",
                          fontWeight: "600",
                        }}
                      >
                        {order.status}
                      </span>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>

          </div>

        </div>
      )}

    </div>
  );
};

export default Orders;