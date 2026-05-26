import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >

      <Sidebar />

      <div
        style={{
          flex: 1,
          background: "#f5f7fb",
          minHeight: "100vh",
        }}
      >

        <Navbar />

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