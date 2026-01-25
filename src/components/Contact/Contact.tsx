// src/components/Contact/Contact.tsx
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-grid">
        {/* Left side: Info & Social */}
        <div className="contact-info">
          <p className="contact-intro">
            Have a project in mind? Want to collaborate? Or just say hi?  
            Feel free to reach out!
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <Mail size={20} />
              <a href="mailto:naiksaanvi96@gmail.com">naiksaanvi96@gmail.com</a>
            </div>


            <div className="contact-item">
              <MapPin size={20} />
              <span>Pimpri-Chinchwad, Maharashtra, India</span>
            </div>
          </div>

          <div className="social-links">
            <a href="https://github.com/nsaanvi96" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/naik-saanvi-krishnanand-000711329" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            
          </div>
        </div>

        {/* Right side: Contact Form */}
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="How can I help you?"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}