import React from 'react';

const About = () => {
  const techStack = [
    'JavaScript', 'React.js', 'Node.js', 'Express.js', 
    'MongoDB', 'MySQL', 'PHP', 'Tailwind CSS'
  ];

  return (
    <section className="about" id="about">
      <div className="about-image">
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
          alt="Ibrahim Abdulmajeed"
        />
      </div>
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hi, I'm <strong>Ibrahim Abdulmajeed</strong> — a passionate Full-Stack Web Developer 
          with 2+ years of experience crafting user-focused and scalable web solutions.
        </p>
        <p>
          My journey began in secondary school, where learning HTML at a local computer center 
          sparked my love for technology. That curiosity grew into a full-blown passion for 
          coding and problem-solving.
        </p>
        <p>
          In 2024, I took a bold step and enrolled in an online full-stack bootcamp after 
          graduation. Since then, I've worked on multiple real-world projects, continuously 
          sharpening my skills and building impactful products.
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