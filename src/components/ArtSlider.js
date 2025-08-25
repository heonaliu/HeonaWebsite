import React, { useState } from "react";
import art1 from "../assets/images/art1.png";
import art2 from "../assets/images/art2.png";

const ArtSlider = () => {
  const images = [art1, art2];
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="fade-in" style={{ textAlign: "center" }}>
      <img
        src={images[index]}
        alt="Art"
        style={{ width: "500px", borderRadius: "15px" }}
      />
      <div>
        <button onClick={prev}>◀</button>
        <button onClick={next}>▶</button>
      </div>
    </div>
  );
};

export default ArtSlider;
