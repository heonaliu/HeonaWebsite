import React from "react";
import art1 from "../assets/images/art1.png";
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
          <p>Summary about your digital art here...</p>
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
          <p>Summary about Youtube...</p>
        </div>
        <div style={{ flex: 1 }}>
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/wnrlNctF3ws"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "40px" }}>
        <div style={{ flex: 1, paddingRight: "20px" }}>
          <h3>Piano</h3>
          <p>Summary about piano...</p>
        </div>
        <div style={{ flex: 1 }}>
          <video width="100%" controls src={pianoVideo}></video>
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "40px" }}>
        <div style={{ flex: 1, paddingRight: "20px" }}>
          <h3>Exchange Student</h3>
          <p>Summary about China Exchange...</p>
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
        <div style={{ flex: 1, paddingRight: "20px" }}>
          <h3>Badminton Player</h3>
          <p>Summary about China Exchange...</p>
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
        <div style={{ flex: 1, paddingRight: "20px" }}>
          <h3>Ballet Dancer</h3>
          <p>Summary about Ballet</p>
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
        <div style={{ flex: 1, paddingRight: "20px" }}>
          <h3>Programmer</h3>
          <p>Summary about Programming...</p>
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
        <div style={{ flex: 1, paddingRight: "20px" }}>
          <h3>Graphic Designer</h3>
          <p>Summary about Programming...</p>
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
