import "../css/skill.css";

export default function Skills() {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Next.js",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "MySQL",
    "MongoDB",
    "REST APIs",
    "JWT Authentication",
  ];

  const uiuxSkills = [
    "Figma",
    "Canva",
    "Adobe XD",
    "Wireframing",
    "Prototyping",
    "Design Systems",
  ];

  const SkillCard = ({ title, skills }) => (
    <div className="skill-card">
      <h3>{title}</h3>
      <div className="skill-tags">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        <SkillCard title="Frontend Development" skills={frontendSkills} />
        <SkillCard title="Backend Development" skills={backendSkills} />
        <SkillCard title="UI / UX Design" skills={uiuxSkills} />
      </div>
    </section>
  );
}
