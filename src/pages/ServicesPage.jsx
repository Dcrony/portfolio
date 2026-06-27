import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Services from './Services';
import SEO from './SEO';

const ServicesPage = () => (
    <div className="page-services">
        <SEO title="Services | Dcrony" description="Professional software engineering services in full-stack, API, dashboard, and product development." />
        <div className="page-header">
            <SectionHeader title="Services" subtitle="Software engineering services for product teams and founders." />
        </div>
        <Services />
    </div>
);

export default ServicesPage;
