import { useEffect, useState } from "react";
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
    <div className="p-6">
      {showForm ? (
        <FactoryForm
          form={form}
          setForm={setForm}
          fetchFactories={fetchFactories}
          setShowForm={setShowForm}
        />
      ) : (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              Factory Records
            </h2>

            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded"
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