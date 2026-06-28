import React from "react";
import SEO from "./SEO";
import About from "./About";
import Skills from "./Skills";
import SectionHeader from "../components/SectionHeader";

const AboutPage = () => {

  return (

    <div className="page-about">

      <SEO
        title="About | Ibrahim Abdulmajeed"
        description="Learn more about Ibrahim Abdulmajeed (Dcrony), a Full-Stack Product Engineer and Founder of TickiSpot."
      />


      <About />

      <section className="about-details">

        <div className="about-grid">

          <div className="about-card">

            <h3>🚀 Development Philosophy</h3>

            <p>
              I believe software should solve real problems, remain easy to
              maintain and continue delivering value as businesses grow.
            </p>

          </div>

          <div className="about-card">

            <h3>💡 Core Values</h3>

            <ul>

              <li>Clean Code</li>

              <li>Scalable Architecture</li>

              <li>Performance Optimization</li>

              <li>Security First</li>

              <li>Excellent User Experience</li>

              <li>Continuous Learning</li>

            </ul>

          </div>

          <div className="about-card">

            <h3>🎯 Current Focus</h3>

            <p>
              I'm currently focused on building SaaS platforms,
              AI-powered web applications, developer tools,
              event technology and scalable APIs using modern
              JavaScript technologies.
            </p>

          </div>

          <div className="about-card">

            <h3>🏆 Career Goal</h3>

            <p>
              To become a world-class Software Engineer building products
              that positively impact millions of users while continuously
              learning and contributing to innovative engineering teams.
            </p>

          </div>

        </div>

      </section>

      <section className="section-preview">

        <SectionHeader
          title="Technology Stack"
          subtitle="Technologies I use to build scalable digital products."
        />

        <Skills />

      </section>

    </div>

  );

};

export default AboutPage;