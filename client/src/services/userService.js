import axios from "axios";

const API = "http://localhost:5000/api/users";

const getToken = () => {
  return localStorage.getItem("token");
};

export const getUsers = async () => {
  return axios.get(API, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
};

export const createUser = async (userData) => {
  return axios.post(API, userData, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
};

export const deleteUser = async (id) => {
  return axios.delete(`${API}/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
};

export const updateUser = async (id, userData) => {
  return axios.put(`${API}/${id}`, userData, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
};