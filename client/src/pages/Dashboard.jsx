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
import "../styles/dashboard.css";



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
<div className="dashboard-container">

    {/* Welcome Banner */}

  <div className="dashboard-banner">
  <div className="banner-left">
    <h1 className="banner-title">
      Good Morning, Admin 👋
    </h1>

    <p className="banner-subtitle">
      Welcome back to your CRM workspace
    </p>

    <p className="banner-description">
      Monitor leads, clients and revenue from one place.
    </p>

    <div className="banner-kpi-row">
      <div className="banner-kpi-card">
        <span className="kpi-label">Total Leads</span>
        <h3>1,245</h3>
      </div>

      <div className="banner-kpi-card">
        <span className="kpi-label">Active Clients</span>
        <h3>324</h3>
      </div>

      <div className="banner-kpi-card">
        <span className="kpi-label">Revenue</span>
        <h3>₹8.45L</h3>
      </div>
    </div>
  </div>

  <div className="banner-right">
    <div className="date-card">
      <p className="day">Monday</p>
      <p className="time">10:30 AM</p>
    </div>
  </div>
</div>

    {/* Stats */}

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
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
    {/* Revenue + Pipeline */}

    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

      <div className="xl:col-span-2 bg-white rounded-3xl p-6 shadow-md border border-gray-100">

        {/* Revenue Chart */}

      </div>

      <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100">

        {/* Pipeline */}

      </div>

    </div>

    {/* Activity + Alerts */}

    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

      <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100">

        <h2 className="text-xl font-bold mb-5">
          Recent Activity
        </h2>

        <div className="space-y-4">

          <div className="flex justify-between border-b pb-3">
            <span>📄 Quotation Created</span>
            <span className="text-gray-500 text-sm">
              2 mins ago
            </span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span>📦 New Order Added</span>
            <span className="text-gray-500 text-sm">
              15 mins ago
            </span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span>👤 New Lead Created</span>
            <span className="text-gray-500 text-sm">
              1 hour ago
            </span>
          </div>

          <div className="flex justify-between">
            <span>🏢 Client Updated</span>
            <span className="text-gray-500 text-sm">
              Today
            </span>
          </div>

        </div>

      </div>

      <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100">

        <h2 className="text-xl font-bold mb-5 text-red-600">
          Account Alerts
        </h2>

        <div className="space-y-4">

          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <h4 className="font-semibold text-red-700">
              ABC Corp
            </h4>

            <p className="text-sm text-red-600">
              Credit limit exceeded.
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <h4 className="font-semibold text-yellow-700">
              XYZ Industries
            </h4>

            <p className="text-sm text-yellow-600">
              Shipping approval pending.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h4 className="font-semibold text-blue-700">
              Reminder Due
            </h4>

            <p className="text-sm text-blue-600">
              3 payment reminders pending.
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>
);
}