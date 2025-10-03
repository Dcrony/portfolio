import React from "react";

export default function Hero() {
  return (
    <div
      className="cover-v1"
      style={{
        backgroundImage: "url('src/assets/images/cyber.jpg')",
      }}
      id="home-section"
    >
      <div class="container">
            <div class="row align-items-center tst">
              <div class="cont col-md-10 mx-auto text-center">
                <h1 class="heading gap-reveal-hero">Dcrony</h1>
                <h2 class="subheading gap-reveal-hero">
                  I’m Ibrahim Abdulmajeed <br />
                  A Full-Stack Web Developer
                  <br />
                  2+ Years Experience
                </h2>
                <p>
                  <a
                    href="images/dcronyresume.pdf"
                    class="btn btn-outline-pill btn-custom-light"
                    target="_blank"
                    >Download Resume</a
                  >
                  <a
                    href="#contact-section"
                    class="btn btn-outline-pill btn-custom-light"
                    >Hire Me</a
                  >
                </p>
              </div>
            </div>
          </div>

      {/* Animated lines overlay */}
      <a href="#portfolio-section" className="mouse-wrap smoothscroll">
        <span className="mouse">
          <span className="scroll"></span>
        </span>
        <span className="mouse-label">Scroll</span>
      </a>

      <div className="lines-wrap">
        <div className="lines-inner">
          <div className="lines"></div>
        </div>
      </div>
    </div>
  );
}
