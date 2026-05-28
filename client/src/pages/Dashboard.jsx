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
  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-8 shadow-lg flex justify-between items-center"
>
  <div>
    <h1 className="text-3xl font-bold mb-2">
      Good Morning, Admin 👋
    </h1>

    <p className="text-blue-100">
      Welcome back to your CRM dashboard.
    </p>

    <div className="mt-5 flex gap-6">
      <div>
        <p className="text-sm text-blue-200">
          Monthly Revenue
        </p>

        <h2 className="text-2xl font-bold">
          ₹8,45,000
        </h2>
      </div>

      <div>
        <p className="text-sm text-blue-200">
          Growth
        </p>

        <h2 className="text-2xl font-bold">
          +18%
        </h2>
      </div>
    </div>
  </div>

  <div className="hidden md:block">
    <div className="bg-white/20 backdrop-blur-md rounded-2xl px-6 py-4">
      <h3 className="font-semibold">
        Today
      </h3>

      <p className="text-blue-100">
        Monday • 10:30 AM
      </p>
    </div>
  </div>
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

<div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100">

  <div className="flex justify-between items-center mb-6">

    <div>
      <h2 className="text-xl font-bold text-gray-800">
        Revenue Overview
      </h2>

      <p className="text-sm text-gray-500">
        Revenue performance over the last 7 months
      </p>
    </div>

    <div className="text-right">
      <h3 className="text-3xl font-bold text-blue-600">
        ₹8,45,000
      </h3>

      <p className="text-green-600 font-medium">
        ↑ 18% this month
      </p>
    </div>

  </div>

  <div className="h-[300px]">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={revenueData}>

        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
        />

        <XAxis dataKey="month" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#2563eb"
          strokeWidth={4}
          dot={{ r: 5 }}
          activeDot={{ r: 8 }}
        />

      </LineChart>
    </ResponsiveContainer>
  </div>

</div>

        {/* Pipeline */}

        {/* Pipeline */}

<div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100">

  <h2 className="text-xl font-bold mb-1">
    Sales Pipeline
  </h2>

  <p className="text-sm text-gray-500 mb-6">
    Current lead conversion stages
  </p>

  {[
    { name: "Lead", value: 120, width: "100%" },
    { name: "Qualified", value: 80, width: "70%" },
    { name: "Proposal", value: 45, width: "50%" },
    { name: "Negotiation", value: 20, width: "30%" },
    { name: "Won", value: 12, width: "20%" },
  ].map((item, index) => (
    <div key={index} className="mb-5">

      <div className="flex justify-between mb-2">
        <span className="font-medium">
          {item.name}
        </span>

        <span className="text-gray-500">
          {item.value}
        </span>
      </div>

      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">

        <div
          className="h-full bg-blue-600 rounded-full"
          style={{
            width: item.width,
          }}
        />

      </div>

      </div>
  ))}

</div>
{/* Activity & Alerts */}

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

  {/* Recent Activity */}

  <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100">

    <h2 className="text-xl font-bold mb-5">
      Recent Activity
    </h2>

    <div className="space-y-4">

      <div className="flex items-center justify-between border-b pb-3">
        <span>📄 Quotation Created</span>
        <span className="text-gray-500 text-sm">
          2 mins ago
        </span>
      </div>

      <div className="flex items-center justify-between border-b pb-3">
        <span>📦 New Order Added</span>
        <span className="text-gray-500 text-sm">
          15 mins ago
        </span>
      </div>

      <div className="flex items-center justify-between border-b pb-3">
        <span>👤 New Lead Created</span>
        <span className="text-gray-500 text-sm">
          1 hour ago
        </span>
      </div>

      <div className="flex items-center justify-between">
        <span>🏢 Client Updated</span>
        <span className="text-gray-500 text-sm">
          Today
        </span>
      </div>

    </div>

  </div>

  {/* Account Alerts */}

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
    </div>
  );
}