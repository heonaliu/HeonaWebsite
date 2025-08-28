import React from "react";
import ArtSlider from "../components/ArtSlider";
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

//early Art
import early1 from "../assets/images/earlyArt/earlyArt1.png";
import early2 from "../assets/images/earlyArt/earlyArt2.png";
import early3 from "../assets/images/earlyArt/earlyArt3.png";
import early4 from "../assets/images/earlyArt/earlyArt4.png";
import early5 from "../assets/images/earlyArt/earlyArt5.png";
import early6 from "../assets/images/earlyArt/earlyArt6.png";
import early7 from "../assets/images/earlyArt/earlyArt7.png";
import early8 from "../assets/images/earlyArt/earlyArt8.png";
import early9 from "../assets/images/earlyArt/earlyArt9.png";
import early10 from "../assets/images/earlyArt/earlyArt10.png";
import early11 from "../assets/images/earlyArt/earlyArt11.png";
import early12 from "../assets/images/earlyArt/earlyArt12.png";

const Art = () => {
  const recentArt = [
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

  const earlyArt = [
    { image: early1, note: "Art Trade — drawn in 2023" },
    { image: early2, note: "Character Art — completed in 2022" },
    { image: early3, note: "Competition Entry — (2021)" },
    { image: early4, note: "Eye studies - July 2024" },
    { image: early5, note: "Image Study - July 2024" },
    { image: early6, note: "Competition Entry - July 2024" },
    { image: early7, note: "Artfight 2025 - July 2024" },
    { image: early8, note: "Artfight 2025- July 2024" },
    { image: early9, note: "Artfight 2025 - July 2024" },
    { image: early10, note: "Gauss - July 2024" },
    { image: early11, note: "Artfight 2025- July 2024" },
    { image: early12, note: "Artfight 2025 - July 2024" },
  ];

  return (
    <div style={{ paddingTop: "40px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Recent Art</h2>
      <ArtSlider
        artworks={recentArt}
        description={{
          title: "Recent Art Works",
          content: "This is some descriptive text for the first slider.",
        }}
      />

      <h2 style={{ textAlign: "center", margin: "40px 0 20px" }}>Early Art</h2>
      <ArtSlider
        artworks={earlyArt}
        description={{
          title: "Second Slider Title",
          content: "This is a different text for the second slider.",
        }}
      />
    </div>
  );
};

export default Art;
