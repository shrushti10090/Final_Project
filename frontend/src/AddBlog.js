import React, { useState } from "react";
import axios from "axios";
import "./AddBlog.css";

const AddBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content || !formData.author) {
      setMessage("⚠️ Please fill in all fields.");
      return;
    }

    axios.post("http://localhost:5000/api/posts", formData)
      .then((res) => {
        setMessage("✅ Blog post added successfully!");
        setFormData({ title: "", content: "", author: "" });

        // Refresh PostList
        window.location.href = "/";
      })
      .catch((err) => {
        console.error("Error:", err);
        setMessage("❌ Failed to add post.");
      });
  };

  return (
    <div className="add-blog-form">
      <h2>📝 Add New Blog Post</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={formData.title}
          onChange={handleChange}
        /><br />

        <textarea
          name="content"
          placeholder="Write your blog content here..."
          value={formData.content}
          onChange={handleChange}
          rows="4"
        /><br />

        <input
          type="text"
          name="author"
          placeholder="Author name"
          value={formData.author}
          onChange={handleChange}
        /><br />

        <button type="submit">➕ Add Blog</button>
      </form>
    </div>
  );
};

export default AddBlog;
