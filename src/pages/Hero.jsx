import React from "react";
import "../css/hero.css"

export default function Hero() {
  return (
    <div
      className="cover-v1"
      style={{
        backgroundImage: "url('src/assets/images/cyber.jpg')",
      }}
      id="home-section"
    >
      <div className="container">
            <div className="row align-items-center tst">
              <div className="cont col-md-10 mx-auto text-center">
                <h1 className="heading gap-reveal-hero">Dcrony</h1>
                <h2 className="subheading gap-reveal-hero">
                  I’m Ibrahim Abdulmajeed <br />
                  A Full-Stack Web Developer
                  <br />
                  2+ Years Experience
                </h2>
                <p>
                  <a
                    href="images/dcronyresume.pdf"
                    className="btn btn-outline-pill btn-custom-light"
                    target="_blank"
                    >Download Resume</a
                  >
                  <a
                    href="#contact-section"
                    className="btn btn-outline-pill btn-custom-light"
                    >Hire Me</a
                  >
                </p>
              </div>
            </div>
          </div>

      {/* Animated lines overlay */}
      <a href="#about-section" className="mouse-wrap">
        <span className="mouse">
          <span className="scroll"></span>
        </span>
        <span className="mouse-label">Scroll</span>
      </a>

     
    </div>
  );
}
