const StatCard = ({
  title,
  value,
  growth,
  icon,
}) => {
  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "18px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
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
              color: "#6b7280",
              marginBottom: "12px",
            }}
          >
            {title}
          </p>

          <h1
            style={{
              fontSize: "32px",
              margin: 0,
            }}
          >
            {value}
          </h1>

        </div>

        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "16px",
            background: "#eff6ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "28px",
          }}
        >
          {icon}
        </div>

      </div>

      <p
        style={{
          marginTop: "18px",
          color: "green",
          fontWeight: "600",
        }}
      >
        {growth} this month
      </p>
    </div>
  );
};

export default StatCard;