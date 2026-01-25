// src/components/Hero/Hero.tsx
import { personalInfo } from '../../data/portfolio-data';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-name">
          Hi, I'm {personalInfo.name}
        </h1>

        <p className="hero-title">
          Security Enthusiast & Curious Coder
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>

          <a href="#contact" className="btn btn-secondary">
            Get in Touch
          </a>

          <a href="src\assets\pdf\Saanvi K NAIK RESUME.pdf" download className="btn btn-outline">
            Download CV
          </a>
        </div>
      </div>

      <div className="scroll-hint">
        Scroll Down ↓
      </div>
    </section>
  );
}