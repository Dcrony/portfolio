import React from "react";
import {
  Code2,
  Rocket,
  ShieldCheck,
  Workflow,
  Ticket,
  Sparkles,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Full-Stack Web Development",
      description:
        "End-to-end web application development using React, Node.js, Express and MongoDB with clean architecture and scalable APIs.",
      tags: ["React", "Node.js", "MongoDB", "REST APIs"],
      large: true,
    },
    {
      icon: Rocket,
      title: "SaaS Development",
      description:
        "Designing and building scalable Software-as-a-Service products from idea to deployment with authentication, dashboards and analytics.",
      tags: ["Dashboards", "Authentication", "Analytics"],
    },
    {
      icon: ShieldCheck,
      title: "Authentication & Security",
      description:
        "Implementing secure authentication systems using JWT, role-based authorization, password encryption and protected APIs.",
      tags: ["JWT", "RBAC", "Security"],
    },
    {
      icon: Workflow,
      title: "REST API Development",
      description:
        "Developing maintainable REST APIs with validation, error handling, documentation and scalable backend architecture.",
      tags: ["Express", "API Design", "Validation"],
      wide: true,
    },
    {
      icon: Ticket,
      title: "Event Technology",
      description:
        "Building modern ticketing platforms, event management systems and organizer dashboards.",
      tags: ["Ticketing", "Events", "Payments"],
    },
    {
      icon: Sparkles,
      title: "AI Integration",
      description:
        "Integrating AI-powered features into modern web applications to improve automation and user experience.",
      tags: ["OpenAI", "Automation", "AI Apps"],
    },
  ];

  return (
    <section id="services">
      <div className="section-header">
        <h2 className="section-title">Services</h2>

        <p className="section-subtitle">
          Helping startups and businesses build secure, scalable and modern
          digital products.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className={`service-card ${service.large ? "large" : ""} ${
                service.wide ? "wide" : ""
              }`}
            >
              <div className="service-icon">
                <Icon size={24} strokeWidth={2} />
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span key={tag} className="service-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;