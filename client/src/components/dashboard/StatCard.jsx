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
        padding: "24px",
        borderRadius: "20px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        transition: "all 0.3s ease",
        cursor: "pointer",
        border: "1px solid #f1f5f9",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow =
          "0 12px 30px rgba(37,99,235,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 4px 20px rgba(0,0,0,0.06)";
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <p
            style={{
              color: "#64748b",
              fontSize: "14px",
              fontWeight: "500",
              marginBottom: "10px",
            }}
          >
            {title}
          </p>

          <h2
            style={{
              fontSize: "34px",
              fontWeight: "700",
              margin: 0,
              color: "#0f172a",
            }}
          >
            {value}
          </h2>
        </div>

        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "18px",
            background:
              "linear-gradient(135deg,#dbeafe,#bfdbfe)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "30px",
          }}
        >
          {icon}
        </div>
      </div>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            background: "#dcfce7",
            color: "#15803d",
            padding: "4px 10px",
            borderRadius: "999px",
            fontSize: "13px",
            fontWeight: "600",
          }}
        >
          {growth}
        </span>

        <span
          style={{
            color: "#64748b",
            fontSize: "13px",
          }}
        >
          vs last month
        </span>
      </div>
    </div>
  );
};

export default StatCard;