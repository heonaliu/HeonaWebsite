import React from "react";
import "./Home.css";
import ScrollingText from "../components/ScrollingText";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="center-text">Heona Liu</h1>
      <h2
        style={{ textAlign: "center", fontSize: "2.5rem", marginTop: "20px" }}
      >
        I am a
      </h2>
      <ScrollingText
        items={[
          "Digital Artist",
          "Pianist",
          "High Schooler",
          "Exchange Student",
          "Badminton Player",
          "Ballet Dancer",
          "Graphics Designer",
          "YouTuber",
          "Video Editor",
        ]}
        displayTime={2000}
        transitionTime={800}
      />

      <div className="homepage-footer">
        <p>
          Site made with{" "}
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            React
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
