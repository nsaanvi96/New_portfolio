// src/components/Projects/Projects.tsx
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React, TypeScript, Vite, and Tailwind CSS. Features dark mode, smooth animations, and responsive design.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.com",
    image: "/projects/portfolio.jpg", // replace with your actual image path
  },
  {
    title: "E-Commerce Dashboard",
    description: "Admin dashboard for managing products, orders, and users. Includes charts, authentication, and real-time updates.",
    tech: ["Next.js", "Tailwind CSS", "Chart.js", "Supabase"],
    github: "https://github.com/yourusername/ecommerce-dashboard",
    live: "https://dashboard-demo.com",
    image: "/projects/dashboard.jpg",
  },
  {
    title: "Task Management App",
    description: "Kanban-style task tracker with drag & drop, user auth, and local storage persistence.",
    tech: ["React", "Redux Toolkit", "Tailwind CSS", "dnd-kit"],
    github: "https://github.com/yourusername/task-manager",
    live: "https://task-app-demo.vercel.app",
    image: "/projects/task-manager.jpg",
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