import React from "react";
import ArtSlider from "../components/ArtSlider";

const Art = () => {
  const images = [
    "https://via.placeholder.com/500x400?text=Art+1",
    "https://via.placeholder.com/500x400?text=Art+2",
    "https://via.placeholder.com/500x400?text=Art+3",
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2 className="fade-in">My Art Journey</h2>
      <ArtSlider images={images} />
    </div>
  );
};

export default Art;
