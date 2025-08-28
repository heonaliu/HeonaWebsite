import React, { useState, useEffect } from "react";
import "./ArtSlider.css";

const ArtSlider = ({ artworks, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? artworks.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === artworks.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="art-slider-wrapper">
      {/* Left side descriptive text */}
      <div className="art-text">
        <h3>{description.title}</h3>
        <p>{description.content}</p>
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
