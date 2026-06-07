import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiSettings, FiLayout } from 'react-icons/fi';
import './About.css';

const About = () => {
  const highlights = [
    {
      icon: <FiCpu />,
      title: 'AI-Based Systems',
      desc: 'Creating predictive models and AI solutions.'
    },
    {
      icon: <FiSettings />,
      title: 'Automation & Bots',
      desc: 'Automating routine tasks using Python bots.'
    },
    {
      icon: <FiLayout />,
      title: 'Web Development',
      desc: 'Designing clean and responsive web applications.'
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Overview</span>
          <h2>About Me</h2>
          <div className="header-line"></div>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text-container"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="about-greeting">Hi, I'm {import.meta.env.VITE_MY_NAME || "a Developer"}.</h3>
            <p className="about-text">
              Motivated and high-performing BE Computer Science Graduate (2026 Passed Out) with strong foundations in web development and AI-based systems. Hands-on experience through internships and projects in frontend development, automation, and data analysis. 
              Passionate about building scalable software solutions, intelligent systems, and user-centric applications. Seeking entry-level roles in Software Development.
            </p>
          </motion.div>

          <motion.div 
            className="about-highlights"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {highlights.map((item, index) => (
              <div className="highlight-card card" key={index}>
                <div className="highlight-icon">
                  {item.icon}
                </div>
                <div className="highlight-info">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
