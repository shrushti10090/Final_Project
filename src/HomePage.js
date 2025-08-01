// src/components/HomePage.jsx
import React from "react";
import Login from "./Login";
import Register from "./Register";
import PostList from "./PostList";

const HomePage = () => {
  return (
    <div>
      {/* Home section */}
      <div id="home" style={{ padding: "40px" }}>
        <h1>📖 Welcome to My Blog</h1>
        <p>Explore, Write, and Read!</p>
      </div>

      {/* Login section */}
      <div id="login" style={{ padding: "40px", scrollMarginTop: "80px" }}>
        <Login />
      </div>

      {/* Register section */}
      <div id="register" style={{ padding: "40px", scrollMarginTop: "80px" }}>
        <Register />
      </div>

      {/* Add Blog section */}
      <div id="add-blog" style={{ padding: "40px", scrollMarginTop: "80px" }}>
        <PostList />
      </div>
    </div>
  );
};

export default HomePage;
