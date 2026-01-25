// src/components/Skills/Skills.tsx
import { Layout, Server, Cpu } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal'; // correct path — adjust if your folder structure is different

export default function Skills() {
  useScrollReveal(); // ← hook call — makes elements fade/float in when scrolled into view

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout size={28} />,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript (ES6+)", "Redux / Zustand"],
    },
    {
      title: "Backend & Tools",
      icon: <Server size={28} />,
      skills: ["Node.js", "Express", "REST APIs", "PostgreSQL", "MongoDB", "Git / GitHub", "Vite", "Webpack"],
    },
    {
      title: "Other",
      icon: <Cpu size={28} />,
      skills: ["Responsive Design", "UI/UX Principles", "Performance Optimization", "Accessibility (a11y)", "Testing (Jest, React Testing Library)", "CI/CD Basics"],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title animate-on-scroll">Skills</h2>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div
            key={category.title}
            className="skill-card animate-on-scroll"
            style={{ transitionDelay: `${0.2 + index * 0.15}s` }} // stagger cards nicely
          >
            <div className="skill-icon">{category.icon}</div>
            <h3 className="skill-category">{category.title}</h3>
            <ul className="skill-list">
              {category.skills.map((skill) => (
                <li key={skill} className="skill-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}