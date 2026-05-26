import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import CAD from "./pages/CAD";
import Leads from "./pages/Leads";
import Clients from "./pages/Clients";
import SalesJobs from "./pages/SalesJobs";
import Calculator from "./pages/Calculator";
import Users from "./pages/Users";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<MainLayout />}>

          <Route index element={<Dashboard />} />

          <Route path="users" element={<Users />} />


          <Route path="leads" element={<Leads />} />

          <Route path="clients" element={<Clients />} />

          <Route path="sales-jobs" element={<SalesJobs />} />

          <Route path="cad" element={<CAD />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;