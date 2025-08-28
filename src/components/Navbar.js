import React from "react";
import { Link } from "react-router-dom";
import channelIcon from "../assets/images/channelIcon.png";
import youtubeLogo from "../assets/images/youtube.png";
import githubLogo from "../assets/images/github.png";
import spotifyLogo from "../assets/images/spotify.png"; // add your image in assets
import instagramLogo from "../assets/images/instagram.png"; // add your image in assets
import linkedinLogo from "../assets/images/linkedin.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar fade-in">
      <div className="navbar-left">
        <Link to="/">
          <img src={channelIcon} alt="Home" className="channel-icon" />
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/art">Art</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <a
          href="https://www.youtube.com/@sleepymeilows"
          target="_blank"
          rel="noreferrer"
        >
          <img src={youtubeLogo} alt="YouTube" className="icon" />
        </a>
        <a href="https://github.com/heonaliu" target="_blank" rel="noreferrer">
          <img src={githubLogo} alt="GitHub" className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/heona-liu-3ab1b237a/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinLogo} alt="GitHub" className="icon" />
        </a>
        <a
          href="https://open.spotify.com/user/31bjy62od5bm6oqisg3kh2xnaduq"
          target="_blank"
          rel="noreferrer"
        >
          <img src={spotifyLogo} alt="Spotify" className="icon" />
        </a>
        <a
          href="https://www.instagram.com/sleepymeilows/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramLogo} alt="Instagram" className="icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
