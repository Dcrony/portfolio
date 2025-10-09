import { useState, useRef } from "react";
import { useEffect } from "react";
import "../css/portfolio.css"

const portfolioItems = [
  {
    id: 1,
    category: "web",
    title: "Creative Website",
    image: "src/assets/images/shoe.png",
    tools: ["React", "Node.js", "TailwindCSS"],
    description:
      "A responsive creative website built with React and styled using TailwindCSS. The backend is powered by Node.js for dynamic content management.",
    link: "#",
  },
  {
    id: 2,
    category: "app",
    title: "Mobile App Design",
    image: "src/assets/images/result.png",
    tools: ["React Native", "Expo", "Firebase"],
    description:
      "A mobile app prototype designed with React Native and Firebase for backend integration. Features user authentication and real-time updates.",
    link: "#",
  },
  {
    id: 3,
    category: "branding",
    title: "Brand Identity",
    image: "src/assets/images/restaurant.png",
    tools: ["Figma", "Canva", "Illustrator"],
    description:
      "Brand design and identity creation using Figma and Adobe Illustrator to deliver modern, consistent visual aesthetics.",
    link: "#",
  },
];

const filters = [
  { label: "All", value: "*" },
  { label: "Web", value: "web" },
  { label: "App", value: "app" },
  { label: "Branding", value: "branding" },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("*");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // When modal is open, disable scroll
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  const handleOpenProject = (item) => {
    setSelectedProject(item);
  };

  const filteredItems =
    activeFilter === "*"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="unslate_co--section" id="portfolio-section">
      <div className="container">
        <div className="section-heading-wrap text-center mb-5">
          <h2 className="heading-h2 text-center divider">
            <span className="gsap-reveal">Portfolio</span>
          </h2>
          <span className="gsap-reveal">
            <img src="src/assets/images/divider.png" alt="divider" width="76" />
          </span>
        </div>

        {/* Filter Buttons */}
        <div className="filter-wrap text-center mb-5">
          <div className="filter">
            {filters.map((f) => (
              <a
                key={f.value}
                className={activeFilter === f.value ? "active" : ""}
                onClick={() => setActiveFilter(f.value)}
              >
                {f.label}
              </a>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}


<div className="row ">
      {filteredItems.map((item) => (
        <div
          key={item.id}
          className={`portfolio-content col-sm-6 col-md-4 item ${item.category}`}
        >
          <div
            className="portfolio-item isotope-item"
            onClick={() => handleOpenProject(item)}
          >
            <div className="overlay">
              <div className="portfolio-item-content">
                <h3>{item.title}</h3>
                <span>{item.category}</span>
              </div>
            </div>
            <img
              src={item.image}
              className="lazyload img-fluid"
              alt={item.title}
            />
          </div>

          <div className="project-tools">
            {item.tools.map((tool, index) => (
              <span key={index} className="tool-tag">
                {tool}
              </span>
            ))}
          </div>
        </div>
      ))}

      
    </div>
           
        </div>

        {/* Modal for Project Details */}
        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setSelectedProject(null)}>
                ✖
              </button>
              <img src={selectedProject.image} alt={selectedProject.title} />
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <h4>Tools Used:</h4>
              <ul>
                {selectedProject.tools.map((tool, i) => (
                  <li key={i}>{tool}</li>
                ))}
              </ul>
              <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        )}
      </div>
  );
}
