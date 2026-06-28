import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Contact from './Contact';
import SEO from './SEO';

const ContactPage = () => (
    <div className="page-contact">
        <SEO title="Contact | Dcrony" description="Reach out to Ibrahim Abdulmajeed for software engineering, product development, and collaboration." />

            <SectionHeader title="Contact" subtitle="Professional contact for freelance, startup, and engineering projects." />
        <Contact />
    </div>
);

export default ContactPage;
