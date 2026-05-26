import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import StatCard from "../components/dashboard/StatCard";


export default function Dashboard() {

  
  const cards = [
    {
      title: "Total Leads",
      value: "1,245",
      growth: "+12%",
      icon: "👥",
    },
    {
      title: "Clients",
      value: "324",
      growth: "+8%",
      icon: "🏢",
    },
    {
      title: "Sales Jobs",
      value: "86",
      growth: "+15%",
      icon: "💼",
    },
    {
      title: "Revenue",
      value: "₹8,45,000",
      growth: "+18%",
      icon: "💰",
    },
  ];

  const revenueData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 4780 },
  { month: "May", revenue: 5890 },
  { month: "Jun", revenue: 6390 },
  { month: "Jul", revenue: 7490 },
];
  return (
   <div className="space-y-6">
  

      {/* Welcome Banner */}

      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "18px",
          marginBottom: "25px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        }}
      >
        <div>
          <h1 style={{ marginBottom: "10px" }}>
            Good Morning, 👋
          </h1>

          <p style={{ color: "#6b7280" }}>
            Here’s what’s happening with your CRM today.
          </p>
        </div>

        <div>
          <h3>Monday</h3>
          <p>10:30 AM</p>
        </div>
      </div>

      {/* Stats Cards */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(230px, 1fr))",
          gap: "20px",
        }}
      >
   {cards.map((card, index) => (
  <StatCard
    key={index}
    title={card.title}
    value={card.value}
    growth={card.growth}
    icon={card.icon}
  />
))}
      </div>

      {/* Bottom Section */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
          marginTop: "25px",
        }}
      >

        {/* Revenue Box */}

        <div
          style={{
            background: "white",
            borderRadius: "18px",
            padding: "25px",
            minHeight: "320px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          }}
        >
         <div
  style={{
    width: "100%",
    height: "300px",
  }}
>
  <h2>Revenue Overview</h2>

  <div
    style={{
      height: "220px",
      background: "#dbeafe",
      marginTop: "20px",
      borderRadius: "14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
  <ResponsiveContainer width="100%" height="100%">
  <LineChart data={revenueData}>

    <CartesianGrid strokeDasharray="3 3" />

    <XAxis dataKey="month" />

    <YAxis />

    <Tooltip />

    <Line
      type="monotone"
      dataKey="revenue"
      stroke="#2563eb"
      strokeWidth={3}
    />

  </LineChart>
</ResponsiveContainer>
  </div>
</div>
        </div>

        {/* Pipeline */}

        <div
          style={{
            background: "white",
            borderRadius: "18px",
            padding: "25px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          }}
        >
          <h2>Sales Pipeline</h2>

          <div style={{ marginTop: "20px" }}>
            <p>Lead → 120</p>
            <hr />

            <p>Qualified → 80</p>
            <hr />

            <p>Proposal → 45</p>
            <hr />

            <p>Negotiation → 20</p>
            <hr />

            <p>Won → 12</p>
          </div>
        </div>
      </div>
    </div>
  );
}