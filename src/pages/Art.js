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
import art11 from "../assets/images/art11.png";

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
    {
      image: art1,
      note: "Art Trade: Character - Hua Cheng (天官赐福) — (2024)",
    },
    { image: art2, note: "Character Art: Rendering Experiment — (2025)" },
    { image: art3, note: "Competition Entry For sakuraopal (YT)* — (2025)" },
    { image: art4, note: "Eye studies - July 2024" },
    {
      image: art5,
      note: "Art Stylization Experiment  - Dec 2024",
    },
    { image: art6, note: "Artfight - July 2024" },
    {
      image: art7,
      note: "Competition Entry for iiNoodleDoodleii (YT) - July 2024",
    },
    { image: art8, note: "Artfight Attack - July 2024" },
    { image: art9, note: "Artfight Attack - July 2024" },
    {
      image: art10,
      note: "Carl F. Gauss for Pi Day as an Exchange Student - July 2024",
    },
    { image: art11, note: "Badminton Shuttle: 1 Layer Challenge — (2025)" },
  ];

  const earlyArt = [
    { image: early1, note: "Art Trade — (2023)" },
    { image: early2, note: "Commission — (2022)" },
    { image: early3, note: "Scratch: Art Trade — (Jun 2022)" },
    { image: early4, note: "Scratch: Art Contest Entry - (2022)" },
    {
      image: early5,
      note: "Scratch: Art Trade - (June 2022)",
    },
    { image: early6, note: "Gift For My Sister - (2023)" },
    { image: early7, note: "Discord Heart Emote Gift - June 2022" },
    { image: early8, note: "Scratch: Art Contest Entry - (Sept 2024)" },
    {
      image: early9,
      note: "Queztzal Art on Google Drawings: Lilac Breasted Roller - Apr 2023",
    },
    {
      image: early10,
      note: "Scratch: Art Contest Entry - Dec 2020",
    },
    { image: early11, note: "Scratch: Art Contest - Jan 2020" },
    { image: early12, note: "Scratch: Bitmap Art - Nov 2020" },
  ];

  return (
    <div style={{ paddingTop: "40px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Art Portfolio
      </h2>
      <ArtSlider
        artworks={recentArt}
        description={{
          title: "Overview",
          content: (
            <>
              <p>
                The artworks on the slideshow are some of my (recently drawn)
                pieces that I am proud of. Click the pieces to expand!
              </p>
              <p>
                Since 2020, I've grown fond of digital art. I've always loved
                how digital art (and art in general) has allowed me to expand my
                creativity and find my inner peace.
              </p>
              <p>
                My digital art journey pushed me far beyond what I initially
                thought I was capable of. This is especially evident in the
                projects created in my Graphics class. I was able to take mere
                pixels and turn it into something I can see and hold in my
                everyday life like a T-shirt, notepad or pin.
              </p>
              <p>
                <a
                  href="https://artfight.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#66b7dc", textDecoration: "underline" }}
                >
                  Artfight
                </a>
                : An artist's version of dodgeball. Attack your opponents by
                drawing their characters and they can revenge by drawing yours!
                Part of the joy of digital art is being able to see other
                artists draw your character. The many different takes and styles
                I've seen my character drawn in feels so rewarding, knowing I've
                come so far. Enjoy my pieces!
              </p>
              <p>
                *Competition Entry for @sakuraopal -- (2025): This took a
                totalling of 21 hours. That is by far the longest amount of time
                I've spent on a piece.The Disneyland castle each part was
                rendered and colored by me, using a picture (that I took) of the
                Hong Kong Disneyland castle.
              </p>
            </>
          ),
        }}
      />

      <h2 style={{ textAlign: "center", margin: "40px 0 20px" }}>Early Art</h2>
      <ArtSlider
        artworks={earlyArt}
        description={{
          title: "The Beginnings",
          content:
            "During the pandemic was when I invested in my first iPad! It was definitely a big purchase for an 11 year old. I got my first stylus and started diving face first into the digital art world. Even after watching countless YouTube tutorials, doing countless studies and having my style switch on a daily basis, I -- still to this day -- haven't found a style that I stick with.\n\nWhile I was still developing my art style, I did a lot of art contests and art trades on a children's coding site (Scratch). When I was on Scratch I went by an alias, hence the different name in watermarks. \n\n As my love in digital art grew, so did the support and friendships I gained in the art community. The constant learning and growth is what kept me dedicated and passionate to this hobby. As a young artist, I managed to gain experience doing small commissions in exchange for Discord Nitro. The feeling of finishing an art piece, knowing I'll be bringing someone a smile is what I love the most about this journey. I continue to utilize my talent and skills to bring that joy to my friends and family.",
        }}
      />
    </div>
  );
};

export default Art;
