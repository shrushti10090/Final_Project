// src/PostList.jsx
import React, { useState } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Atomic Habits",
      content: "An easy & proven way to build good habits and break bad ones.",
      author: "James Clear",
    },
    {
      id: 2,
      title: "The Alchemist",
      content: "A journey of a shepherd boy following his dream.",
      author: "Paulo Coelho",
    },
    {
      id: 3,
      title: "Ikigai",
      content: "The Japanese secret to a long and happy life.",
      author: "Héctor García",
    },
    {
      id: 4,
      title: "Deep Work",
      content: "Rules for focused success in a distracted world.",
      author: "Cal Newport",
    },
    {
      id: 5,
      title: "Rich Dad Poor Dad",
      content: "What the rich teach their kids about money.",
      author: "Robert Kiyosaki",
    },
  ]);

  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    author: "",
  });

  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleAddPost = (e) => {
    e.preventDefault();
    const newId = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;
    const postToAdd = { id: newId, ...newPost };
    setPosts([...posts, postToAdd]);
    setNewPost({ title: "", content: "", author: "" });
  };

  const handleDelete = (id) => {
    const updated = posts.filter((post) => post.id !== id);
    setPosts(updated);
  };

  return (
    <div>
      {/* 👇 Add Post Form (no heading) */}
      <form onSubmit={handleAddPost} style={{ marginBottom: "30px" }}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newPost.title}
          onChange={handleChange}
          required
          style={{ marginRight: "10px", padding: "8px" }}
        />
        <input
          type="text"
          name="content"
          placeholder="Content"
          value={newPost.content}
          onChange={handleChange}
          required
          style={{ marginRight: "10px", padding: "8px" }}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={newPost.author}
          onChange={handleChange}
          required
          style={{ marginRight: "10px", padding: "8px" }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            padding: "8px 16px",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          Add
        </button>
      </form>

      {/* 👇 Blog Post List */}
      <h2>All Blog Posts</h2>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            margin: "10px 0",
            borderRadius: "6px",
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>
            <em>— {post.author}</em>
          </p>
          {/* 👇 Delete + Option button side by side */}
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={() => handleDelete(post.id)}
              style={{
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                padding: "6px 12px",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              Delete
            </button>
            <button
              style={{
                backgroundColor: "#6c757d",
                color: "white",
                border: "none",
                padding: "6px 12px",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
