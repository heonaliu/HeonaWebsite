import React, { useState, useEffect } from "react";

const BlogComments = ({ blogId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const storageKey = `comments-${blogId}`;

  // Load comments from localStorage on mount
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem(storageKey)) || [];
    setComments(savedComments);
  }, [storageKey]);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(comments));
  }, [comments, storageKey]);

  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    setComments((prev) => [
      ...prev,
      { id: Date.now(), text: newComment.trim() },
    ]);
    setNewComment("");
  };

  const handleDeleteComment = (id) => {
    setComments((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h3>Comments</h3>
      <div style={{ marginBottom: "10px" }}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          rows={3}
          style={{ width: "100%", padding: "8px", fontSize: "16px" }}
        />
        <button onClick={handleAddComment} style={{ marginTop: "5px" }}>
          Add Comment
        </button>
      </div>

      <div>
        {comments.map((c) => (
          <div
            key={c.id}
            style={{
              padding: "8px",
              border: "1px solid #ccc",
              marginBottom: "5px",
              borderRadius: "5px",
              position: "relative",
            }}
          >
            {c.text}
            {process.env.NODE_ENV === "development" && (
              <button
                onClick={() => handleDeleteComment(c.id)}
                style={{
                  position: "absolute",
                  top: "5px",
                  right: "5px",
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  padding: "2px 6px",
                  cursor: "pointer",
                }}
              >
                X
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogComments;
