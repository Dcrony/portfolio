import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Projects from './Projects';
import SEO from './SEO';

const ProjectsPage = () => (
    <div className="page-projects">
        <SEO title="Projects | Dcrony" description="Explore full-stack applications and product-driven projects built by Ibrahim Abdulmajeed." />
        <div className="page-header">
            {/* <SectionHeader title="Projects" subtitle="A collection of software products, dashboards, and platform work." /> */}
        </div>
        <Projects />
    </div>
);

export default ProjectsPage;
