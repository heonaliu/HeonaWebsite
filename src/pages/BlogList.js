import React from "react";
import { useNavigate } from "react-router-dom";
import "./BlogList.css";

const BlogList = ({ blogs = [] }) => {
  const navigate = useNavigate();

  const handleBlogClick = (id) => {
    navigate(`/blog/${id}`);
  };

  if (blogs.length === 0) {
    return <p>No blogs available.</p>;
  }

  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="blog-card hover-enlarge"
          onClick={() => handleBlogClick(blog.id)}
        >
          <img src={blog.image} alt={blog.title} className="blog-card-image" />
          <h3>{blog.title}</h3>
          <p className="date">{blog.date}</p>
          <p className="blog-summary">{blog.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
