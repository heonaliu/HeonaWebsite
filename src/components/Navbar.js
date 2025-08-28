import React, { useState } from "react";
import { Link } from "react-router-dom";
import channelIcon from "../assets/images/channelIcon.png";
import youtubeLogo from "../assets/images/youtube.png";
import githubLogo from "../assets/images/github.png";
import spotifyLogo from "../assets/images/spotify.png";
import instagramLogo from "../assets/images/instagram.png";
import linkedinLogo from "../assets/images/linkedin.png";
import { FaBars, FaTimes } from "react-icons/fa"; // hamburger icons
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar fade-in">
      <div className="navbar-left">
        <Link to="/">
          <img src={channelIcon} alt="Home" className="channel-icon" />
        </Link>

        {/* Hamburger button */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={menuOpen ? "navbar-links active" : "navbar-links"}>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setMenuOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/art" onClick={() => setMenuOpen(false)}>
              Art
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={() => setMenuOpen(false)}>
              Blog
            </Link>
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
