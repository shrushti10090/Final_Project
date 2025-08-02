import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import PostList from "./PostList";
import Login from "./Login";
import Register from "./Register";
import AddBlog from "./AddBlog";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostList/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-blog" element={<AddBlog />} />
      </Routes>
    </Router>
  );
};

export default App;
