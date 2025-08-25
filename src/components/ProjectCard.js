import React from "react";

const ProjectCard = ({ title, description, link, image }) => {
  return (
    <div className="card fade-in" style={{ width: "300px" }}>
      <img
        src={image}
        alt={title}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noreferrer">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
