import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import CAD from "./pages/CAD";
import Leads from "./pages/Leads";
import Clients from "./pages/Clients";
import SalesJobs from "./pages/SalesJobs";
import Calculator from "./pages/Calculator";
import Quotation from "./pages/Quotation";
import Orders from "./pages/Orders";
import Accounts from "./pages/Accounts";
import Users from "./pages/Users";
import Factory from "./pages/Factory";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC ROUTE */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        {/* PROTECTED ROUTES */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />

          <Route path="users" element={<Users />} />
          <Route path="leads" element={<Leads />} />
          <Route path="clients" element={<Clients />} />
          <Route path="sales-jobs" element={<SalesJobs />} />

          <Route path="cad" element={<CAD />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quotation" element={<Quotation />} />
          <Route path="orders" element={<Orders />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="factory" element={<Factory />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;