import React from "react";
import SEO from "./SEO";
import SectionHeader from "../components/SectionHeader";
import {
  Rocket,
  Code2,
  Zap,
  TrendingUp,
  Sparkles,
  Cloud,
  BookOpen,
  Globe,
} from "lucide-react";

const achievements = [
  {
    title: "Founder of TickiSpot",
    year: "2025 - Present",
    icon: Rocket,
    description:
      "Founded and built TickiSpot, a modern event ticketing and management platform using the MERN stack."
  },

  {
    title: "10+ Software Projects",
    year: "2023 - Present",
    icon: Code2,
    description:
      "Designed and developed full-stack applications, dashboards, e-commerce websites and business management systems."
  },

  {
    title: "Full-Stack MERN Developer",
    year: "Professional Skill",
    icon: Zap,
    description:
      "Experienced in React, Node.js, Express.js, MongoDB, REST APIs, JWT authentication and scalable application architecture."
  },

  {
    title: "SaaS Product Builder",
    year: "Ongoing",
    icon: TrendingUp,
    description:
      "Building scalable SaaS platforms with secure authentication, dashboards, analytics and modern user experiences."
  },

  {
    title: "AI Development",
    year: "2026",
    icon: Sparkles,
    description:
      "Built AI-powered applications and explored intelligent automation, voice systems and AI integrations."
  },

  {
    title: "Deployment Experience",
    year: "Ongoing",
    icon: Cloud,
    description:
      "Successfully deployed production applications using Vercel, Render and Cloudinary."
  },

  {
    title: "Continuous Learner",
    year: "Always",
    icon: BookOpen,
    description:
      "Continuously improving in TypeScript, Next.js, Docker, AWS, AI Engineering and scalable backend architecture."
  },

  {
    title: "Open Source Journey",
    year: "Next Goal",
    icon: Globe,
    description:
      "Planning to contribute more actively to open-source projects while growing my engineering experience."
  }
];

const AchievementsPage = () => {
  return (
    <div className="page-achievements">

      <SEO
        title="Achievements | Ibrahim Abdulmajeed"
        description="Professional milestones, technical achievements and software engineering accomplishments."
      />


        <SectionHeader
          title="Achievements"
          subtitle="Milestones that reflect my journey as a Full-Stack Product Engineer."
        />


      <section className="achievement-grid">

        {achievements.map((item) => {
          const Icon = item.icon;
          return (
            <article
              className="achievement-card"
              key={item.title}
            >

              <div className="achievement-icon">
                <Icon size={22} strokeWidth={2} />
              </div>

              <small>{item.year}</small>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </article>
          );
        })}

      </section>
    </div>
  );
};

export default AchievementsPage;