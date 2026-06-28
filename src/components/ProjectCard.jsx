import { Github, Play } from 'lucide-react';
import React from 'react';

const ProjectCard = ({ project }) => (
    <article className="project-card">
        <div className="project-card__visual">
            <img src={project.image} alt={project.title} className="project-image" />
            {project.featured && <span className="project-badge">Featured</span>}
        </div>
        <div className="project-content">
            <div className="project-meta">
                <span className="project-category">{project.category}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.summary || project.description}</p>
            <div className="project-tags">
                {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                ))}
            </div>
            <div className="project-links">
                <a href={project.demo} className="project-link" target="_blank" rel="noreferrer" aria-label={`Live demo for ${project.title}`}>
                    <Play size={17}/>
                </a>
                <a href={project.repo} className="project-link" target="_blank" rel="noreferrer" aria-label={`Repository for ${project.title}`}>
                    <Github size={17} />
                </a>
            </div>
        </div>
    </article>
);

export default ProjectCard;
