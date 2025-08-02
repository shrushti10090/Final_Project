import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">🏠 Blog</Link>
      <Link to="/login">🔐 Login</Link>
      <Link to="/register">📝 Register</Link>
      <Link to="/add-blog">➕ Add Blog</Link>
    </nav>
  );
};

export default Navbar;
