import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-badge">
          Available for freelance work
        </div>

        <h1 className="hero-title">
          <span className="line">Full-Stack</span>
          <span className="line highlight">MERN</span>
          <span className="line">Developer</span>
        </h1>

        {/* 🔥 SEO POWER LINE */}
        <h2 className="hero-founder">
          Founder of TickiSpot – Event Ticketing Platform
        </h2>

        <p className="hero-subtitle">
          I design and develop high-performance web applications with secure authentication, 
          RESTful APIs, and optimized user interfaces that align with business goals
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#contact" className="btn btn-secondary">
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;