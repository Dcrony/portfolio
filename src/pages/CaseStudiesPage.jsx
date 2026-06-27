import React from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import SEO from "./SEO";
import caseStudies from "../data/caseStudies";

const CaseStudiesPage = () => {
  return (
    <div className="page-case-studies">
      <SEO
        title="Case Studies | Ibrahim Abdulmajeed"
        description="Explore detailed breakdowns of SaaS platforms, architecture decisions and engineering challenges solved by Ibrahim Abdulmajeed."
      />

      <div className="page-header">
        <SectionHeader
          title="Case Studies"
          subtitle="A closer look at the engineering decisions, architecture and product thinking behind my software projects."
        />
      </div>

      <div className="study-grid">
        {caseStudies.map((study) => (
          <article key={study.slug} className="case-study-card">
            <h3>{study.title}</h3>

            <p>{study.summary}</p>

            <div className="case-study-meta">
              {study.techStack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <Link
              to={`/case-studies/${study.slug}`}
              className="btn btn-primary"
            >
              Read Full Case Study
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesPage;