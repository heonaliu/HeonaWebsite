import React, { useState, useEffect } from "react";
import "./ScrollingText.css";

const ScrollingText = ({ items, displayTime = 3000, transitionTime = 500 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState("enter"); // enter, visible, exit

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (fadeState === "enter") {
          setFadeState("visible");
        } else if (fadeState === "visible") {
          setFadeState("exit");
        } else if (fadeState === "exit") {
          setCurrentIndex((prev) => (prev + 1) % items.length);
          setFadeState("enter");
        }
      },
      fadeState === "visible" ? displayTime : transitionTime
    );

    return () => clearInterval(interval);
  }, [fadeState, items.length, displayTime, transitionTime]);

  return (
    <div className="scrolling-text-wrapper">
      <div className={`scrolling-text-item ${fadeState}`}>
        {items[currentIndex]}
      </div>
    </div>
  );
};

export default ScrollingText;
