import React, { useState } from "react";
import "./ArtSlider.css";

const ArtSlider = ({ artworks, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedImage, setExpandedImage] = useState(null);

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

        {/* Render content safely */}
        {Array.isArray(description.content) ? (
          description.content.map((para, i) => (
            <p className="slider-text" key={i}>
              {para}
            </p>
          ))
        ) : (
          <p className="slider-text">{description.content}</p>
        )}
      </div>

      {/* Right side slider */}
      <div className="art-slider">
        <div
          className="art-slide-container"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {artworks.map((art, index) => (
            <div className="art-slide" key={index}>
              <div
                className="image-wrapper hover-zoom"
                onClick={() => setExpandedImage(art.image)}
              >
                <img
                  src={art.image}
                  alt={`Artwork ${index + 1}`}
                  loading="lazy"
                />
              </div>
              {art.note && <p className="art-note">{art.note}</p>}
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

      {/* Expanded modal */}
      {expandedImage && (
        <div className="expanded-modal" onClick={() => setExpandedImage(null)}>
          <div
            className="expanded-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setExpandedImage(null)}
            >
              ×
            </button>
            <img src={expandedImage} alt="Expanded artwork" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtSlider;
