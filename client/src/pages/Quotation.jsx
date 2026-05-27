import { useEffect, useState } from "react";
import axios from "axios";


import QuotationForm from "../components/quotation/QuotationForm";
import QuotationTable from "../components/quotation/QuotationTable";

const Quotation = () => {
  const [form, setForm] = useState({
    metalPrice: "",
    stonePrice: "",
    purity: "",
    currency: "INR",
    sendEmail: false,
  });

  const [loading, setLoading] = useState(false);
  const [quotations, setQuotations] = useState([]);

  // CHANGE HANDLER (SAFE FIX)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  // CREATE QUOTATION
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      await axios.post(
        "http://localhost:5000/api/quotations/create",
        {
          ...form,
          metalPrice: Number(form.metalPrice),
          stonePrice: Number(form.stonePrice),
          purity: Number(form.purity),
        }
      );

      fetchQuotations();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // FETCH QUOTATIONS
  const fetchQuotations = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/quotations"
      );

      setQuotations(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuotations();
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

   <QuotationForm
  form={form}
  setForm={setForm}
  handleSubmit={handleSubmit}
  handleChange={handleChange}
  loading={loading}
  fetchQuotations={fetchQuotations}   // ✅ MUST BE HERE
/>

      <QuotationTable quotations={quotations} />

    </div>
  );
};

export default Quotation;