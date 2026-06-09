import { useEffect, useState } from "react";

import UserForm from "../components/users/UserForm";
import "./User.css";

function Users() {

  const [users, setUsers] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

const [roleFilter, setRoleFilter] = useState("");

const [statusFilter, setStatusFilter] = useState("");
  

  useEffect(() => {

           
    fetch("http://localhost:5000/api/users", {

      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },

    })

      .then((res) => res.json())

.then((data) => {
  console.log("API Response:", data);

  if (Array.isArray(data)) {
    setUsers(data);
  } else {
    setUsers([]);
  }
});

  }, []);
  const handleDelete = async (id) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this user?"
  );

  if (!confirmDelete) return;

  try {

    await fetch(`http://localhost:5000/api/users/${id}`, {
      method: "DELETE",
      
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    setUsers(users.filter((user) => user._id !== id));

  } catch (error) {

    console.log(error);

  }
};
const filteredUsers = users.filter((user) => {

  const fullName =
    `${user.firstName} ${user.lastName}`.toLowerCase();

  const matchesSearch =
    fullName.includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesRole =
    roleFilter === "" ||
    user.role === roleFilter;

  const matchesStatus =
    statusFilter === "" ||
    user.status === statusFilter;

  return (
    matchesSearch &&
    matchesRole &&
    matchesStatus
  );
});
const totalUsers = users.length;

const activeUsers = users.filter(
  (user) => user.status === "Active"
).length;

const inactiveUsers = users.filter(
  (user) => user.status === "Inactive"
).length;

const adminUsers = users.filter(
  (user) => user.role === "Admin"
).length;

 return (

  <div style={{ padding: "20px" }}>

    <div className="filter-card">

      {/* Stats Cards */}

      <div className="stats-grid">

        <div className="stat-card">
          <h3>{totalUsers}</h3>
          <p>Total Users</p>
        </div>

        <div className="stat-card">
          <h3>{activeUsers}</h3>
          <p>Active Users</p>
        </div>

        <div className="stat-card">
          <h3>{inactiveUsers}</h3>
          <p>Inactive Users</p>
        </div>

        <div className="stat-card">
          <h3>{adminUsers}</h3>
          <p>Admins</p>
        </div>

      </div>

      <h3 className="filter-title">
        System Users
      </h3>

      <div className="user-filters">

        <div className="filter-group">

          <label>Username</label>

          <input
            type="text"
            placeholder="Search user..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />

        </div>

        <div className="filter-group">

          <label>User Role</label>

          <select
            value={roleFilter}
            onChange={(e) =>
              setRoleFilter(e.target.value)
            }
          >
            <option value="">All Roles</option>
            <option value="Admin">Admin</option>
            <option value="Sales">Sales</option>
            <option value="Sales Manager">Sales Manager</option>
            <option value="Factory">Factory</option>
            <option value="Shipping">Shipping</option>
            <option value="Accounting">Accounting</option>
            <option value="CAD">CAD</option>
            <option value="CAD Manager">CAD Manager</option>
          </select>

        </div>

        <div className="filter-group">

          <label>Status</label>

          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
          >
            <option value="">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

        </div>

      </div>

      <div className="filter-actions">

        <button
          className="reset-btn"
          onClick={() => {
            setSearchTerm("");
            setRoleFilter("");
            setStatusFilter("");
          }}
        >
          Reset
        </button>

        <button className="search-btn">
          Search
        </button>

      </div>

    </div>

    {/* Add User Button */}

   {!showForm && (

<div className="user-action-bar">

  <button
    className="add-user-btn"
    onClick={() => {
      setEditUser(null);
      setShowForm(true);
      
    }}
  >
    {showForm ? "Close Form" : "+ Add User"}
  </button>

</div>
)}

    {/* Form */}

    {showForm ? (

      <UserForm editUser={editUser} />

    ) : (

      <div className="user-table-container">

        <table className="user-table">

          <thead>

            <tr>

              <th>
                <input type="checkbox" />
              </th>

              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {Array.isArray(users) &&
              filteredUsers.map((user, index) => (

                <tr key={user._id}>

                  <td>
                    <input type="checkbox" />
                  </td>

                  <td>{index + 1}</td>

                  <td>{user.firstName}</td>

                  <td>{user.lastName}</td>

                  <td>{user.email}</td>

                  <td>

                    <span
                      className={`role-badge ${user.role.toLowerCase()}`}
                    >
                      {user.role}
                    </span>

                  </td>

                  <td>

                    <span className="status-badge">
                      ● {user.status}
                    </span>

                  </td>

                  <td>

                    <button
                      className="edit-btn"
                      onClick={() => {
                        setEditUser(user);
                        setShowForm(true);
                      }}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        handleDelete(user._id)
                      }
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

          </tbody>

        </table>

      </div>

    )}

  </div>

);

}

export default Users;