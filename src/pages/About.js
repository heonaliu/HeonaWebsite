import React from "react";
import art1 from "../assets/images/art1.png";
import "./About.css";
// import art2 from "../assets/images/art2.png";

const About = () => {
  //   const digitalArtVideo = "https://www.w3schools.com/html/mov_bbb.mp4";
  const pianoVideo = "https://www.w3schools.com/html/movie.mp4";

  return (
    <div
      className="fade-in"
      style={{ display: "flex", flexDirection: "column", padding: "20px" }}
    >
      <div style={{ display: "flex", marginBottom: "40px" }}>
        <div style={{ flex: 2, paddingRight: "20px" }}>
          <h3>Digital Art</h3>
          <p>
            Summary about your digital art here...Lorem ipsum dolor sit amet
            consectetur adipiscing elit. Consectetur adipiscing elit quisque
            faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat
            in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus
            duis convallis tempus leo eu aenean.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <img
            src={art1}
            alt="Art"
            style={{ width: "100%", borderRadius: "15px", marginTop: "10px" }}
          />
          {/* <img
            src={art2}
            alt="Art"
            style={{ width: "100%", borderRadius: "15px", marginTop: "10px" }}
          /> */}
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "40px" }}>
        <div style={{ flex: 1, paddingRight: "20px" }}>
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
        <div style={{ flex: 1, paddingRight: "20px" }}>
          <h3>Piano</h3>
          <p>
            Summary about piano..Lorem ipsum dolor sit amet consectetur
            adipiscing elit. Consectetur adipiscing elit quisque faucibus ex
            sapien vitae. Ex sapien vitae pellentesque sem placerat in id.
            Placerat in id cursus mi pretium tellus duis. Pretium tellus duis
            convallis tempus leo eu aenean..
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <video width="100%" controls src={pianoVideo}></video>
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "40px" }}>
        <div style={{ flex: 2, paddingRight: "20px" }}>
          <h3>Exchange Student</h3>
          <p>
            Summary about China Exchange..Lorem ipsum dolor sit amet consectetur
            adipiscing elit. Consectetur adipiscing elit quisque faucibus ex
            sapien vitae. Ex sapien vitae pellentesque sem placerat in id.
            Placerat in id cursus mi pretium tellus duis. Pretium tellus duis
            convallis tempus leo eu aenean..
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <img
            src={art1}
            alt="Art"
            style={{ width: "100%", borderRadius: "15px", marginTop: "10px" }}
          />
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "40px" }}>
        <div style={{ flex: 2, paddingRight: "20px" }}>
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
            src={art1}
            alt="Art"
            style={{ width: "100%", borderRadius: "15px", marginTop: "10px" }}
          />
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "40px" }}>
        <div style={{ flex: 2, paddingRight: "20px" }}>
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
            src={art1}
            alt="Art"
            style={{ width: "100%", borderRadius: "15px", marginTop: "10px" }}
          />
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "40px" }}>
        <div style={{ flex: 2, paddingRight: "20px" }}>
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
            src={art1}
            alt="Art"
            style={{ width: "100%", borderRadius: "15px", marginTop: "10px" }}
          />
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "40px" }}>
        <div style={{ flex: 2, paddingRight: "20px" }}>
          <h3>Graphic Designer</h3>
          <p>
            Summary about Graph Design...Lorem ipsum dolor sit amet consectetur
            adipiscing elit. Consectetur adipiscing elit quisque faucibus ex
            sapien vitae. Ex sapien vitae pellentesque sem placerat in id.
            Placerat in id cursus mi pretium tellus duis. Pretium tellus duis
            convallis tempus leo eu aenean.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <img
            src={art1}
            alt="Art"
            style={{ width: "100%", borderRadius: "15px", marginTop: "10px" }}
          />
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "40px" }}>
        <div style={{ flex: 2, paddingRight: "20px" }}>
          <h3>Video Editor</h3>
          <p>
            Summary about Video Editing...Lorem ipsum dolor sit amet consectetur
            adipiscing elit. Consectetur adipiscing elit quisque faucibus ex
            sapien vitae. Ex sapien vitae pellentesque sem placerat in id.
            Placerat in id cursus mi pretium tellus duis. Pretium tellus duis
            convallis tempus leo eu aenean.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <img
            src={art1}
            alt="Art"
            style={{ width: "100%", borderRadius: "15px", marginTop: "10px" }}
          />
        </div>
      </div>

      {/* Add Ballet, Programming, Exchange sections similarly */}
    </div>
  );
};

export default About;
