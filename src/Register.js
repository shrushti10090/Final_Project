import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registered (fake)");
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
