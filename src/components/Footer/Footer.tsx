import { personalInfo } from '../../data/portfolio-data';

export default function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      
    </footer>
  );
}