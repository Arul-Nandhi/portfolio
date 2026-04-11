import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCpu, FiMail, FiShoppingCart, FiBarChart2 } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Smart Forest Fire Detection",
      description: "Developed a CNN-based deep learning model to detect forest fire incidents from input data. Integrated Twilio API to send real-time SMS alerts for early fire warnings.",
      tech: ["CNN", "Deep Learning", "Twilio API", "Python"],
      github: "#",
      demo: "#",
      icon: <FiCpu />
    },
    {
      title: "Smart Email Automation Bot",
      description: "Developed a Python-based Smart Email Automation Bot that automatically reads, categorizes, and responds to emails using IMAP and SMTP protocols, demonstrating automation, text processing, and event-driven programming.",
      tech: ["Python", "IMAP/SMTP", "Automation", "Text Processing"],
      github: "#",
      demo: "#",
      icon: <FiMail />
    },
    {
      title: "Grocery Tracker Web Application",
      description: "Built using Django — allows users to track, manage, add/remove grocery items efficiently. Engineered a dynamic responsive interface with clean database management.",
      tech: ["Django", "Python", "HTML/CSS", "JavaScript", "SQLite"],
      github: "#",
      demo: "#",
      icon: <FiShoppingCart />
    },
    {
      title: "Basic Movie Data Analysis",
      description: "Analyzed movie datasets to study rating trends over years. Used Python libraries such as Pandas, SQLite, and Matplotlib for data processing and visualization.",
      tech: ["Pandas", "SQLite", "Matplotlib", "Python"],
      github: "#",
      demo: "#",
      icon: <FiBarChart2 />
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Portfolio</span>
          <h2>Featured Projects</h2>
          <div className="header-line"></div>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              className="project-card card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-top">
                <div className="project-icons">
                  <div className="folder-icon">
                    {project.icon}
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Link">
                      <FiGithub />
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer" aria-label="External Link">
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </div>
              <ul className="project-tech">
                {project.tech.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
