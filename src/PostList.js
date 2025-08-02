import React, { useState } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([
    { id: 1, text: "🌟 Welcome to the blog!" },
    { id: 2, text: "📰 React is awesome for building UIs." },
    { id: 3, text: "✍️ You can register and start posting now." },
    { id: 4, text: "🔐 Secure login and register features coming soon!" },
    { id: 5, text: "📢 Stay tuned for backend integration with Flask!" }
  ]);

  const [editingId, setEditingId] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleEdit = (id, currentText) => {
    setEditingId(id);
    setEditedText(currentText);
  };

  const handleSaveEdit = () => {
    setPosts(
      posts.map((post) =>
        post.id === editingId ? { ...post, text: editedText } : post
      )
    );
    setEditingId(null);
    setEditedText("");
  };

  return (
    <div>
      <h3>Blog Posts</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "20px" }}>
            {editingId === post.id ? (
              <>
                <textarea
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  rows="3"
                  cols="50"
                />
                <br />
                <button onClick={handleSaveEdit}>💾 Save</button>
                <button onClick={() => setEditingId(null)} style={{ marginLeft: "10px" }}>
                  ❌ Cancel
                </button>
              </>
            ) : (
              <>
                <p>{post.text}</p>
                <button onClick={() => handleEdit(post.id, post.text)}>✏️ Edit</button>
                <button onClick={() => handleDelete(post.id)} style={{ marginLeft: "10px" }}>
                  🗑️ Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
