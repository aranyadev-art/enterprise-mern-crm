import { useState, useEffect } from "react";

import "./UserForm.css";

function UserForm({ editUser }) {

  const [formData, setFormData] = useState({

    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    status: "Active",
    address: "",
    city: "",
    state: "",
    zip: "",
    password: "",
    role: "Sales",
    moduleAccess: []

  });
useEffect(() => {

  if (editUser) {

    setFormData({
      ...editUser,
      password: "",
    });

  }

}, [editUser]);
  const modules = [
    "Calculator",
    "Client",
    "Quotation",
    "Orders",
    "Shipping",
    "CAD Design",
    "Factory",
    "Alerts"
  ];

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };
  const handleCheckbox = (module) => {

  if (
    formData.moduleAccess.includes(module)
  ) {

    setFormData({

      ...formData,

      moduleAccess:
        formData.moduleAccess.filter(
          (item) => item !== module
        ),

    });

  } else {

    setFormData({

      ...formData,

      moduleAccess: [
        ...formData.moduleAccess,
        module,
      ],

    });

  }

};

 const handleSubmit = async (e) => {

  e.preventDefault();


  try {

    let url = "http://localhost:5000/api/users/register";

    let method = "POST";

    // EDIT MODE
    if (editUser) {

      url = `http://localhost:5000/api/users/${editUser._id}`;

      method = "PUT";
    }

    const response = await fetch(url, {

      method,

      headers: {

        "Content-Type": "application/json",

        Authorization: `Bearer ${localStorage.getItem("token")}`

      },

      body: JSON.stringify(formData)

    });

    const data = await response.json();

    console.log(data);

    if (!response.ok) {

      alert(data.message);

      return;
    }

    alert(
      editUser
        ? "User Updated Successfully"
        : "User Created Successfully"
    );

    window.location.reload();

  } catch (error) {

    console.log(error);

    alert(error.message);

  }
};
  return (

    <div className="user-form-container">

      <h2 className="user-form-title">
        {editUser ? "Edit User" : "Create User"}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="user-form"
      >

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
        />

        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
        />

        <input
          type="text"
          name="zip"
          placeholder="ZIP"
          value={formData.zip}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
        >

          <option value="Admin">
            Admin
          </option>

          <option value="Sales">
            Sales
          </option>

          <option value="Sales Manager">
            Sales Manager
          </option>

          <option value="Factory">
            Factory
          </option>

          <option value="Shipping">
            Shipping
          </option>

          <option value="Accounting">
            Accounting
          </option>

          <option value="CAD">
            CAD
          </option>

          <option value="CAD Manager">
            CAD Manager
          </option>

        </select>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >

          <option value="Active">
            Active
          </option>

          <option value="Inactive">
            Inactive
          </option>

        </select>

        <div className="module-section">

          <h3 className="module-title">
            Module Access
          </h3>

          <div className="module-list">

            {modules.map((module) => (

              <label
                key={module}
                className="module-item"
              >

                <input
                  type="checkbox"
                  checked={formData.moduleAccess.includes(module)}
                  onChange={() => handleCheckbox(module)}
                />
                  
                {module}

              </label>

            ))}

          </div>

        </div>

        <button
          type="submit"
          className="submit-btn"
        >

          {editUser ? "Update User" : "Create User"}

        </button>

      </form>

    </div>

  );

}

export default UserForm;