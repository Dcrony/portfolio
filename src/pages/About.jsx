import React from "react";

export default function About() {
  return (
    <div className="unslate_co--section" id="about-section">
          <div className="container">
            <div className="section-heading-wrap text-center mb-5">
              <h2 className="heading-h2 text-center divider">
                <span className="gsap-reveal">About Me</span>
              </h2>
              <span className="gsap-reveal">
                <img src="src/assets/images/divider.png" alt="divider" width="76" />
              </span>
            </div>

            <div className="row align-items-center mt-5">
              
              <div className="col-lg-6 mb-5 mb-lg-0">
                <figure className="dotted-bg gsap-reveal-img text-center">
                  <img
                    src="src/assets/images/dct1.jpg"
                    alt="Image"
                    className="img-fluid rounded"
                  />
                </figure>
              </div>

              
              <div className="col-lg-6">
                <p className="lead gsap-reveal p-2">
                  Hi, I'm <strong>Ibrahim Abdulmajeed</strong> — a dedicated
                  Full-Stack Web Developer with 2+ years of hands-on experience
                  creating modern, user-focused solutions. <br /><br />
                  My journey started in secondary school when learning HTML at a
                  local computer center sparked my curiosity. That small step
                  ignited my passion for technology and problem-solving.
                  <br /><br />
                  In 2024, I took a decisive leap by enrolling in an online
                  full-stack bootcamp after graduating from school. Since then,
                  I’ve worked on multiple real-world projects, continuously
                  sharpening my skills and staying in sync with industry trends.
                  <br /><br />
                  Today, I specialize in
                  <strong
                    >JavaScript, React.js, Tailwind CSS, Node.js, Express.js,
                    and PHP</strong
                  >. I love crafting scalable, responsive interfaces and solving
                  complex problems with clean, efficient code. Beyond coding,
                  I’m passionate about community — learning from mentors,
                  collaborating with peers, and exploring new tools to build
                  impactful solutions.
                </p>

                <div
                  className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start"
                >
                  <a
                    href="images/dcronyresume.pdf"
                    className="btn btn-outline-pill btn-custom-light"
                    target="_blank"
                    >View Resume</a
                  >
                  <a
                    href="#contact-section"
                    className="btn btn-outline-pill btn-custom-light"
                    >Work With Me</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}
