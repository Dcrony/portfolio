import React from "react";
import { useParams, Navigate } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import SEO from "./SEO";
import caseStudies from "../data/caseStudies";

const Section = ({ title, children }) => (
  <section className="case-study-section">
    <h3>{title}</h3>
    <p>{children}</p>
  </section>
);

const CaseStudyDetail = () => {
  const { slug } = useParams();

  const caseStudy = caseStudies.find(
    (item) => item.slug === slug
  );

  if (!caseStudy) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="page-case-study-detail">
      <SEO
        title={`${caseStudy.title} | Case Study`}
        description={caseStudy.summary}
      />

      <div className="page-header">
        <SectionHeader
          title={caseStudy.title}
          subtitle={caseStudy.summary}
        />
      </div>

      <Section title="The Problem">
        {caseStudy.problem}
      </Section>

      <Section title="Research">
        {caseStudy.research}
      </Section>

      <Section title="Planning">
        {caseStudy.planning}
      </Section>

      <Section title="Architecture">
        {caseStudy.architecture}
      </Section>

      <Section title="Database Design">
        {caseStudy.database}
      </Section>

      <Section title="Authentication">
        {caseStudy.authentication}
      </Section>

      <Section title="Backend">
        {caseStudy.backend}
      </Section>

      <Section title="Frontend">
        {caseStudy.frontend}
      </Section>

      <section className="case-study-section">
        <h3>Technology Stack</h3>

        <ul className="tag-list">
          {caseStudy.techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </section>

      <Section title="Challenges">
        {caseStudy.challenges}
      </Section>

      <Section title="Solution">
        {caseStudy.solution}
      </Section>

      <Section title="Results">
        {caseStudy.results}
      </Section>

      <section className="case-study-section">
        <h3>Project Highlights</h3>

        <ul className="tag-list">
          {caseStudy.metrics.map((metric) => (
            <li key={metric}>{metric}</li>
          ))}
        </ul>
      </section>

      <Section title="Lessons Learned">
        {caseStudy.lessons}
      </Section>

      <Section title="Future Roadmap">
        {caseStudy.future}
      </Section>

      <section className="case-study-section">
        <a
          href={caseStudy.demo}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>

        <a
          href={caseStudy.repo}
          className="btn btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
      </section>
    </div>
  );
};

export default CaseStudyDetail;