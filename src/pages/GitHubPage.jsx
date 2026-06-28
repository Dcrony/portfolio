import React from 'react';
import SectionHeader from '../components/SectionHeader';
import SEO from './SEO';

const GitHubPage = () => (
    <div className="page-github">
        <SEO title="GitHub | Dcrony" description="GitHub repositories and developer activity overview for Ibrahim Abdulmajeed." />

            <SectionHeader title="GitHub" subtitle="Repository highlights and technical contributions." />
        <section className="github-summary">
            <p>GitHub integration is under development. This page will display repositories, stats, and contribution highlights.</p>
        </section>
    </div>
);

export default GitHubPage;
