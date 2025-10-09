import { useParams } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import your project data (same as Portfolio.jsx)
import { portfolioItems } from "../data/portfolioData"; // We'll create this file next

export default function PortfolioSingle() {
  const { id } = useParams();
  const project = portfolioItems.find((item) => item.id === parseInt(id));

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (!project) {
    return <div className="text-center mt-10 text-2xl">Project not found 😕</div>;
  }

  return (
    <div className="unslate_co--site-wrap">
      <div className="cover-v1 gradient-bottom-black jarallax">
        <div className="container text-center">
          <h1 className="heading" data-aos="fade-up">
            {project.title}
          </h1>
          <h2 className="subheading" data-aos="fade-up" data-aos-delay="100">
            {project.description}
          </h2>
        </div>
      </div>

      <div className="container my-10">
        <img src={project.image} alt={project.title} className="img-fluid mb-6" />
        <h4 className="text-lg font-semibold mb-2">Tools Used:</h4>
        <ul className="flex flex-wrap gap-2">
          {project.tools.map((tool, i) => (
            <li key={i} className="px-3 py-1 bg-gray-200 rounded-full">
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
