import React from "react";
import ProjectCard from "../components/ProjectCard";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";

const Projects = () => {
  const projects = [
    {
      title: "Scratch Project 1",
      description: "MBTI Game",
      link: "https://scratch.mit.edu/projects/686789338/",
      image: project1,
    },
    {
      title: "Scratch Project 2",
      description: "Another creative project.",
      link: "https://scratch.mit.edu/projects/706358508/",
      image: project2,
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Projects</h2>
      <p>Overview of my projects combining art and coding.</p>

      <h3>Early Programming</h3>
      <p>Summary about my early programming projects...</p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
