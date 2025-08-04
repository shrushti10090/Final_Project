import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PostList.css";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedPost, setEditedPost] = useState({ title: "", content: "" });

  const fetchPosts = () => {
    axios.get("http://localhost:5000/api/posts")
      .then((res) => setPosts(res.data.posts))
      .catch((err) => console.error("Error fetching posts:", err));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/posts/${id}`)
      .then(() => fetchPosts())
      .catch((err) => console.error("Error deleting post:", err));
  };

  const handleEdit = (post) => {
    setEditingId(post.id);
    setEditedPost({ title: post.title, content: post.content });
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditedPost({ title: "", content: "" });
  };

  const handleSave = () => {
    axios.put(`http://localhost:5000/api/posts/${editingId}`, editedPost)
      .then(() => {
        fetchPosts();
        setEditingId(null);
        setEditedPost({ title: "", content: "" });
      })
      .catch((err) => console.error("Error updating post:", err));
  };

  return (
    <div className="postlist-container">
      <h2 style={{ textAlign: "center" }}>📚 Blog Posts</h2>

      {posts.map((post) => (
        <div className="post-card" key={post.id}>
          {editingId === post.id ? (
            <>
              <input
                type="text"
                value={editedPost.title}
                onChange={(e) => setEditedPost({ ...editedPost, title: e.target.value })}
              />
              <textarea
                rows="4"
                value={editedPost.content}
                onChange={(e) => setEditedPost({ ...editedPost, content: e.target.value })}
              />
              <div className="btn-row">
                <button onClick={handleSave}>💾 Save</button>
                <button onClick={handleCancel}>❌ Cancel</button>
              </div>
            </>
          ) : (
            <>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <small><b>Author:</b> {post.author}</small>
              <div className="btn-row">
                <button onClick={() => handleEdit(post)}>✏️ Edit</button>
                <button onClick={() => handleDelete(post.id)}>🗑️ Delete</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostList;
