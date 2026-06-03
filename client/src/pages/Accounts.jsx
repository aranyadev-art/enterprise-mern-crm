import React, { useEffect, useState } from "react";
import "../styles/accounts.css";

import {
  getAccounts,
  createAccount,
  updateAccount,
  deleteAccount,
} from "../services/api";

import AccountForm from "../components/accounts/AccountForm";
import AccountTable from "../components/accounts/AccountTable";

const Accounts = () => {

  const [accounts, setAccounts] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    clientName: "",
    dueBalance: "",
    creditLimit: "",
    shippingApproval: "Yes",
  });

  const fetchAccounts = async () => {
    try {
      const res = await getAccounts();
      setAccounts(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await updateAccount(editingId, formData);
        setEditingId(null);
      } else {
        await createAccount(formData);
      }

      setFormData({
        clientName: "",
        dueBalance: "",
        creditLimit: "",
        shippingApproval: "Yes",
      });

      fetchAccounts();

    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (account) => {
    setFormData({
      clientName: account.clientName,
      dueBalance: account.dueBalance,
      creditLimit: account.creditLimit,
      shippingApproval: account.shippingApproval,
    });

    setEditingId(account._id);
  };

  const handleDelete = async (id) => {
    try {
      await deleteAccount(id);
      fetchAccounts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="accounts-page">

      <div className="accounts-header">
        <h1>Account Management</h1>
        <p>
          Manage customer balances, credit limits and shipping approvals.
        </p>
      </div>

      <AccountForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        editingId={editingId}
      />

      <AccountTable
        accounts={accounts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />

    </div>
  );
};

export default Accounts;