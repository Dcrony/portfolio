import React from "react";
import SEO from "./SEO";
import SectionHeader from "../components/SectionHeader";
import resumePdf from "../assets/images/Ibrahim_Abdulmajeed_Resume.pdf";

const ResumePage = () => {
  return (
    <div className="page-resume">
      <SEO
        title="Resume | Ibrahim Abdulmajeed"
        description="Download the resume of Ibrahim Abdulmajeed (Dcrony), Full-Stack Product Engineer and Founder of TickiSpot."
      />

        <SectionHeader
          title="Resume"
          subtitle="A summary of my experience, technical skills and software engineering journey."
        />

      <div className="resume-actions">
        <a
          href={resumePdf}
          download
          className="btn btn-primary"
        >
          Download Resume
        </a>        
      </div>

      <div className="resume-grid">

        <section className="resume-card">

          <h3>Professional Summary</h3>

          <p>
            Full-Stack Product Engineer passionate about designing and building
            scalable web applications using React, Node.js, Express and
            MongoDB. Founder of TickiSpot and experienced in product
            architecture, authentication systems and SaaS development.
          </p>

        </section>

        <section className="resume-card">

          <h3>Core Skills</h3>

          <ul>

            <li>React.js</li>

            <li>JavaScript (ES6+)</li>

            <li>Node.js</li>

            <li>Express.js</li>

            <li>MongoDB</li>

            <li>MySQL</li>

            <li>REST APIs</li>

            <li>JWT Authentication</li>

            <li>Git & GitHub</li>

            <li>Responsive Design</li>

          </ul>

        </section>

        <section className="resume-card">

          <h3>Featured Projects</h3>

          <ul>

            <li>TickiSpot</li>

            <li>AI Voice Calling Platform</li>

            <li>Portfolio Website</li>

            <li>Supermarket POS</li>

            <li>Stripe Dashboard Clone</li>

          </ul>

        </section>

        <section className="resume-card">

          <h3>Current Focus</h3>

          <p>
            Building scalable SaaS applications,
            AI-powered products,
            secure authentication systems,
            event technology,
            dashboards and modern web experiences.
          </p>

        </section>

      </div>
    </div>
  );
};

export default ResumePage;