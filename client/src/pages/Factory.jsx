import { useEffect, useState } from "react";
import "../styles/factory.css";
import axios from "axios";

import FactoryForm from "../components/factory/FactoryForm";
import FactoryTable from "../components/factory/FactoryTable";

const Factory = () => {
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    quotation: "",
    factoryEmployee: "",
    orderNo: "",
    shippingNo: "",
    metalWeight: "",
    stoneCtWeight: "",
    finalWeight: "",
    dailyComment: "",
    completed: false,
  });

  const [factories, setFactories] = useState([]);

  const fetchFactories = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/factories"
      );

      setFactories(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFactories();
  }, []);

  return (
  <div className="factory-page">
      {showForm ? (
        <FactoryForm
          form={form}
          setForm={setForm}
          fetchFactories={fetchFactories}
          setShowForm={setShowForm}
        />
      ) : (
        <>
          <div>
            <h1>
              Factory Records
            </h1>

            <button
              onClick={() => setShowForm(true)}
              className="factory-create-btn"
            >
              Create Factory Record
            </button>
          </div>

          <FactoryTable
            factories={factories}
            fetchFactories={fetchFactories}
          />
        </>
      )}
    </div>
  );
};

export default Factory;