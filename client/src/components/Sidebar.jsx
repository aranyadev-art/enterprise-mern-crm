import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkStyle = ({ isActive }) => ({
    display: "block",
    padding: "14px 16px",
    marginBottom: "10px",
    borderRadius: "10px",
    color: isActive ? "#2563eb" : "#d1d5db",
    background: isActive ? "#ffffff" : "transparent",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    transition: "0.3s",
  });

  return (
    <div
      style={{
        width: "260px",
        background: "#111827",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
        borderRight: "1px solid #1f2937",
      }}
    >
      {/* Logo */}

      <div
        style={{
          marginBottom: "35px",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            margin: 0,
          }}
        >
          CRM Panel
        </h2>

        <p
          style={{
            color: "#9ca3af",
            marginTop: "6px",
            fontSize: "14px",
          }}
        >
          Enterprise Dashboard
        </p>
      </div>

      {/* Menu */}

      <div>

        <NavLink to="/" style={linkStyle}>
          Dashboard
        </NavLink>

        <NavLink to="/users" style={linkStyle}>
          Users
        </NavLink>

        <NavLink to="/leads" style={linkStyle}>
          Leads
        </NavLink>

        <NavLink to="/clients" style={linkStyle}>
          Clients
        </NavLink>

        <NavLink to="/sales-jobs" style={linkStyle}>
          Sales Jobs
        </NavLink>

        <NavLink to="/cad" style={linkStyle}>
          CAD
        </NavLink>  

        <NavLink to="/calculator" style={linkStyle}>
          Calculator
        </NavLink>

        <NavLink to="/quotation" style={linkStyle}>
          Quotation
        </NavLink>
        <NavLink to="/orders" style={linkStyle}>
          Orders
        </NavLink>
        <NavLink to="/accounts" style={linkStyle}>
          Accounts
        </NavLink>
      </div> 
    </div> 
  );
};

export default Sidebar;