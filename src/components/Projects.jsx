import React, { useState } from 'react';
import p1 from '../assets/images/mHSFj.jpg';
import p2 from '../assets/images/efSvc.jpg';
import p3 from '../assets/images/rcBxw.jpg';
import p4 from '../assets/images/Jmkm3.jpg';
import p5 from '../assets/images/ZEGNs.jpg';
import p6 from '../assets/images/stripess.png';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Full-Stack', 'Frontend', 'E-commerce'];
  
  const projects = [
    {
      title: 'TickiSpot',
      category: 'Full-Stack',
      description: 'Event discovery platform for finding local events and community calendars.',
      image: p1,
      tags: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
      demo: 'https://tickispot.vercel.app/',
      repo: '#'
    },
    {
      title: 'Portfolio Website',
      category: 'Frontend',
      description: 'Personal portfolio showcasing projects and skills with modern design.',
      image: p2,
      tags: ['React', 'Bootstrap'],
      demo: 'https://dcrony.vercel.app/',
      repo: 'https://github.com/Dcrony/portfolio'
    },
    {
      title: 'Stripe Dashboard Clone',
      category: 'Frontend',
      description: 'Scripe full responsive and interative admin dashboard clone.',
      image: p6,
      tags: ['HTML', 'Tailwind CSS', 'Font Awesome'],
      demo: 'https://stripe_dashboard_clone.pxxl.click/',
      repo: 'https://github.com/Dcrony/stripe_dashboard_clone'
    },
    {
      title: 'Supermarket POS App',
      category: 'Full-Stack',
      description: 'Point of Sale system for supermarkets with inventory management.',
      image: p3,
      tags: ['PHP', 'MySQL', 'CSS'],
      demo: 'https://supermarketpos.pxxl.click/',
      repo: 'https://github.com/Dcrony/supermarket'
    },
    {
      title: 'Brand Identity',
      category: 'E-commerce',
      description: 'E-commerce website for organic skincare products with modern aesthetics.',
      image: p4,
      tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      demo: 'https://oyeskin-natural.vercel.app/',
      repo: 'https://github.com/Dcrony/Oyeskin-EC'
    },
    {
      title: 'Wuraola Beauty',
      category: 'Frontend',
      description: 'Beauty and wellness destination website with booking system.',
      image: p5,
      tags: ['Figma', 'Tailwind CSS', 'JavaScript'],
      demo: 'https://wuraolahouseofbeauty.vercel.app/',
      repo: 'https://github.com/Dcrony/Wuraolahouseofbeauty'
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Selected work from my portfolio</p>
      </div>
      
      <div className="projects-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.demo} className="project-link" title="Live Demo">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>
                  </svg>
                </a>
                <a href={project.repo} className="project-link" title="Source Code">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;