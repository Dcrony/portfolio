import React, { useMemo, useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects';

const categories = [
  "All",
  "SaaS",
  "AI",
  "Frontend",
  "Dashboard",
  "Business",
  "E-Commerce"
];


const Projects = ({ preview = false }) => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filteredProjects = useMemo(() => {
    return projectsData
      .filter((project) => filter === 'All' || project.category === filter)
      .filter((project) => project.title.toLowerCase().includes(search.toLowerCase()) || project.description.toLowerCase().includes(search.toLowerCase()));
  }, [filter, search]);

  const visibleProjects = preview ? filteredProjects.filter((project) => project.featured).slice(0, 3) : filteredProjects;

  return (
    <section id="projects" className="projects-section">
     <SectionHeader title={preview ? "Featured Products" : "Projects"}

subtitle={
preview
? "Production-ready applications solving real business problems."
: "A collection of SaaS platforms, dashboards, AI applications and business software built with modern technologies."
} />

      {!preview && (
        <div className="projects-controls">
          <div className="projects-search">
            <input
              type="search"
              placeholder="Search by project name, technology or category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search projects"
            />
          </div>
          <div className="projects-filter">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="projects-grid">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;