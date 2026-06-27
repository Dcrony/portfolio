import React from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Skills from "./Skills";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import SEO from "./SEO";
import SectionHeader from "../components/SectionHeader";

const HomePage = () => {
  return (
    <div className="page-home">

      <SEO
        title="Ibrahim Abdulmajeed | Full-Stack Product Engineer"
        description="Founder of TickiSpot. Building SaaS products, REST APIs, scalable MERN applications and AI-powered web experiences."
      />

      <Hero />

      <section className="section-preview">
        <About />
      </section>

      <section className="section-preview">
        <Projects preview />
      </section>

      <section className="section-preview">
        <SectionHeader
          title="Services"
          subtitle="Helping businesses build scalable software products."
        />
        <Services />
      </section>

      <section className="section-preview">
        <SectionHeader
          title="Technology Stack"
          subtitle="Technologies I use to build modern software."
        />
        <Skills />
      </section>

      <section className="section-preview">
        <Testimonials preview />
      </section>

      <Contact />

    </div>
  );
};

export default HomePage;