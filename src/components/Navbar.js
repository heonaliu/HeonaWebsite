import React from "react";
import { Link } from "react-router-dom";
import channelIcon from "../assets/images/channelIcon.png";
import youtubeLogo from "../assets/images/youtube.png";
import githubLogo from "../assets/images/github.png";

const Navbar = () => {
  return (
    <nav
      className="navbar fade-in"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link to="/">
        <img
          src={channelIcon}
          alt="Home"
          style={{ height: "50px", borderRadius: "50%" }}
        />
      </Link>
      <div>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/projects">
          Projects
        </Link>
        <Link className="nav-link" to="/art">
          Art
        </Link>
        <Link className="nav-link" to="/blog">
          Blog
        </Link>
      </div>
      <div>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <img
            src={youtubeLogo}
            alt="YouTube"
            style={{ height: "30px", margin: "0 5px" }}
          />
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <img
            src={githubLogo}
            alt="GitHub"
            style={{ height: "30px", margin: "0 5px" }}
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
