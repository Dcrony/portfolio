import "../css/hero.css";
import hero from "../assets/images/cyber.jpg";
import { Facebook, Github, LinkedinIcon, X } from "lucide-react";

const socialLinks = [
  { icon: <X size={28} />, url: "https://x.com/CodeWithDcrony" },
  { icon: <Github size={28} />, url: "https://github.com/Dcrony" },
  { icon: <Facebook size={28} />, url: "https://facebook.com/yourprofile" },
  {
    icon: <LinkedinIcon size={28} />,
    url: "https://linkedin.com/in/ibrahim-abdulmajeed-803b12336",
  },
];

export default function Hero() {
  return (
    <div
      className="events-hero"
      id="home-section"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8 mx-auto text-center">
            {/* Keep your heading content but with new styling */}
            <h1 className="events-heading">
              Dcrony  
            </h1>
            <h2 className="events-subheading">
              I’m Ibrahim Abdulmajeed <br />
              A Full-Stack Web Developer
              <br />
              2+ Years Experience
            </h2>
            
            {/* Updated buttons to match events style */}
            <div className="events-buttons">
              <a
                href="images/dcronyresume.pdf"
                className="btn btn-primary btn-lg"
                target="_blank"
              >
                Get Started
              </a>
              <a
                href="#contact-section"
                className="btn btn-outline btn-lg"
              >
                Browse Events
              </a>
            </div>

            {/* Keep your social links with updated styling */}
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

      {/* Keep your animated mouse scroll indicator */}
      <a href="#about-section" className="mouse-wrap">
        <span className="mouse">
          <span className="scroll"></span>
        </span>
        <span className="mouse-label">Scroll</span>
      </a>
    </div>
  );
}