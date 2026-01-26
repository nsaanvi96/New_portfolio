// src/components/Contact/Contact.tsx
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      await emailjs.send(
        'service_7ud8p4m',           // ← replace
        'template_fy1q07k',          // ← replace
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'XpT7f2DF-HCwkvtSR'            // ← replace
      );

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email me directly.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-grid">
        {/* Left side – Info */}
        <div className="contact-info">
          <p className="contact-intro">
            Have a project in mind? Want to collaborate? Or just say hi?  
            Feel free to reach out!
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <Mail size={20} className="contact-icon" />
              <a href="mailto:naiksaanvi96@gmail.com">naiksaanvi96@gmail.com</a>
            </div>
            <div className="contact-item">
              <Phone size={20} className="contact-icon" />
              <a href="tel:+919518314351">+91 9518314351</a>
            </div>
            <div className="contact-item">
              <MapPin size={20} className="contact-icon" />
              <span>Pimpri-Chinchwad, Maharashtra, India</span>
            </div>
          </div>

          <div className="social-links">
            <a href="https://github.com/nsaanvi96" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/naik-saanvi-krishnanand-000711329" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Right side – Form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
              placeholder="How can I help you?"
              required
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {status.message && (
            <p
              className={`status-message ${status.type === 'success' ? 'success' : 'error'}`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}