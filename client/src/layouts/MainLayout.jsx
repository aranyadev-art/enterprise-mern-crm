import { Outlet } from "react-router-dom";
import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const MainLayout = () => {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div
      style={{
        display: "flex",
      }}
    >

<Sidebar sidebarOpen={sidebarOpen} />

      <div
        style={{
          flex: 1,
          background: "#f5f7fb",
          minHeight: "100vh",
        }}
      >

      <Navbar setSidebarOpen={setSidebarOpen} />

        <div
          style={{
            padding: "25px",
          }}
        >
          <Outlet />
        </div>

      </div>

    </div>
  );
};

export default MainLayout;