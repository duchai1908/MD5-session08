import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import SideBar from "./SideBar";
import HeaderAdmin from "./Header";
import "../../../public/admin.css";

export default function AdminIndex() {
  // Lift the collapsed state here
  const [collapsed, setCollapsed] = useState(false);

  // Function to toggle the sidebar collapsed state
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Pass collapsed state and toggle function as props */}
      <SideBar collapsed={collapsed} />
      <Layout>
        {/* Pass toggle function as prop */}
        <HeaderAdmin toggleCollapsed={toggleCollapsed} collapsed={collapsed} />
          <Outlet />
      </Layout>
    </Layout>
  );
}
