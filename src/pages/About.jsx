import React from "react";
import "../css/about.css";
import dividerImg from "../assets/images/divider.png";
import profileImg from "../assets/images/dct1.jpg";

export default function About() {
  return (
    <section className="about-section" id="about-section">
      <div className="container">
        {/* Heading */}
        <div className="section-heading text-center">
          <h2 className="section-title">About Me</h2>
          <img
            src={dividerImg}
            alt="divider"
            className="divider-img"
          />
        </div>

        {/* Content */}
        <div className="about-content">
          {/* Image */}
          <div className="about-image">
            <img
              src={profileImg}
              alt="Ibrahim Abdulmajeed"
              className="profile-img"
            />
          </div>

          {/* Text */}
          <div className="about-text">
            <p>
              Hi, I'm <strong>Ibrahim Abdulmajeed</strong> — a passionate{" "}
              <strong>Full-Stack Web Developer</strong> with 2+ years of
              experience crafting user-focused and scalable web solutions.
            </p>

            <p>
              My journey began in secondary school, where learning HTML at a
              local computer center sparked my love for technology. That
              curiosity grew into a full-blown passion for coding and
              problem-solving.
            </p>

            <p>
              In 2024, I took a bold step and enrolled in an online full-stack
              bootcamp after graduation. Since then, I’ve worked on multiple
              real-world projects, continuously sharpening my skills and
              building impactful products.
            </p>

            <p>
              Today, I specialize in{" "}
              <strong>
                JavaScript, React.js, Tailwind CSS, Node.js, Express.js, and
                PHP
              </strong>
              . I’m driven by clean, efficient code and modern, responsive
              designs that blend functionality and aesthetics.
            </p>

            <div className="about-buttons">
              <a
                href="images/dcronyresume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View Resume
              </a>
              <a href="#contact-section" className="btn-outline">
                Work With Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
