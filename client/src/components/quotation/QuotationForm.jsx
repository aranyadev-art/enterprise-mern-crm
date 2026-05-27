import React, { useState, useEffect } from "react";
import api from "../../services/api";
import "./quotation.css";

const QuotationForm = ({ form, setForm, fetchQuotations }) => {
  const [loading, setLoading] = useState(false);

  // AUTO TOTAL CALCULATION
  useEffect(() => {
    const metal = Number(form.metalPrice) || 0;
    const stone = Number(form.stonePrice) || 0;
    const purity = Number(form.purity) || 0;

    const total = metal + stone + (metal * purity) / 100;

    setForm((prev) => ({
      ...prev,
      total,
    }));
  }, [form.metalPrice, form.stonePrice, form.purity]);

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // CREATE QUOTATION
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await api.post("/quotations/create", form);

      if (typeof fetchQuotations === "function") {
        fetchQuotations();
      }
         setForm({
  metalPrice: "",
  stonePrice: "",
  purity: "",
  currency: "INR",
  sendEmail: false,
  total: 0,
});
      alert("Quotation Created");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="quotation-form">
      <h2>Create Quotation</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="metalPrice"
          value={form.metalPrice}
          placeholder="Metal Price"
          onChange={handleChange}
        />

        <input
          name="stonePrice"
          value={form.stonePrice}
          placeholder="Stone Price"
          onChange={handleChange}
        />

        <input
          name="purity"
          value={form.purity}
          placeholder="Purity %"
          onChange={handleChange}
        />

        <select
          name="currency"
          value={form.currency}
          onChange={handleChange}
        >
          <option value="INR">INR</option>
          <option value="USD">USD</option>
        </select>

        <label>
          <input
            type="checkbox"
            name="sendEmail"
            checked={form.sendEmail}
            onChange={handleChange}
          />
          Send Email
        </label>

        <h3>
          Total: {form.currency} {form.total || 0}
        </h3>

        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create"}
        </button>
      </form>
    </div>
  );
};

export default QuotationForm;