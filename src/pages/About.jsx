import React from "react";
import dct from "../assets/images/dct.jpg";

const About = () => {

  const techStack = [
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Tailwind CSS",
    "Bootstrap",
    "REST APIs",
    "JWT",
    "Git",
    "GitHub",
    "Cloudinary",
    "Render",
    "Vercel",
    "Figma"
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
          Hi, I'm <strong>Ibrahim Abdulmajeed</strong>, popularly known as
          <strong> Dcrony</strong>.
          I'm a Full-Stack Product Engineer passionate about building
          scalable web applications that solve real business problems.
        </p>

        <p>
          My journey into software development began during secondary school,
          where I first learned HTML. That curiosity eventually evolved into a
          passion for designing and building complete digital products using
          modern technologies.
        </p>

        <p>
          Over the years, I have specialized in the MERN Stack, helping
          businesses and startups transform ideas into production-ready
          applications with secure authentication, clean architecture,
          responsive interfaces and scalable backend systems.
        </p>

        <p>
          One of my proudest achievements is founding
          <strong> TickiSpot</strong>,
          a modern event management and ticketing platform designed to empower
          event organizers through digital ticketing, analytics, community
          engagement and event discovery.
        </p>

        <p>
          Beyond coding, I enjoy solving product challenges, improving user
          experiences, learning new technologies and collaborating with teams
          to build software people genuinely enjoy using.
        </p>

        <div className="tech-stack">

          {techStack.map((tech) => (

            <span
              key={tech}
              className="tech-tag"
            >
              {tech}
            </span>

          ))}

        </div>

      </div>

    </section>

  );

};

export default About;