import React from "react";
import "../../styles/accounts.css";

const AccountForm = ({
  formData,
  handleChange,
  handleSubmit,
  editingId,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="account-form"
    >
      <div className="account-form-grid">

        <input
          type="text"
          name="clientName"
          placeholder="Client Name"
          value={formData.clientName}
          onChange={handleChange}
          className="account-input"
          required
        />

        <input
          type="number"
          name="dueBalance"
          placeholder="Due Balance"
          value={formData.dueBalance}
          onChange={handleChange}
          className="account-input"
          required
        />

        <input
          type="number"
          name="creditLimit"
          placeholder="Credit Limit"
          value={formData.creditLimit}
          onChange={handleChange}
          className="account-input"
          required
        />

        <select
          name="shippingApproval"
          value={formData.shippingApproval}
          onChange={handleChange}
          className="account-input"
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

      </div>

      <button
        type="submit"
        className="account-submit-btn"
      >
        {editingId
          ? "Update Account"
          : "Add Account"}
      </button>
    </form>
  );
};

export default AccountForm;