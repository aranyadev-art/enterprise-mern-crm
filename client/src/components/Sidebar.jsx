import { NavLink } from "react-router-dom";


function Sidebar({ sidebarOpen }) {
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
       width: sidebarOpen ? "260px" : "90px",
       transition: "0.3s",
       overflow: "hidden",
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
      {sidebarOpen && (
         <h2
           style={{
             fontSize: "28px",
             fontWeight: "bold",
             margin: 0,
           }}
         >
    CRM Panel
  </h2>
)}

       {sidebarOpen && (
          <p
            style={{
              color: "#9ca3af",
              marginTop: "6px",
              fontSize: "14px",
            }}
          >
            Enterprise Dashboard
          </p>
        )}
      </div>

      {/* Menu */}

      <div>

        <NavLink to="/" style={linkStyle}>
          {sidebarOpen ? "Dashboard" : "🏠"}
        </NavLink>

        <NavLink to="/users" style={linkStyle}>
           {sidebarOpen ? "Users" : "👥"}
        </NavLink>

        <NavLink to="/leads" style={linkStyle}>
          {sidebarOpen ? "Leads" : "📝"}
        </NavLink>

        <NavLink to="/clients" style={linkStyle}>
          {sidebarOpen ? "Clients" : "🏢"}
        </NavLink>

        <NavLink to="/sales-jobs" style={linkStyle}>
          {sidebarOpen ? "Sales Jobs" : "💼"}
        </NavLink>

        <NavLink to="/cad" style={linkStyle}>
          {sidebarOpen ? "CAD" : "📐"}
        </NavLink>  

        <NavLink to="/calculator" style={linkStyle}>
          {sidebarOpen ? "Calculator" : "🧮"}
        </NavLink>

        <NavLink to="/quotation" style={linkStyle}>
          {sidebarOpen ? "Quotation" : "📋"}
        </NavLink>
        <NavLink to="/orders" style={linkStyle}>
          {sidebarOpen ? "Orders" : "📦"}
        </NavLink>
        <NavLink to="/accounts" style={linkStyle}>
          {sidebarOpen ? "Accounts" : "💼"}
        </NavLink>
        <NavLink to="/factory" style={linkStyle}>
          {sidebarOpen ? "Factory" : "🏭"}
        </NavLink>
      </div> 
    </div> 
  );
};

export default Sidebar;