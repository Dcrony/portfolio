import React from 'react';
import dct from '../assets/images/dct.jpg';

const About = () => {
  const techStack = [
    'JavaScript', 'React.js', 'Node.js', 'Express.js', 
    'MongoDB', 'MySQL', 'PHP', 'Tailwind CSS'
  ];

  return (
    <section className="about" id="about">
      <div className="about-image">
        <img 
          src={dct} 
          alt="Ibrahim Abdulmajeed"
        />
      </div>
      <div className="about-content">
  <h2>About Me</h2>

  <p>
    Hi, I'm <strong>Ibrahim Abdulmajeed</strong> (Dcrony) — a passionate Full-Stack Web Developer 
    and the <strong>Founder of TickiSpot</strong>, an event ticketing and management platform 
    built to empower creators and organizers.
  </p>

  <p>
    My journey began in secondary school, where learning HTML at a local computer center 
    sparked my curiosity for technology. What started as simple web pages quickly evolved 
    into a deep passion for building scalable and impactful digital products.
  </p>

  <p>
    In 2023, I took a bold step and enrolled in an online full-stack bootcamp after graduation. 
    Since then, I've worked on multiple real-world projects, sharpening my skills in the MERN stack 
    and developing solutions that solve real problems.
  </p>

  <p>
    One of my biggest milestones is building <strong>TickiSpot</strong>, where I led the development 
    of a full event platform featuring ticketing, analytics, live streaming, and organizer tools. 
    This project reflects my ability to design, build, and scale products from idea to execution.
  </p>

  <div className="tech-stack">
    {techStack.map((tech) => (
      <span key={tech} className="tech-tag">{tech}</span>
    ))}
  </div>
</div>
    </section>
  );
};

export default About;