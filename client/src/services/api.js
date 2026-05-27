import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

// ==============================
// ACCOUNT APIs
// ==============================

// GET ALL ACCOUNTS
export const getAccounts = () => api.get("/accounts");

// CREATE ACCOUNT
export const createAccount = (data) =>
  api.post("/accounts", data);

// UPDATE ACCOUNT
export const updateAccount = (id, data) =>
  api.put(`/accounts/${id}`, data);

// DELETE ACCOUNT
export const deleteAccount = (id) =>
  api.delete(`/accounts/${id}`);
export default api;