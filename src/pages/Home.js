import React from "react";
import "./Home.css";
import ScrollingText from "../components/ScrollingText";

const Home = () => {
  const thingsIAm = [
    "a ballet dancer",
    "a pianist",
    "a high schooler",
    "a programmer",
    "a badminton player",
    "a digital artist",
  ];

  return (
    <div className="home-container">
      <h1 className="center-text">Heona Liu</h1>
      <h2
        style={{ textAlign: "center", fontSize: "2.5rem", marginTop: "20px" }}
      >
        I am
      </h2>
      <ScrollingText
        items={[
          "a ballet dancer",
          "a pianist",
          "a high schooler",
          "a programmer",
          "a badminton player",
          "a digital artist",
        ]}
        displayTime={2000} /* how long the item stays visible */
        transitionTime={800} /* fade in/out duration */
      />
    </div>
  );
};

export default Home;
