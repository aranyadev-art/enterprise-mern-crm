import { useEffect, useState } from "react";

import UserForm from "../components/users/UserForm";
import "./User.css";

function Users() {

  const [users, setUsers] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [editUser, setEditUser] = useState(null);
  

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

  return (

    <div style={{ padding: "20px" }}>

      {/* Header */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px"
        }}
      >

        <h2>Users</h2>

        <button

          onClick={() => setShowForm(!showForm)}

          style={{
            padding: "10px 20px",
            backgroundColor: "#1e293b",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >

          {showForm ? "Close Form" : "Add User"}

        </button>

      </div>

      {/* Show Form */}

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
          users.map((user, index) => (

        <tr key={user._id}>

          <td>
            <input type="checkbox" />
          </td>

          <td>{index + 1}</td>

          <td>{user.firstName}</td>

          <td>{user.lastName}</td>

          <td>{user.email}</td>

          <td>

            <span className={`role-badge ${user.role.toLowerCase()}`}>
              {user.role}
            </span>

          </td>

          <td>

            <span className="status-badge">
              ● Active
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
             onClick={() => handleDelete(user._id)}
                   
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