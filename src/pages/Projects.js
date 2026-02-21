import React from "react";
import ProjectCard from "../components/ProjectCard";
import CurrProjectCard from "../components/CurrProjectCard";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import currProject1 from "../assets/images/tako-welcome.png";
import currProject2 from "../assets/images/programming-club.png";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "MBTI Quiz (2023)",
      description: "MBTI Game - Inspired by cute and minimalistic applications",
      link: "https://scratch.mit.edu/projects/686789338/",
      image: project1,
    },
    {
      title: "Chinese Dimsum: FPCA (2023)",
      description:
        "This is a Front Page Cover Application using Scratch Vector Art",
      link: "https://scratch.mit.edu/projects/706358508/",
      image: project2,
    },
    {
      title: "Scrolling Platformer Game: Through The Internet (2020)",
      description:
        "Followed Griffpatch Scrolling Platformer Tutorial on YouTube",
      link: "https://scratch.mit.edu/projects/466941627/",
      image: project3,
    },
  ];

  const currProjects = [
    {
      title: "Tako Focus",
      description:
        "TakoFocus is a minimalist, productivity web app designed conquer procrastination through focused sessions, and adorable motivation from Tako the octopus",
      link: "https://takofocus.vercel.app",
      image: currProject1,
    },

    {
      title: "NNHS Programming Club Website",
      description:
        "The official website for the programming club at Newton North High School. Built in collaboration by many of the club's members using React and hosted on GitHub Pages ",
      link: "https://nnhsprogramming.club/",
      image: currProject2,
    },
  ];

  return (
    <div className="project-text" style={{ padding: "20px" }}>
      <h2 style={{ fontSize: "3rem", fontWeight: "700" }}>My Projects</h2>
      <p>
        Hey! This is a place to put my projects. In high school I've taken Intro
        to Computer Science and Computer Programming classes. I also take part
        in my school's programming club where we collaborate on problems and
        compete in competitions like American Computer Science League (ACSL).
        Currently, I'm in the process of rebuilding my passion for programming
        through fun projects (like this portfolio website).
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {currProjects.map((p, i) => (
          <CurrProjectCard key={i} {...p} />
        ))}
      </div>
      <h2 style={{ fontSize: "2rem", fontWeight: "700" }}>Early Programming</h2>
      <p>
        Since I was 7, my dad introduced me to Scratch! Inspired by projects, I
        spent the majority of my time on there making projects. Throughout my
        time on Scratch, I hopped around different accounts. I have a net total
        of around 1600+ followers overall. When I was in 6th grade, my dad
        introduced me to Python.
      </p>
      <p>
        Due to the pandemic, my family made the decision to go homeschooled for
        7th grade. During this time, I followed course, and getting exposed to
        React.js. Meanwhile, I also liked to experiment playing around with
        creating a Discord bot with Python by following YouTube videos. Later in
        2021, I enrolled in STEM's Python course; in 2022, I enrolled in their
        Java course for a semester course.
      </p>
      <p>
        In 8th grade, I went back to in-person school and took a pause in my
        development in programming, which I realize was a big mistake.
      </p>
      <p>
        The Scratch Projects below are ones from 2022 (7th Grade). This was also
        a time where I was developing an increasing passion for digital art.
        These projects best feature me combining my art skills with programming
        skills.
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
