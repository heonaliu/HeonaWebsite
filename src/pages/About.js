import React from "react";
import art1 from "../assets/images/art3.png";
import art2 from "../assets/images/art2.png";
import exchange from "../assets/images/exchange-group.png";
import exchange2 from "../assets/images/exchange2.png";
import badminton from "../assets/images/badminton.png";
import ballet from "../assets/images/ballet.png";
import graphic1 from "../assets/images/graphic.png";
import graphic2 from "../assets/images/graphic2.png";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-container fade-in">
      <h2 className="about-title">About Me</h2>

      {/* Digital Art Section */}
      <div className="about-section">
        <div className="about-text">
          <h3>Digital Art</h3>
          <p>
            Since 2020, I have been a passionate digital artist. My digital art
            journey has allowed me to pay attention to small but critical
            details and serves as one of the best examples of growth in my life.
            I love to draw and participate in art contests in my free time. I
            also enjoy incorporating my artistic skills into projects,
            schoolwork, helping friends, and even in the development of this
            website.
          </p>
          <p>
            You can read more and see additional artworks in the{" "}
            <Link to="/art" className="link">
              Art
            </Link>{" "}
            tab.
          </p>
        </div>
        <div className="digital-art-images">
          <img src={art1} alt="Art" className="digital-art-img" />
          <img src={art2} alt="Art" className="digital-art-img" />
        </div>
      </div>

      {/* YouTube Section */}
      <div className="about-section">
        <div className="about-text">
          <h3>Youtube</h3>
          <p>
            I officially joined YouTube in January 2023 on another channel that
            I no longer use. On my old channel, I had 1.28k subscribers and a
            fairly successful video that reached 30k views.
          </p>
          <p>
            My current YouTube channel,{" "}
            <a
              href="https://www.youtube.com/@sleepymeilows"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              @sleepymeilows
            </a>
            , has about 2.82k subscribers and a total of over 3.2 million views.
            I usually post art trends, piano content, and fun snippets of my
            life.
          </p>
          <p>
            The YouTube Short on the right is an art trend I created in June
            2025, which went viral, reaching over 2.4 million views.
          </p>
        </div>
        <div className="youtube-short-container">
          <iframe
            src="https://www.youtube.com/embed/wnrlNctF3ws"
            title="YouTube Short"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Piano Section */}
      <div className="about-section">
        <div className="about-text">
          <h3>Piano</h3>
          <p>
            I've been musically active and playing the piano since I was 8 years
            old, studying with a piano teacher. I have been learning piano for
            quite a long time and have really enjoyed learning new pieces. As
            school has become busier, I made the difficult decision to
            discontinue lessons, but I will forever stay musical at heart.
          </p>
          <p>
            The video on the right shows me playing Tarentella by A. Pieczonka
            (Spring 2023) at a New England Piano Teacher's Association (NEPTA)
            recital. This is a juried recital, meaning piano teachers select
            only a few students to perform.
          </p>
        </div>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/MI-CjcbU4pE"
            title="Piano Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Exchange Student Section */}
      <div className="about-section">
        <div className="about-text">
          <h3>Exchange Student</h3>
          <p>
            A fun fact: I was an exchange student! Our high school exchange
            program is one of the oldest student-teacher exchange programs
            between the United States and China. After a four-year hiatus, the
            program was resumed, and my exchange group was the first
            post-pandemic group to restart it.
          </p>
          <p>
            From January to May 2025, five other students and I had a fully
            immersive experience in a completely new culture, language, and way
            of life. It was a life-changing time for me.
          </p>
        </div>
        <div className="image-group">
          <img src={exchange} alt="Exchange" className="responsive-img" />
          <img src={exchange2} alt="Exchange" className="responsive-img" />
        </div>
      </div>

      {/* Badminton Section */}
      <div className="about-section">
        <div className="about-text">
          <h3>Badminton Player</h3>
          <p>
            Inspired by my dad and friends, I picked up badminton in my freshman
            year of high school. During that year, I wasn't very serious about
            playing, but it was the first time I ever held a badminton racket.
          </p>
          <p>
            Now, I wish someone had introduced me to this sport sooner! By my
            sophomore year, I was playing actively and participating in
            competitions with my team. My favorite part is spending time with
            friends while staying in shape.
          </p>
        </div>
        <div className="image-group">
          <img src={badminton} alt="Badminton" className="responsive-img" />
        </div>
      </div>

      {/* Ballet Section */}
      <div className="about-section">
        <div className="about-text">
          <h3>Ballet Dancer</h3>
          <p>
            Ballet is another major part of my life. I've been dancing for
            almost 10 years. It has taught me teamwork, discipline, and how to
            stay in shape. I practiced ballet and pointe work for about three
            years before needing to take a step back due to Achilles tendon
            discomfort.
          </p>
          <p>
            In the picture on the right, I was a model for a family friend,{" "}
            <a
              href="https://www.shuklee.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Shuk Susan Lee
            </a>
            , who is an amazing pastel artist and has won many awards for her
            artworks.
          </p>
        </div>
        <div className="image-group">
          <img src={ballet} alt="Ballet" className="responsive-img" />
        </div>
      </div>

      {/* Programmer Section */}
      <div className="about-section">
        <div className="about-text">
          <h3>Programmer</h3>
          <p>
            Since I was young, I have been an avid Scratch user. I loved
            creating projects and growing within a supportive community. Diving
            into Scratch sparked my interest in combining digital art with
            programming. Today, I carry that same passion by teaching younger
            kids the fun of coding and helping them bring their creations to
            life. You can read more about my projects in the{" "}
            <Link className="link" to={"/projects"}>
              Projects
            </Link>{" "}
            tab.
          </p>
        </div>
      </div>

      {/* Graphic Design Section */}
      <div className="about-section">
        <div className="about-text">
          <h3>Graphic Design</h3>
          <p>
            Building on my digital art journey, graphic design was the next step
            to take everything to the next level. I have always loved the idea
            of putting my art on a T-shirt or notepad—something practical that I
            could use.
          </p>
          <p>
            When I finally got into the Graphics Communications course at my
            high school, I was overjoyed! Although it was only a semester-long
            course, I consistently went above and beyond in my projects, often
            working on them before and after school. This class was definitely
            one of the highlights of my sophomore year, and I look forward to
            continuing to create in the graphics workshop.
          </p>
        </div>
        <div className="image-group">
          <img src={graphic1} alt="Graphic" className="responsive-img" />
          <img src={graphic2} alt="Graphic" className="responsive-img" />
        </div>
      </div>
    </div>
  );
};

export default About;
