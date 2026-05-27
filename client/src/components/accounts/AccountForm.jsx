import React from "react";

const AccountForm = ({
  formData,
  handleChange,
  handleSubmit,
  editingId,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md mb-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <input
          type="text"
          name="clientName"
          placeholder="Client Name"
          value={formData.clientName}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />

        <input
          type="number"
          name="dueBalance"
          placeholder="Due Balance"
          value={formData.dueBalance}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />

        <input
          type="number"
          name="creditLimit"
          placeholder="Credit Limit"
          value={formData.creditLimit}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />

        <select
          name="shippingApproval"
          value={formData.shippingApproval}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

      </div>

      <button
        type="submit"
        className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        {editingId ? "Update Account" : "Add Account"}
      </button>
    </form>
  );
};

export default AccountForm;