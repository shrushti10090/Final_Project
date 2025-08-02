// src/Register.jsx
import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/api/register", formData)
      .then((res) => {
        setMessage("✅ Registration successful!");
        setFormData({ username: "", password: "" });
      })
      .catch((err) => {
        setMessage("❌ User already exists or error occurred.");
      });
  };

  return (
    <div className="register-container">
      <h2>📝 Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Choose a username"
          value={formData.username}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Choose a password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Register</button>
      </form>

      {message && <p className="error">{message}</p>}
    </div>
  );
};

export default Register;
