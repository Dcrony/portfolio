import "../css/hero.css"
import hero from "../assets/images/cyber.jpg"
import { Facebook, Github, LinkedinIcon, X } from "lucide-react";

const socialLinks = [
  { icon: <X size={28} />, url: "https://x.com/CodeWithDcrony" },
  { icon: <Github size={28} />, url: "https://github.com/Dcrony" },
  { icon: <Facebook size={28} />, url: "https://facebook.com/yourprofile" },
  { icon: <LinkedinIcon size={28} />, url: "https://linkedin.com/in/ibrahim-abdulmajeed-803b12336" },
];

export default function Hero() {
  return (
    <div
      className="cover-v1"
      style={{
        backgroundImage: `url(${hero})`,
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

                <div className="social-icons">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
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
