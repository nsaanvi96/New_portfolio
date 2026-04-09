// src/components/Skills/Skills.tsx
import { Layout, Server, Cpu } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal'; // correct path — adjust if your folder structure is different

export default function Skills() {
  useScrollReveal(); // ← hook call — makes elements fade/float in when scrolled into view

  const skillCategories = [
    {
      title: "Foundational Set",
      icon: <Cpu size={28} />,
      skills: ["Networking and Infrastructure", "Operating Systems", "Web & Aplication Security", "Reverse Engineering"],
    },


    {
      title: "Tools",
      icon: <Layout size={28} />,
      skills: ["Kali Linux", "Metasploit", "Wireshark", "BloodHound", "Nmap", "PowerView", "Mimikatz", "Burp Suite"],
    },
    {
      title: "Backend",
      icon: <Server size={28} />,
      skills: ["Python", "Flask", "MySQL", "MongoDB", "Git / GitHub"],
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