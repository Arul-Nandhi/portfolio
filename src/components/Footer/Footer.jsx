import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <span>A</span>K.
          </div>
          <div className="footer-socials">
            <a href={import.meta.env.VITE_MY_GITHUB || "#"} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={import.meta.env.VITE_MY_LINKEDIN || "#"} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href={import.meta.env.VITE_MY_EMAIL ? `mailto:${import.meta.env.VITE_MY_EMAIL}` : "#"} aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            Designed & Built with <FiHeart className="heart-icon" /> by {import.meta.env.VITE_MY_NAME || "a Developer"}
          </p>
          <p className="copyright">&copy; {currentYear} All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
