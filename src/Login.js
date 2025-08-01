import React, { useState } from "react";
import "./Login.css";;

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Logged in (fake)");
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
