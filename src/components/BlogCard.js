import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ id, title, summary, date, image }) => {
  const navigate = useNavigate();
  //const location = useLocation();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const likedBlogs = JSON.parse(localStorage.getItem("likedBlogs") || "[]");
    setLiked(likedBlogs.includes(id));
  }, [id]);

  const handleLike = (e) => {
    e.stopPropagation();
    let likedBlogs = JSON.parse(localStorage.getItem("likedBlogs") || "[]");
    if (liked) {
      likedBlogs = likedBlogs.filter((bid) => bid !== id);
      setLiked(false);
    } else {
      likedBlogs.push(id);
      setLiked(true);
    }
    localStorage.setItem("likedBlogs", JSON.stringify(likedBlogs));
  };

  const goToBlog = (scrollToComments = false) => {
    navigate(`/blog/${id}`, { state: { scrollToComments } });
  };

  return (
    <div
      className="card fade-in hover-enlarge"
      style={{
        width: "80%",
        maxWidth: "700px",
        margin: "10px",
        cursor: "pointer",
        transition: "transform 0.2s",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          borderRadius: "10px",
          maxHeight: "300px",
          objectFit: "cover",
        }}
        onClick={() => goToBlog(false)}
      />
      <h3 onClick={() => goToBlog(false)}>{title}</h3>
      <p style={{ fontStyle: "italic", fontSize: "0.9rem", color: "#555" }}>
        {date}
      </p>
      <p>{summary}</p>
      <div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleLike(e);
          }}
        >
          {liked ? "❤️" : "🤍"}
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            goToBlog(true);
          }}
        >
          💬 Comment
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
