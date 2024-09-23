import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "../App.css"

export default function AdminIndex() {
    const navigate = useNavigate();
  return (
    <div>
      <nav style={{ display: "flex", gap: 10 }}>
        <NavLink end to="/admin">
          DashBoard
        </NavLink>
        <NavLink to="/admin/manager-user">Manager user</NavLink>
        <NavLink to="/admin/manager-product">Manager product</NavLink>
        <button onClick={()=> navigate(-1)}>TrangTrc</button>
        <button onClick={()=> navigate(1)}>TrangSau</button>
      </nav>
      <Outlet />
      <h1>hihi</h1>
    </div>
  );
}
