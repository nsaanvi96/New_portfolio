type ProjectProps = {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
};

export default function ProjectCard({ title, description, technologies, github, live }: ProjectProps) {
  return (
    <div className="project-card" style={{ 
      flex: '1 1 340px', 
      maxWidth: '420px' 
    }}>
      <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>{title}</h3>
      <p style={{ marginBottom: '1.2rem', color: '#4b5563' }}>{description}</p>
      
      <div style={{ marginBottom: '1.2rem' }}>
        {technologies.map((tech, i) => (
          <span key={i} className="tech-tags">
            {tech}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '1.5rem' }}>
        {github && github !== "#" && (
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#6366f1', fontWeight: 500, textDecoration: 'none' }}
          >
            GitHub →
          </a>
        )}
        {live && live !== "#" && (
          <a 
            href={live} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#6366f1', fontWeight: 500, textDecoration: 'none' }}
          >
            Live Demo →
          </a>
        )}
      </div>
    </div>
  );
}