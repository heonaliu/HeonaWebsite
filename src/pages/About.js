import React from "react";
import art1 from "../assets/images/art3.png";
import "./About.css";
// import art2 from "../assets/images/art2.png";
import exchange from "../assets/images/exchange-group.png";
import badminton from "../assets/images/badminton.png";
import ballet from "../assets/images/ballet.png";
import art2 from "../assets/images/art2.png";
import graphic1 from "../assets/images/graphic.png";
import graphic2 from "../assets/images/graphic2.png";
import exchange2 from "../assets/images/exchange2.png";
import programming from "../assets/images/programming.png";

import { Link } from "react-router-dom";

const About = () => {
  //   const digitalArtVideo = "https://www.w3schools.com/html/mov_bbb.mp4";

  return (
    <div
      className="fade-in"
      style={{ display: "flex", flexDirection: "column", padding: "20px" }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "3rem",
          fontWeight: "700",
          marginBottom: "60px", // space between header and first section
          width: "100%",
        }}
      >
        About Me
      </h2>

      <div style={{ display: "flex", marginBottom: "40px" }}>
        <div className="about-text" style={{ flex: 2, paddingRight: "20px" }}>
          <h3>Digital Art</h3>
          <p>
            Since 2020, I was a passionate digital artist. My digital art
            journey has allowed me to pay attention to small but critical
            details while also being one of the best examples of growth
            throughout my life. I love to draw and participate in art contests
            in my free time. I love to incorporate my artistic skills in
            projects, school, for friends, and even the development of this
            website.
          </p>
          <p>
            You can read more and see more of my artworks in the{" "}
            <Link to="/art" className="link">
              Art
            </Link>{" "}
            tab
          </p>
        </div>

        <div className="digital-art-images">
          <img src={art1} alt="Art" className="digital-art-img" />
          <img src={art2} alt="Art" className="digital-art-img" />
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "40px" }}>
        <div className="about-text" style={{ flex: 1, paddingRight: "20px" }}>
          <h3>Youtube</h3>
          <p>
            I officially joined YouTube in January of 2023 on another YouTube
            channel that I don't use currently. On my old channel I had 1.28k
            subscribers and a pretty successful video reaching 30k views.
          </p>
          <p>
            My curent YouTube channel{" "}
            <a
              href="https://www.youtube.com/@sleepymeilows"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              @sleepymeilows
            </a>{" "}
            currently has about 2.82k subscribers and a net total of over 3.2
            million views. I usually post art trends, piano content and fun
            snippets of my life. I love using YouTube to showcase my digital
            artworks!
          </p>
          <p>
            This YouTube short on the right is an art trend I did in June 2025,
            which blew up, reaching over 2.4 million views.
          </p>
        </div>
        <div style={{ flex: 1 }} className="youtube-short-container">
          <iframe
            src="https://www.youtube.com/embed/wnrlNctF3ws"
            title="YouTube Short"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "40px" }}>
        <div
          className="about-text piano-video-wrapper"
          style={{ flex: 2, paddingRight: "20px" }}
        >
          <h3>Piano</h3>
          <p>
            I've been musically active and playing piano since I was 8 years old
            with a piano teacher. I have been learning piano for quite a long
            while now. I really enjoyed my time learning new pieces. As school
            is getting busier, I've made the hard decision to discontinue
            lessons but will forever stay musical in my heart. Learning piano
            has allowed me to develop a sense of rhythm, a love for classical
            music and has been a helpful tool in my ballet classes.
          </p>

          <p>
            {" "}
            The video on the right is me playing Tarentella by A. Pieczonka
            (Spring 2023) at a New England Piano Teacher's Association (NEPTA)
            Recital. This is a juried recital, meaning piano teachers pick a
            select few of their students to perform at this recital.{" "}
          </p>
        </div>

        <div style={{ flex: 1 }}>
          <div
            style={{
              position: "relative",
              width: "100%", // match container width
              paddingTop: "56.25%", // 16:9 aspect ratio (9/16 = 0.5625)
              marginTop: "10px",
              borderRadius: "15px",
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/MI-CjcbU4pE"
              title="Piano Video"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "0",
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "40px" }}>
        <div className="about-text" style={{ flex: 2, paddingRight: "20px" }}>
          <h3>Exchange Student</h3>
          <p>
            A fun fact! I was an exchange student! Our high school exchange
            program is one of the oldest student/teacher exchange program
            between United States and China. schools. After a 4 year hiatus, the
            program was resumed. My exchange group was the first post-pandemic
            group to restart the program.
          </p>
          <p>
            From January to May (2025), me and 5 other students witnessed and
            had a full immersive experience in a whole new culture, language,
            and life. It was a life changing time for me.
          </p>
          <p>
            We got to experience what being students in a school in China was
            like. We met so many different people and traversed China, embracing
            each obstacle and overcoming them. This program has taught me a lot
            about flexibility, time-managment, and observing my enviornment.
          </p>
        </div>
        <div className="image-group">
          <img src={exchange} alt="Design" className="responsive-img" />
          <img src={exchange2} alt="Design" className="responsive-img" />
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "40px" }}>
        <div className="about-text" style={{ flex: 2, paddingRight: "20px" }}>
          <h3>Badminton Player</h3>
          <p>
            Inspired by my dad and friends, I picked up badminton in freshman
            year of high school. During freshman year, I wasn't so serious about
            playing but it was the first time I picked up a badminton racket.
          </p>
          <p>
            Now I wished someone introduced me about this sport sooner! In
            sophomore year of high school, I play it actively while
            participating in competitions with my team. My favorite part is
            being with my friends and also keeping myself in shape.
          </p>
          <p>
            During my time in the exchange, I continued to develop my badminton
            skills by playing along side teachers and mentors after lunch nearly
            every day. In my free time, I enjoy watching badminton videos and
            tips on how I can improve my game.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <img
            src={badminton}
            alt="Art"
            style={{ width: "100%", borderRadius: "15px", marginTop: "10px" }}
          />
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "40px" }}>
        <div className="about-text" style={{ flex: 2, paddingRight: "20px" }}>
          <h3>Ballet Dancer</h3>
          <p>
            Ballet is another major part of my life. I've been dancing for
            almost 10 years. It has taught me to work with a team while also
            keeping in shape. I have done ballet and pointe work for about 3
            years before I had to take a step back due to Achilles Tendon
            discomfort.
          </p>
          <p>
            In the picture on the right, I was a model for a family friend{" "}
            <a
              href="https://www.shuklee.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Shuk Susan Lee
            </a>{" "}
            who is an amazing pastel artist.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <img
            src={ballet}
            alt="Art"
            style={{ width: "100%", borderRadius: "15px", marginTop: "10px" }}
          />
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "40px" }}>
        <div className="about-text" style={{ flex: 2, paddingRight: "20px" }}>
          <h3>Programmer</h3>
          <p>
            Since young, I was an avid Scratch kid. I loved to make projects and
            grow in a supportive community. Diving into scratch is what ignited
            my ideas to combine my digital art skills and programming ability.
            Currently, I take the same love for growth by teaching younger kids
            the fun of coding and seeing their creations become a reality. Read
            more about my projects in the{" "}
            <Link className="link" to={"/projects"}>
              Projects
            </Link>{" "}
            tab.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <img
            src={programming}
            alt="Art"
            style={{ width: "100%", borderRadius: "15px", marginTop: "10px" }}
          />
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "40px" }}>
        <div className="about-text" style={{ flex: 2, paddingRight: "20px" }}>
          <h3>Graphic Design</h3>
          <p>
            Building on my digital art journey, graphics design was what would
            take everything to the next level. I always loved the idea of
            putting my art on a T-shirt or notepad, it was something I could
            use.{" "}
          </p>{" "}
          <p>
            After finally getting into the Graphics Communications course in my
            high school! I was overjoyed! Although it was a semester course, I
            always went above and beyond in projects and worked on them before
            and after school hours. This class was definitely one of the
            highlights of my sophomore year, and I will continue to build
            creations in the graphics workshop.
          </p>
        </div>

        <div className="image-group">
          <img src={graphic1} alt="Design" className="responsive-img" />
          <img src={graphic2} alt="Design" className="responsive-img" />
        </div>
      </div>
    </div>
  );
};

export default About;
