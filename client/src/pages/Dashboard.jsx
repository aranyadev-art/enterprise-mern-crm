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
<div
  style={{
    padding: "30px",
    background: "#f5f7fb",
    minHeight: "100vh",
  }}
>

    {/* Welcome Banner */}

<div
  style={{
    background:
      "linear-gradient(90deg,#4f46e5,#2563eb,#9333ea)",
    borderRadius: "24px",
    padding: "40px",
    minHeight: "260px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
    marginBottom: "30px",
  }}
>

  <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

  <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

    {/* Left */}

    <div className="flex-1">

      <p className="text-blue-100 uppercase tracking-widest text-xs mb-3">
        Enterprise CRM Dashboard
      </p>
       
      <h1 className="text-5xl font-bold text-white mb-3">
        Good Morning, Admin 👋
      </h1>
       <br></br>
      <p className="text-blue-100 text-lg mb-8">
        Here's what's happening with your business today.
      </p>
           <br></br>
      <div className="flex gap-10">

        <div>
          <p className="text-blue-200 text-sm">
            Revenue
          </p>

          <h3 className="text-4xl font-bold text-white">
            ₹8,45,000
          </h3>
        </div>

        <div>
          <p className="text-blue-200 text-sm">
            Growth
          </p>

          <h3 className="text-4xl font-bold text-green-300">
            +18%
          </h3>
        </div>

      </div>

    </div>

    {/* Right */}

    <div className="flex gap-4">
       <div className="bg-white/15 backdrop-blur-md rounded-2xl p-10 min-w-[180px]">
       <p className="text-blue-100 text-xs  mb-2 font-semibold pl-3 pt-3">
        Active Leads
      </p>

        <h3 className="text-2xl font-bold text-white mt-2">
          120
        </h3>
      </div>

      <div className="bg-white/15 backdrop-blur-md rounded-2xl p-5 min-w-[180px]">
        <p className="text-blue-100 text-sm">
          Today
        </p>

        <h3 className="text-2xl font-bold text-white mt-2">
          Monday
        </h3>

        <p className="text-blue-100 mt-1">
          10:30 AM
        </p>
      </div>

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