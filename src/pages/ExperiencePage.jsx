import React from "react";
import SEO from "./SEO";
import SectionHeader from "../components/SectionHeader";

const experienceItems = [
  {
    title: "Founder & Lead Developer — TickiSpot",
    period: "2025 – Present",
    description:
      "Designed and built TickiSpot from the ground up using the MERN stack. Responsible for architecture, frontend, backend, authentication, database design, deployment and product strategy.",
  },

  {
    title: "Freelance Full-Stack Developer",
    period: "2023 – Present",
    description:
      "Developed custom web applications, business platforms, dashboards and e-commerce websites for clients using React, Node.js, Express, MongoDB and MySQL.",
  },

  {
    title: "Product Engineering",
    period: "Ongoing",
    description:
      "Building scalable SaaS applications, authentication systems, REST APIs and AI-powered web experiences while continuously improving software architecture and developer workflows.",
  },

  {
    title: "Deployment & DevOps",
    period: "Ongoing",
    description:
      "Deploying production-ready applications using Git, GitHub, Vercel, Render, Cloudinary and modern CI/CD workflows.",
  },
];

const ExperiencePage = () => (
  <div className="page-experience">
    <SEO
      title="Experience | Ibrahim Abdulmajeed"
      description="Professional experience building scalable software products, SaaS platforms and modern web applications."
    />

      <SectionHeader
        title="Experience"
        subtitle="Building products that combine business value with scalable engineering."
      />

    <section className="experience-summary">
      <p>
        My experience combines software engineering, product thinking and
        entrepreneurship. From founding TickiSpot to delivering full-stack
        applications for clients, I focus on building reliable products that
        solve real-world problems.
      </p>
    </section>

    <section className="experience-grid">
      {experienceItems.map((item) => (
        <article key={item.title} className="experience-card">
          <h3>{item.title}</h3>

          <small>{item.period}</small>

          <p>{item.description}</p>
        </article>
      ))}
    </section>
  </div>
);

export default ExperiencePage;