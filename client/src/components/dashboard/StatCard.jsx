const StatCard = ({
  title,
  value,
  growth,
  icon,
}) => {
  return (
  <div
  style={{
    background: "#ffffff",
    padding: "20px",
    borderRadius: "20px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    border: "1px solid #f1f5f9",
  }}

      onMouseEnter={(e) => {
        e.currentTarget.style.transform =
          "translateY(-4px)";
        e.currentTarget.style.boxShadow =
          "0 12px 24px rgba(15,23,42,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 4px 12px rgba(15,23,42,0.05)";
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              color: "#64748b",
              fontSize: "14px",
              marginBottom: "8px",
            }}
          >
            {title}
          </p>

          <h2
            style={{
              fontSize: "38px",
              fontWeight: "700",
              color: "#0f172a",
            }}
          >
            {value}
          </h2>
        </div>

        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "16px",
            background:
              "linear-gradient(135deg,#dbeafe,#bfdbfe)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "26px",
          }}
        >
          {icon}
        </div>
      </div>

      <div
        style={{
          marginTop: "12px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            background: "#dcfce7",
            color: "#15803d",
            padding: "5px 10px",
            borderRadius: "999px",
            fontSize: "12px",
            fontWeight: "600",
          }}
        >
          {growth}
        </span>

        <span
          style={{
            color: "#64748b",
            fontSize: "12px",
          }}
        >
          vs last month
        </span>
      </div>
    </div>
  );
};

export default StatCard;