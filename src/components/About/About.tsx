import { personalInfo } from '../../data/portfolio-data';
import profileImg from '../../assets/images/saanvi.png'; // adjust path if needed

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title animate-on-scroll">About Me</h2>

      <div className="about-grid">
        {/* Image with fade-in */}
        <div className="about-image-container animate-on-scroll">
          <img
            src={profileImg}
            alt={`${personalInfo.name} profile`}
            className="about-profile-img"
          />
        </div>

        {/* Text with staggered float-in */}
        <div className="about-content">
          <p className="about-intro animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            I'm a passionate <strong>Security Enthusiast</strong> from Pimpri-Chinchwad,
            Maharashtra, with a strong passion for Cyber Security and a commitment to understanding how digital environments operate
          </p>

          <p className="animate-on-scroll" style={{ transitionDelay: '0.4s' }}>
            I specialize in <strong>Pyhton</strong>, <strong>Network Protocols</strong>, and <strong>Operating Systems</strong>,
            constantly exploring new technologies and techniques to enhance my skills and stay ahead in the ever-evolving field of cybersecurity.
          </p>

          <p className="animate-on-scroll" style={{ transitionDelay: '0.6s' }}>
             I am actively exploring and building foundational knowledge in Offensive Security, focusing on Penetration Testing Fundamentals and Vulnerability Assessment.
          </p>

          <p className="animate-on-scroll" style={{ transitionDelay: '0.8s' }}>
            When I'm not coding, you'll find me reading, exploring new design trends,
            or working on creative side projects.
          </p>

          {/* Optional facts block */}
          <div className="about-facts animate-on-scroll" style={{ transitionDelay: '1s' }}>
            <div className="fact-item">
              <span className="fact-label">Current Focus</span>
              <span className="fact-value">Ethical Hacking • Red Teaming • Exploitation </span>
            </div>
            <div className="fact-item">
              <span className="fact-label">Favorite Stack</span>
              <span className="fact-value">Python </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}