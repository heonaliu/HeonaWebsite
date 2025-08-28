import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./BlogDetail.css";
import likedIcon from "../assets/images/liked.png";
import notLikedIcon from "../assets/images/notliked.png";

const COMMENTS_PER_PAGE = 12;

const BlogDetail = ({ blogs }) => {
  const { id } = useParams();
  // localStorage key for this blog
  const storageKey = `comments_blog_${id}`;
  const blog = blogs.find((b) => b.id === parseInt(id));

  const storageLikeKey = `liked_blog_${id}`;
  const storageLikeCountKey = `like_count_blog_${id}`;

  const [liked, setLiked] = useState(() => {
    return JSON.parse(localStorage.getItem(storageLikeKey)) || false;
  });
  const [likeCount, setLikeCount] = useState(() => {
    return JSON.parse(localStorage.getItem(storageLikeCountKey)) || 0;
  });
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

  const toggleLike = () => {
    const newLiked = !liked;
    setLiked(newLiked);

    const newCount = newLiked ? likeCount + 1 : likeCount - 1;
    setLikeCount(newCount);

    localStorage.setItem(storageLikeKey, JSON.stringify(newLiked));
    localStorage.setItem(storageLikeCountKey, newCount);
  };

  const [errorMessage, setErrorMessage] = useState("");

  const postComment = (e) => {
    e.preventDefault();

    const errors = [];
    if (!newComment.name.trim()) errors.push("Author can't be blank.");
    if (!newComment.text.trim()) errors.push("Body can't be blank.");

    if (errors.length > 0) {
      setErrorMessage(
        "Please correct the following errors:\n" + errors.join("\n")
      );
      setSuccessMessage(""); // hide success if there was an error
      return;
    }

    setErrorMessage(""); // clear previous errors

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

        <button
          className="like-btn"
          onClick={toggleLike}
          style={{
            padding: "12px 20px", // increase button padding
            fontSize: "18px", // optional if you have text
            display: "flex",
            alignItems: "center",
            gap: "10px", // space between heart and number
          }}
        >
          <img
            src={liked ? likedIcon : notLikedIcon}
            alt={liked ? "Liked" : "Not liked"}
            style={{ width: "30px", height: "30px" }} // bigger icon
          />
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>
            {likeCount}
          </span>
        </button>

        <div ref={commentsRef} className="comments-section">
          <h3>Comments</h3>

          {successMessage && (
            <div className="success-msg">{successMessage}</div>
          )}

          {errorMessage && (
            <div
              className="error-msg"
              style={{
                color: "#f15c5c",
                background: "#f5c7bd",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "5px",
                whiteSpace: "pre-line",
              }}
            >
              {errorMessage}
            </div>
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
              placeholder="Your name"
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
            ></textarea>
            <button type="submit">Post Comment</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
