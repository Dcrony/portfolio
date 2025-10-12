import { useState, useEffect } from "react";
import "../css/portfolio.css";
import dividerImg from "../assets/images/divider.png";
import portfolio1 from "../assets/images/dct1.png";
import portfolio2 from "../assets/images/result.png";
import portfolio3 from "../assets/images/dct1.png";

const portfolioItems = [
  {
    id: 1,
    category: "web",
    title: "Portfolio Website",
    image: portfolio1,
    tools: ["React", "Boostrap"],
    description:
      "A personal portfolio website built with React and Bootstrap, showcasing projects and skills with a clean, responsive design.",
    link: "https://dcrony.pxxl.click",
    source: "https://github.com/Dcrony/portfoliome",
  },
  {
    id: 2,
    category: "app",
    title: "Supermarket POS App",
    image: portfolio2,
    tools: ["PHP", "MySQL", "CSS"],
    description:
      "A supermarket point-of-sale application developed using PHP and MySQL, featuring inventory management and sales tracking functionalities.",
    link: "supermarket.pxxl.click",
    source: "https://github.com/Dcrony/supermarket",
  },
  {
    id: 3,
    category: "branding",
    title: "Brand Identity",
    image: portfolio3,
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
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [selectedProject]);

  const filteredItems =
    activeFilter === "*"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="section-title">My Portfolio</h2>
      <img
        src={dividerImg}
        alt="divider"
        className="divider-img"
      />

      {/* Filter Buttons */}
      <div className="portfolio-filters">
        {filters.map((f) => (
          <button
            key={f.value}
            className={`filter-btn ${activeFilter === f.value ? "active" : ""}`}
            onClick={() => setActiveFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="portfolio-grid">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="portfolio-card"
            onClick={() => setSelectedProject(item)}
          >
            <img src={item.image} alt={item.title} className="portfolio-img" />
            <div className="portfolio-info">
              <h3>{item.title}</h3>
              <p>{item.category}</p>
              <div className="tools">
                {item.tools.map((tool, i) => (
                  <span key={i} className="tool">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
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
    </section>
  );
}
            