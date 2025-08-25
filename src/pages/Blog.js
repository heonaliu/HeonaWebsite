import React from "react";
import BlogCard from "../components/BlogCard";

const Blog = () => {
  const blogs = [
    {
      title: "My First Blog",
      summary: "Short intro about this blog.",
      content: "Full blog content goes here.",
      date: "August 25, 2025",
    },
    {
      title: "Another Blog",
      summary: "Short intro about this blog.",
      content: "More details about my work.",
      date: "August 20, 2025",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {blogs.map((b, index) => (
        <BlogCard key={index} {...b} />
      ))}
    </div>
  );
};

export default Blog;
