import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Services from './Services';
import SEO from './SEO';

const ServicesPage = () => (
    <div className="page-services">
        <SEO title="Services | Dcrony" description="Professional software engineering services in full-stack, API, dashboard, and product development." />
        <Services />
    </div>
);

export default ServicesPage;
