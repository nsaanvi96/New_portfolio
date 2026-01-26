// src/components/Projects/Projects.tsx
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "True Trace",
    description: "Phishing and Deepfake features | Ongoing Project. Chrome Extension for Deepfake analysis And Phishing Links Analysis",
    tech: ["Python", "JavaScript", "CSS", "HTML"],
    github: "https://github.com/nsaanvi96/TrueTrace.git",
    live: "https://yourportfolio.com",
    image: "src\\assets\\images\\True_Trace.jpeg", // replace with your actual image path
  },
  {
    title: "Blood-Aid",
    description: "Emergency Blood Donation app.Created a simulation of blockchain in a blood donation app which can be used with security for high end emergencies.",
    tech: ["Python", "Flask", "MySQL", "HTML", "CSS" , "JavaScript"],
    github: "https://github.com/nsaanvi96/CodeBlooded_AB2_PS7.git",
    live: "https://dashboard-demo.com",
    image: "src\\assets\\images\\Blood_Aid.jpeg",
  },
  {
    title: "Keylogger",
    description: "Logs the Keystrokes. A system that logs each key stroke and saves it.",
    tech: ["Python","pynput","Fernet"],
    github: "https://github.com/nsaanvi96/KeyLogger.git",
    live: "https://dashboard-demo.com",
    image: "src\\assets\\images\\Keylr.jpeg",
  },
  {
    title: "Network-Analyser",
    description: "Analysis of network. Very lightweight and OSINT/security-oriented.",
    tech: ["Python","scapy","socket"],
    github: "https://github.com/nsaanvi96/Network_Analyser.git",
    live: "https://task-app-demo.vercel.app",
    image: "src\\assets\\images\\NA.jpeg",
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={project.title} className="project-card">
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link live"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}