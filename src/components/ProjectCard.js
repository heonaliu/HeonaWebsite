import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card-link"
    >
      <div className="project-card">
        <img src={image} alt={title} className="project-image" />
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="view-project">View Project</span>
      </div>
    </a>
  );
};

export default ProjectCard;
