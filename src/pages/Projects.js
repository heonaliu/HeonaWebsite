import React from "react";
import ProjectCard from "../components/ProjectCard";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import "./Projects.css";

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
    <div className="project-text" style={{ padding: "20px" }}>
      <h2 style={{ fontSize: "3rem", fontWeight: "700" }}>My Projects</h2>
      <p>
        Hey! This is a place to put my projects. While I don't have many recent
        projects at the moment, you can consider this website to be a project in
        of itself. In high school I've taken Intro to Computer Science and
        Computer Programming classes. Currently, I'm in the process of
        rebuilding my passion for programming.
      </p>
      <h2 style={{ fontSize: "2rem", fontWeight: "700" }}>Early Programming</h2>
      <p>
        Since I was 7, my dad introduced me to Scratch! Inspired by projects, I
        spent the majority of my time on there making projects. Throughout my
        time on Scratch, I hopped around different accounts. I have a net total
        of around 1600+ followers overall. Since 6th grade, my dad introduced me
        to Python.{" "}
      </p>{" "}
      <p>
        Due to the pandemic, my family made the decision to go homeschooled for
        7th grade. During this time, I followed course, and getting exposed to
        React.js. Meanwhile, I also liked to experiement playing around with
        creating a Discord bot with Python by following YouTube videos. Later in
        2021, I enrolled in STEM's Python course; in 2022, I enrolled in their
        Java course for a semester. course for a semester.
      </p>
      <p>
        In 8th grade, I went back to in-person school and took a pause in my
        development in programming, which I realize was a big mistake.
      </p>
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
