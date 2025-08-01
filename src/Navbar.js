// src/components/Navbar.jsx
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">MyBlog</h2>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#login">Login</a></li>
        <li><a href="#register">Register</a></li>
        <li><a href="#add-blog">Add Blog</a></li>
      </ul>
    </nav>
  );
};


export default Navbar;
