import React, { useState, useEffect } from "react";

// Helper to check dev mode
const isDev = process.env.NODE_ENV === "development";

const BlogComments = ({ blogId }) => {
  const storageKey = `blogComments_${blogId}`;
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: "", text: "" });
  const [successMessage, setSuccessMessage] = useState("");

  // Load comments from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) setComments(JSON.parse(stored));
  }, [storageKey]);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(comments));
  }, [comments, storageKey]);

  const postComment = (e) => {
    e.preventDefault();
    if (!newComment.text.trim()) return;

    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    });

    const commentToAdd = { ...newComment, date: formattedDate };
    setComments([commentToAdd, ...comments]);
    setNewComment({ name: "", text: "" });
    setSuccessMessage("Comment posted successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const deleteComment = (index) => {
    const updated = comments.filter((_, i) => i !== index);
    setComments(updated);
  };

  return (
    <div className="comments-section">
      <h3>Comments</h3>

      {successMessage && <div className="success-msg">{successMessage}</div>}

      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        comments.map((c, i) => (
          <div key={i} className="comment">
            <p>{c.text}</p>
            <small>
              — {c.name || "Anonymous"} on {c.date}
            </small>
            {isDev && (
              <button className="delete-btn" onClick={() => deleteComment(i)}>
                Delete
              </button>
            )}
          </div>
        ))
      )}

      <form onSubmit={postComment} className="comment-form">
        <input
          type="text"
          placeholder="Your name (optional)"
          value={newComment.name}
          onChange={(e) =>
            setNewComment({ ...newComment, name: e.target.value })
          }
        />
        <textarea
          placeholder="Write your comment..."
          value={newComment.text}
          onChange={(e) =>
            setNewComment({ ...newComment, text: e.target.value })
          }
          required
        />
        <button type="submit">Post Comment</button>
      </form>
    </div>
  );
};

export default BlogComments;
