import React, { useState } from "react";
import "./ArtSlider.css";

// Import your art images
import art1 from "../assets/images/art1.png";
import art2 from "../assets/images/art2.png";
import art3 from "../assets/images/art3.png";
import art4 from "../assets/images/art4.png";
import art5 from "../assets/images/art5.png";
import art6 from "../assets/images/art6.png";
import art7 from "../assets/images/art7.png";
import art8 from "../assets/images/art8.png";
import art9 from "../assets/images/art9.png";
import art10 from "../assets/images/art10.png";

const ArtSlider = () => {
  const artworks = [
    { image: art1, note: "Art Trade — drawn in 2023" },
    { image: art2, note: "Character Art — completed in 2022" },
    { image: art3, note: "Competition Entry — (2021)" },
    { image: art4, note: "Eye studies - July 2024" },
    { image: art5, note: "Image Study - July 2024" },
    { image: art6, note: "Competition Entry - July 2024" },
    { image: art7, note: "Artfight 2025 - July 2024" },
    { image: art8, note: "Artfight 2025- July 2024" },
    { image: art9, note: "Artfight 2025 - July 2024" },
    { image: art10, note: "Gauss - July 2024" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? artworks.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === artworks.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="art-slider">
      <div
        className="art-slide-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {artworks.map((art, index) => (
          <div className="art-slide" key={index}>
            <img src={art.image} alt={`Artwork ${index + 1}`} />
            <p className="art-note">{art.note}</p>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button className="arrow left" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="arrow right" onClick={nextSlide}>
        &#10095;
      </button>

      {/* Dots */}
      <div className="dots">
        {artworks.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ArtSlider;
