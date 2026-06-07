import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {import.meta.env.VITE_MY_NAME || "Portfolio"}
          </motion.h1>
          
          <motion.h2 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <span className="gradient-text">Software Developer</span>
          </motion.h2>

          <motion.p 
            className="hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Motivated and high-performing BE Computer Science Graduate (2026 Passed Out) passionate about building scalable software solutions, intelligent AI systems, and user-centric web applications.
          </motion.p>

          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link to="projects" smooth={true} offset={-80} className="btn-primary">
              <span>View Projects</span> <FiArrowRight />
            </Link>
            <Link to="contact" smooth={true} offset={-80} className="btn-outline">
              Contact Me
            </Link>
          </motion.div>

          <motion.div 
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a href={import.meta.env.VITE_MY_GITHUB || "#"} target="_blank" rel="noreferrer" className="social-icon">
              <FiGithub />
            </a>
            <a href={import.meta.env.VITE_MY_LINKEDIN || "#"} target="_blank" rel="noreferrer" className="social-icon">
              <FiLinkedin />
            </a>
            <a href={import.meta.env.VITE_MY_EMAIL ? `mailto:${import.meta.env.VITE_MY_EMAIL}` : "#"} className="social-icon">
              <FiMail />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="blob-bg"></div>
          <div className="hero-image-container">
            {/* Using a placeholder visual that looks premium */}
            <div className="abstract-shape code-shape">
              &lt;code/&gt;
            </div>
            <div className="abstract-shape python-shape">
              .py
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
