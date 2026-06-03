import { useEffect, useState } from "react";
import api from "../services/api";

import ShippingForm from "../components/shipping/ShippingForm";
import ShippingTable from "../components/shipping/ShippingTable";

import "../styles/shipping.css";

const Shipping = () => {
  const [showForm, setShowForm] = useState(false);

  const [shippings, setShippings] = useState([]);

  const [form, setForm] = useState({
    gfjNo: "",
    productName: "",
    salesRep: "",
    clientName: "",
    finalQuotation: "",
    metalStoneDetails: "",
    trackingNumber: "",
    systemType: "",
    status: "Pending",
  });

  const fetchShippings = async () => {
    try {
      const res = await api.get("/shippings");

      setShippings(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchShippings();
  }, []);

  return (
    <div className="shipping-page">
      {!showForm ? (
        <>
          <div className="shipping-header">
            <h2>Shipping Management</h2>

            <button
              className="add-btn"
              onClick={() => setShowForm(true)}
            >
              Add Shipping
            </button>
          </div>

          <ShippingTable
            shippings={shippings}
          />
        </>
      ) : (
        <ShippingForm
          form={form}
          setForm={setForm}
          fetchShippings={fetchShippings}
          setShowForm={setShowForm}
        />
      )}
    </div>
  );
};

export default Shipping;