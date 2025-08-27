import React, { useState, useEffect } from "react";
import "./ArtSlider.css";

const ArtSlider = ({ artworks }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false); // fade-in trigger
  const currentArt = artworks[currentIndex];

  useEffect(() => {
    setFadeIn(true);
  }, []); // triggers once on mount

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? artworks.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === artworks.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={`art-slider-wrapper ${fadeIn ? "fade-in" : ""}`}>
      {/* Left side text */}
      <div className="art-text">
        <h3>{currentArt.title}</h3>
        <p>{currentArt.note}</p>
      </div>

      {/* Right side slider */}
      <div className="art-slider">
        <div
          className="art-slide-container"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {artworks.map((art, index) => (
            <div className="art-slide" key={index}>
              <div className="image-wrapper">
                <img src={art.image} alt={`Artwork ${index + 1}`} />
              </div>
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtSlider;
