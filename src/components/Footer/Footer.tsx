import { personalInfo } from '../../data/portfolio-data';

export default function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      <p style={{ marginTop: '0.6rem', fontSize: '0.95rem' }}>
        Built with React + Vite
      </p>
    </footer>
  );
}