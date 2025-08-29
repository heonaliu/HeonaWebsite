import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./BlogDetail.css";
import likedIcon from "../assets/images/liked.png";
import notLikedIcon from "../assets/images/notliked.png";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { onAuthStateChanged, getAuth, signInAnonymously } from "firebase/auth";
import { db } from "../firebase";

const COMMENTS_PER_PAGE = 12;

const BlogDetail = ({ blogs }) => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: "", text: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const commentsRef = useRef(null);

  // Firebase Auth
  const auth = getAuth();
  const [currentUser, setCurrentUser] = useState(null);

  // Sign in anonymously and listen for auth state changes
  useEffect(() => {
    signInAnonymously(auth)
      .then(() => console.log("Signed in anonymously"))
      .catch((error) => console.error("Anonymous sign-in failed:", error));

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Current User in auth state change:", user.uid);
        setCurrentUser(user);
      } else {
        console.log("No user signed in");
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  // Firestore document reference
  const blogRef = doc(db, "blogs", id);

  // Load likes and comments from Firestore
  useEffect(() => {
    const fetchBlogData = async () => {
      const docSnap = await getDoc(blogRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setLikeCount(data.likeCount || 0);
        setComments(data.comments || []);
        // Set liked state if currentUser exists
        if (currentUser) {
          setLiked(data.likedUsers?.includes(currentUser.uid) || false);
        }
      } else {
        await setDoc(blogRef, { likeCount: 0, comments: [], likedUsers: [] });
        setLikeCount(0);
        setComments([]);
        setLiked(false);
      }
    };
    fetchBlogData();
  }, [blogRef, currentUser]);

  // Toggle like
  const toggleLike = async () => {
    if (!currentUser) {
      console.log("User not ready yet");
      return;
    } // safety check

    const newLiked = !liked;
    setLiked(newLiked);

    let newCount = likeCount;

    if (newLiked) {
      newCount += 1;
      await updateDoc(blogRef, {
        likeCount: newCount,
        likedUsers: arrayUnion(currentUser.uid),
      });
    } else {
      newCount -= 1;
      await updateDoc(blogRef, {
        likeCount: newCount,
        likedUsers: arrayRemove(currentUser.uid),
      });
    }

    setLikeCount(newCount);
  };

  // Post comment
  const postComment = async (e) => {
    e.preventDefault();

    const errors = [];
    if (!newComment.name.trim()) errors.push("Author can't be blank.");
    if (!newComment.text.trim()) errors.push("Body can't be blank.");

    if (errors.length > 0) {
      setErrorMessage(
        "Please correct the following errors:\n" + errors.join("\n")
      );
      setSuccessMessage("");
      return;
    }

    setErrorMessage("");

    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    });

    const commentToAdd = { ...newComment, date: formattedDate };
    setComments([commentToAdd, ...comments]);
    setNewComment({ name: "", text: "" });
    setSuccessMessage("Comment posted successfully! Thank you!");
    setTimeout(() => setSuccessMessage(""), 3000);

    // Add comment to Firestore
    await updateDoc(blogRef, { comments: arrayUnion(commentToAdd) });
  };

  // Delete comment (manual dev delete)
  const deleteComment = async (commentToDelete) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this comment?"
    );
    if (!confirmed) return;

    try {
      await updateDoc(blogRef, {
        comments: comments.filter((c) => c !== commentToDelete),
      });
      setSuccessMessage("Comment deleted successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      console.error("Error deleting comment:", err);
      setErrorMessage("Failed to delete comment.");
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

        {/* Like button always visible, disabled until currentUser is ready */}
        <button
          className="like-btn"
          onClick={toggleLike}
          style={{
            padding: "12px 20px",
            fontSize: "18px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            opacity: !currentUser ? 0.6 : 1,
            cursor: !currentUser ? "not-allowed" : "pointer",
          }}
        >
          <img
            src={liked ? likedIcon : notLikedIcon}
            alt={liked ? "Liked" : "Not liked"}
            style={{ width: "30px", height: "30px" }}
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
                <button
                  className="delete-comment-btn"
                  onClick={() => deleteComment(c)}
                >
                  Delete
                </button>
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
