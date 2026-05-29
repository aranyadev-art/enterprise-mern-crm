import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ setSidebarOpen }) {
  const [sidebarOpen, setSidebarState] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();
  useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setProfileOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
  return (
    <div style={styles.navbar}>

      {/* Left */}

      <div style={styles.leftSection}>
           <button
             style={styles.menuBtn}
             onClick={() => setSidebarOpen((prev) => !prev)}
           >
             ☰
           </button>

        <div>
          <h2 style={styles.title}>
            Dashboard
          </h2>

          <p style={styles.subtitle}>
            Welcome back, Admin 👋
          </p>
        </div>

      </div>

      {/* Right */}

      <div style={styles.rightSection}>

        <input
          type="text"
          placeholder="Search..."
          style={styles.search}
        />

        <div style={styles.notification}>
          🔔

          <span style={styles.badge}>
            3
          </span>
        </div>
              <div
                ref={dropdownRef}
                style={styles.profile}
                onClick={() => setProfileOpen(!profileOpen)}
              >
          <div
  style={{
    ...styles.dropdown,
    opacity: profileOpen ? 1 : 0,
    visibility: profileOpen ? "visible" : "hidden",
    transform: profileOpen
      ? "translateY(0px) scale(1)"
      : "translateY(-10px) scale(0.95)",
  }}
>
          
      <div
       style={styles.dropdownItem}
       onClick={() => {
         navigate("/profile");
         setProfileOpen(false);
       }}
     >
       👤 My Profile
     </div>
          
              <div
                 style={styles.dropdownItem}
                 onClick={() => {
                   navigate("/settings");
                   setProfileOpen(false);
                 }}
               >
                ⚙️ Settings
              </div>
          
              <div
                  style={styles.dropdownItem}
                  onClick={() => {
                    navigate("/notifications");
                    setProfileOpen(false);
                  }}
                >
                🔔 Notifications
              </div>
          
              <div
                 style={styles.logoutItem}
                 onClick={() => {
                     localStorage.removeItem("token");
                     navigate("/login");
                     setProfileOpen(false);
                   }}
               >
                🚪 Logout
              </div>
          
            </div>

           <div style={styles.avatarWrapper}>
         
             <div style={styles.avatar}>
               A
             </div>
         
             <span style={styles.onlineDot}></span>
         
           </div>
         
           <div>
             <h4 style={styles.adminName}>
               Admin
             </h4>
         
             <p style={styles.adminRole}>
               Super Administrator
             </p>
           </div>
         
         </div>

      </div>

    </div>
  );
}

const styles = {

  navbar: {
    height: "75px",
    background: "#ffffff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 25px",
    borderBottom: "1px solid #e5e7eb",
  },

  leftSection: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },

  menuBtn: {
    width: "42px",
    height: "42px",
    border: "none",
    borderRadius: "10px",
    background: "#f3f4f6",
    cursor: "pointer",
    fontSize: "20px",
  },

  title: {
    margin: 0,
    fontSize: "22px",
    fontWeight: "700",
  },

  subtitle: {
    margin: 0,
    fontSize: "13px",
    color: "#6b7280",
  },

  rightSection: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },

  search: {
    width: "260px",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    outline: "none",
  },

  notification: {
    position: "relative",
    fontSize: "24px",
    cursor: "pointer",
  },

  badge: {
    position: "absolute",
    top: "-6px",
    right: "-8px",
    background: "red",
    color: "white",
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "10px",
  },

  profile: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
  },

  avatar: {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    background: "#2563eb",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
  avatarWrapper: {
  position: "relative",
},

  adminName: {
    margin: 0,
    fontSize: "15px",
  },

  adminRole: {
    margin: 0,
    fontSize: "12px",
    color: "#6b7280",
  },
  dropdown: {
  position: "absolute",
  top: "80px",
  right: "25px",
  width: "220px",
  background: "#ffffff",
  borderRadius: "14px",
  padding: "10px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  border: "1px solid #e5e7eb",
  zIndex: 1000,
  transition: "all 0.25s ease",
  transformOrigin: "top right",
},
    dropdownItem: {
  padding: "12px",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "14px",
  color: "#374151",
  marginBottom: "5px",
},
  logoutItem: {
  padding: "12px",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "14px",
  color: "#ef4444",
  background: "#fef2f2",
},

   
  onlineDot: {
  width: "12px",
  height: "12px",
  borderRadius: "50%",
  background: "#22c55e",
  position: "absolute",
  bottom: "2px",
  right: "2px",
  border: "2px solid white",
},

};

export default Navbar;