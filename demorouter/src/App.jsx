import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Page from "./components/Page";
import About from "./components/About";
import "./App.css";

export default function App() {
  return (
    <>
      <nav>
        <div>
          <Link to="/">Home</Link>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/page">Page</NavLink>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/page">Page</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/page" element={<Page />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}
