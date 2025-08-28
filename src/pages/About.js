import React from "react";
import art1 from "../assets/images/art3.png";
import "./About.css";
// import art2 from "../assets/images/art2.png";
import exchange from "../assets/images/exchange-group.png";
import badminton from "../assets/images/badminton.png";
import ballet from "../assets/images/ballet.png";
import art2 from "../assets/images/art2.png";
import graphic1 from "../assets/images/graphic.png";
import graphic2 from "../assets/images/graphic2.png";
import exchange2 from "../assets/images/exchange2.png";
import programming from "../assets/images/programming.png";

import { Link } from "react-router-dom";

//AboutVideo
import AboutVideo from "../components/AboutVideo";

const About = () => {
  //   const digitalArtVideo = "https://www.w3schools.com/html/mov_bbb.mp4";

  return (
    <div
      className="fade-in"
      style={{ display: "flex", flexDirection: "column", padding: "20px" }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "3rem",
          fontWeight: "700",
          marginBottom: "60px", // space between header and first section
          width: "100%",
        }}
      >
        About Me
      </h2>

      <div style={{ display: "flex", marginBottom: "40px" }}>
        <div className="about-text" style={{ flex: 2, paddingRight: "20px" }}>
          <h3>Digital Art</h3>
          <p>
            Since 2020, I was a passionate digital artist. My digital art
            journey has allowed me to pay attention to small but critical
            details while also being one of the best examples of growth
            throughout my life. I love to draw and participate in art contests
            in my free time. I love to incorporate my artistic skills in
            projects, school, for friends, and even the development of this
            website.
          </p>
          <p>
            You can read more and see more of my artworks in the{" "}
            <Link to="/art" className="art-link">
              Art
            </Link>{" "}
            tab
          </p>
        </div>

        <div className="digital-art-images">
          <img src={art1} alt="Art" className="digital-art-img" />
          <img src={art2} alt="Art" className="digital-art-img" />
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "40px" }}>
        <div className="about-text" style={{ flex: 1, paddingRight: "20px" }}>
          <h3>Youtube</h3>
          <p>
            Summary about Youtube...Lorem ipsum dolor sit amet consectetur
            adipiscing elit. Consectetur adipiscing elit quisque faucibus ex
            sapien vitae. Ex sapien vitae pellentesque sem placerat in id.
            Placerat in id cursus mi pretium tellus duis. Pretium tellus duis
            convallis tempus leo eu aenean.
          </p>
        </div>
        <div style={{ flex: 1 }} className="youtube-short-container">
          <iframe
            src="https://www.youtube.com/embed/wnrlNctF3ws"
            title="YouTube Short"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "40px" }}>
        <div
          className="about-text piano-video-wrapper"
          style={{ flex: 2, paddingRight: "20px" }}
        >
          <h3>Piano</h3>
          <p>
            Summary about your YouTube work here... Lorem ipsum dolor sit amet
            consectetur adipiscing elit. Consectetur adipiscing elit quisque
            faucibus ex sapien vitae.
          </p>
        </div>

        <div style={{ flex: 1 }}>
          <div
            style={{
              position: "relative",
              width: "100%", // match container width
              paddingTop: "56.25%", // 16:9 aspect ratio (9/16 = 0.5625)
              marginTop: "10px",
              borderRadius: "15px",
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/MI-CjcbU4pE"
              title="Piano Video"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "0",
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "40px" }}>
        <div className="about-text" style={{ flex: 2, paddingRight: "20px" }}>
          <h3>Exchange Student</h3>
          <p>
            Summary about China Exchange..Lorem ipsum dolor sit amet consectetur
            adipiscing elit. Consectetur adipiscing elit quisque faucibus ex
            sapien vitae. Ex sapien vitae pellentesque sem placerat in id.
            Placerat in id cursus mi pretium tellus duis. Pretium tellus duis
            convallis tempus leo eu aenean..
          </p>
        </div>
        <div className="image-group">
          <img src={exchange} alt="Design" className="responsive-img" />
          <img src={exchange2} alt="Design" className="responsive-img" />
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "40px" }}>
        <div className="about-text" style={{ flex: 2, paddingRight: "20px" }}>
          <h3>Badminton Player</h3>
          <p>
            Summary about Badminton...Lorem ipsum dolor sit amet consectetur
            adipiscing elit. Consectetur adipiscing elit quisque faucibus ex
            sapien vitae. Ex sapien vitae pellentesque sem placerat in id.
            Placerat in id cursus mi pretium tellus duis. Pretium tellus duis
            convallis tempus leo eu aenean.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <img
            src={badminton}
            alt="Art"
            style={{ width: "100%", borderRadius: "15px", marginTop: "10px" }}
          />
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "40px" }}>
        <div className="about-text" style={{ flex: 2, paddingRight: "20px" }}>
          <h3>Ballet Dancer</h3>
          <p>
            Summary about Ballet Lorem ipsum dolor sit amet consectetur
            adipiscing elit. Consectetur adipiscing elit quisque faucibus ex
            sapien vitae. Ex sapien vitae pellentesque sem placerat in id.
            Placerat in id cursus mi pretium tellus duis. Pretium tellus duis
            convallis tempus leo eu aenean.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <img
            src={ballet}
            alt="Art"
            style={{ width: "100%", borderRadius: "15px", marginTop: "10px" }}
          />
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "40px" }}>
        <div className="about-text" style={{ flex: 2, paddingRight: "20px" }}>
          <h3>Programmer</h3>
          <p>
            Summary about Programming...Lorem ipsum dolor sit amet consectetur
            adipiscing elit. Consectetur adipiscing elit quisque faucibus ex
            sapien vitae. Ex sapien vitae pellentesque sem placerat in id.
            Placerat in id cursus mi pretium tellus duis. Pretium tellus duis
            convallis tempus leo eu aenean.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <img
            src={programming}
            alt="Art"
            style={{ width: "100%", borderRadius: "15px", marginTop: "10px" }}
          />
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "40px" }}>
        <div className="about-text" style={{ flex: 2, paddingRight: "20px" }}>
          <h3>Graphic Design</h3>
          <p>
            Summary about your graphic design here...Lorem ipsum dolor sit amet
            consectetur adipiscing elit. Consectetur adipiscing elit quisque
            faucibus ex sapien vitae...
          </p>
        </div>

        <div className="image-group">
          <img src={graphic1} alt="Design" className="responsive-img" />
          <img src={graphic2} alt="Design" className="responsive-img" />
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "40px" }}>
        <div className="about-text" style={{ flex: 2, paddingRight: "20px" }}>
          <h3>Video Editor</h3>
          <p>
            Summary about Video Editing...Lorem ipsum dolor sit amet consectetur
            adipiscing elit. Consectetur adipiscing elit quisque faucibus ex
            sapien vitae. Ex sapien vitae pellentesque sem placerat in id.
            Placerat in id cursus mi pretium tellus duis. Pretium tellus duis
            convallis tempus leo eu aenean.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
