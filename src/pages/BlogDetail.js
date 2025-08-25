import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogDetail = ({ blogs }) => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: "", text: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 12;
  const commentsRef = useRef(null);

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
    if (!newComment.name.trim() || !newComment.text.trim()) return;

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

  // Pagination
  const indexOfLast = currentPage * commentsPerPage;
  const indexOfFirst = indexOfLast - commentsPerPage;
  const currentComments = comments.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(comments.length / commentsPerPage);

  return (
    <div className="fade-in blog-detail">
      <h2>{blog.title}</h2>
      <img src={blog.image} alt={blog.title} className="detail-image" />
      <p className="date">{blog.date}</p>
      <p>{blog.content}</p>

      <button className="like-btn" onClick={toggleLike}>
        {liked ? "❤️ Liked" : "🤍 Like"}
      </button>

      <div ref={commentsRef} className="comments-section">
        <h3>Comments</h3>

        {successMessage && <div className="success-msg">{successMessage}</div>}

        {currentComments.map((c, i) => (
          <div key={i} className="comment">
            <p>{c.text}</p>
            <small>
              — {c.name} on {c.date}
            </small>
          </div>
        ))}

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
            required
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
  );
};

export default BlogDetail;
