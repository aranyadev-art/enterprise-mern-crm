function Navbar() {
  return (
    <div style={styles.navbar}>

      {/* Left */}

      <div style={styles.leftSection}>

        <button style={styles.menuBtn}>
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

        <div style={styles.profile}>

          <div style={styles.avatar}>
            A
          </div>

          <div>
            <h4 style={styles.adminName}>
              Admin
            </h4>

            <p style={styles.adminRole}>
              Administrator
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

  adminName: {
    margin: 0,
    fontSize: "15px",
  },

  adminRole: {
    margin: 0,
    fontSize: "12px",
    color: "#6b7280",
  },

};

export default Navbar;