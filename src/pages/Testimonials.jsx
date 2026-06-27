import React from "react";
import SectionHeader from "../components/SectionHeader";

const achievements = [
  {
    title: "Founder",
    text: "Founded TickiSpot, a modern event ticketing and management platform built with the MERN stack."
  },

  {
    title: "Full-Stack Engineer",
    text: "Built production-ready web applications with secure authentication, REST APIs and scalable architecture."
  },

  {
    title: "Product Builder",
    text: "Designed and developed SaaS platforms, dashboards, e-commerce applications and business management systems."
  },

  {
    title: "Continuous Learner",
    text: "Always exploring AI integrations, software architecture and modern engineering best practices."
  }
];

const Testimonials = ({ preview = false }) => {

  const visibleItems = preview
    ? achievements.slice(0, 2)
    : achievements;

  return (
    <section
      id="achievements"
      className="testimonials-section"
    >
      <SectionHeader
        title={preview ? "Highlights" : "Professional Highlights"}
        subtitle="Milestones and accomplishments from my software engineering journey."
      />

      <div className="testimonials-grid">
        {visibleItems.map((item) => (
          <article
            key={item.title}
            className="testimonial-card"
          >
            <h3>{item.title}</h3>

            <p className="testimonial-text">
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;