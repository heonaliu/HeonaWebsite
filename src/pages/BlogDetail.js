import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./BlogDetail.css";
import BlogComments from "../components/BlogComments";

const COMMENTS_PER_PAGE = 12;

const BlogDetail = ({ blogs }) => {
  const { id } = useParams();
  // localStorage key for this blog
  const storageKey = `comments_blog_${id}`;
  const blog = blogs.find((b) => b.id === parseInt(id));

  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState(() => {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
  });
  const [newComment, setNewComment] = useState({ name: "", text: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const commentsRef = useRef(null);

  // Load comments from localStorage on mount
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem(storageKey)) || [];
    setComments(savedComments);
  }, [storageKey]);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(comments));
  }, [comments, storageKey]);

  // Scroll to comments if hash present
  useEffect(() => {
    if (window.location.hash === "#comments" && commentsRef.current) {
      commentsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const postComment = (e) => {
    e.preventDefault();
    if (!newComment.text.trim()) return;

    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    });

    setComments([{ ...newComment, date: formattedDate }, ...comments]);
    setNewComment({ name: "", text: "" });
    setSuccessMessage("Comment posted successfully! Thank you!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  // Delete comment (only visible in dev mode)
  const deleteComment = (index) => {
    if (process.env.NODE_ENV === "development") {
      const updated = [...comments];
      updated.splice(index, 1);
      setComments(updated);
    }
  };

  // Pagination
  const indexOfLast = currentPage * COMMENTS_PER_PAGE;
  const indexOfFirst = indexOfLast - COMMENTS_PER_PAGE;
  const currentComments = comments.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(comments.length / COMMENTS_PER_PAGE);

  if (!blog) return <p>Blog not found</p>;

  return (
    <div className="fade-in blog-detail-wrapper">
      <div className="blog-detail-container">
        <h2>{blog.title}</h2>
        <p className="date">{blog.date}</p>

        <div className="detail-image-container">
          <img src={blog.image} alt={blog.title} className="detail-image" />
        </div>

        {blog.video && (
          <video src={blog.video} controls className="detail-video" />
        )}

        <p style={{ whiteSpace: "pre-line" }}>{blog.content}</p>

        <button className="like-btn" onClick={toggleLike}>
          {liked ? "❤️" : "🤍"}
        </button>

        <div ref={commentsRef} className="comments-section">
          <h3>Comments</h3>

          {successMessage && (
            <div className="success-msg">{successMessage}</div>
          )}

          {currentComments.length === 0 ? (
            <p>No comments yet.</p>
          ) : (
            currentComments.map((c, i) => (
              <div key={i} className="comment">
                <p>{c.text}</p>
                <small>
                  — {c.name || "Anonymous"} on {c.date}
                </small>
                {process.env.NODE_ENV === "development" && (
                  <button
                    className="delete-comment-btn"
                    onClick={() => deleteComment(i)}
                  >
                    Delete
                  </button>
                )}
              </div>
            ))
          )}

          {totalPages > 1 && (
            <div className="pagination">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  className={currentPage === i + 1 ? "active" : ""}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              {currentPage < totalPages && (
                <button onClick={() => setCurrentPage(currentPage + 1)}>
                  Next
                </button>
              )}
            </div>
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
            ></textarea>
            <button type="submit">Post Comment</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
