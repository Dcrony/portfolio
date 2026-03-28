import "../css/skill.css";
import dividerImg from "../assets/images/divider.png";

export default function Skills() {
  const frontendSkills = [
    "focused on building modern, scalable, and user-centered web applications. I work with HTML5, CSS3, JavaScript (ES6+), and React.js to create responsive, high-performance interfaces that deliver smooth and intuitive user experiences across devices.",
  ];

  const backendSkills = [
    "I develop secure and efficient systems using Node.js, Express.js, RESTful APIs, JWT-based authentication, and server-side validation, with hands-on experience managing and designing databases using MongoDB and MySQL. I integrate APIs, handle application logic, manage user authentication, and implement payment and transaction workflows while maintaining clean architecture and performance.",
  ];

  const uiuxSkills = [
    "I design interfaces that balance aesthetics with functionality, applying user research, wireframing, prototyping, accessibility best practices, responsive layouts, and design systems to create intuitive user journeys. I focus on usability, interaction design, and smooth design-to-development handoff to ensure that every product is both visually appealing and easy to use.",
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
    <section className="skills-section" id="skills-section">
      <h2 className="section-title">My Skills</h2>
      <img src={dividerImg} alt="divider" className="divider-img" />
      <div className="skills-grid">
        <SkillCard title="Frontend Development" skills={frontendSkills} />
        <SkillCard title="Backend Development" skills={backendSkills} />
        <SkillCard title="UI / UX Design" skills={uiuxSkills} />
      </div>
    </section>
  );
}
