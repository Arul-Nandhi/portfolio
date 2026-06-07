import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiBriefcase, FiBookOpen, FiShoppingCart, FiUser, FiShield, FiMail, FiCpu, FiCoffee } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Grocery Tracker (Django CRUD Application)",
      description: "Created a grocery management system using Django and MySQL implementing complete CRUD operations for efficient data management.",
      tech: ["Django", "MySQL", "Python", "HTML/CSS"],
      github: "https://github.com/Arul-Nandhi/grocery_tracker",
      demo: "https://grocery-tracker-o4eb.onrender.com/",
      icon: <FiShoppingCart />
    },
    {
      title: "Portfolio Website",
      description: "Designed and developed a personal portfolio website using React, HTML, and CSS to showcase projects, skills, and achievements.",
      tech: ["React", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Arul-Nandhi/portfolio",
      demo: "https://portfoak.netlify.app/",
      icon: <FiUser />
    },
    {
      title: "Smart Canteen Pre-Order System",
      description: "Developed a SmartServe-based canteen pre-order platform that allows users to place food orders in advance through slot-based scheduling. The system supports both instant orders and pre-orders, reducing waiting time and improving food pickup efficiency through a user-friendly web interface.",
      tech: ["Python", "Django", "MySQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Arul-Nandhi/smart_canteen_preorder_system",
      demo: "https://smartcanteen-frontend.onrender.com/",
      icon: <FiCoffee />,
      features: [
        "Slot-based pre-order booking",
        "Instant and scheduled ordering",
        "Reduced waiting time",
        "Order tracking",
        "Efficient food pickup management",
        "Database-driven system"
      ]
    },
    {
      title: "AI-Based Smart Email Automation Bot",
      description: "Built a Python-based email automation system using IMAP and SMTP protocols to read, categorize, and automatically respond to emails.",
      tech: ["Python", "IMAP", "SMTP", "Automation"],
      github: "https://github.com/Arul-Nandhi/smart_email_bot",
      demo: "#",
      icon: <FiMail />
    },
    {
      title: "Job Portal",
      description: "Built a responsive job portal using React, HTML, and CSS, enabling users to browse job listings and apply efficiently through a user-friendly interface.",
      tech: ["React", "HTML", "CSS", "JavaScript"],
      github: "#", // TODO: Update repository URL later
      demo: "https://portj.netlify.app/",
      icon: <FiBriefcase />
    },
    {
      title: "E-Learning Platform (EduTech)",
      description: "Developed a web-based e-learning platform using React, HTML, and CSS for delivering structured educational content with a responsive UI.",
      tech: ["React", "HTML", "CSS", "JavaScript"],
      github: "#", // TODO: Update repository URL later
      demo: "https://edutechv1.netlify.app/",
      icon: <FiBookOpen />
    },
    {
      title: "Cross-Language Phishing Detection System",
      description: "Developed a phishing detection system using semantic analysis, OCR, and ResNet18 CNN-based visual inspection techniques to detect phishing attacks across multiple languages.",
      tech: ["Python", "Semantic Analysis", "OCR", "ResNet18", "CNN"],
      github: "#", // TODO: Update repository URL later
      demo: "#",
      icon: <FiShield />
    },
    {
      title: "AI-Powered Forest Fire Detection System",
      description: "Developed a CNN-based forest fire detection solution and integrated Twilio API for real-time alert notifications.",
      tech: ["Python", "CNN", "Deep Learning", "Twilio API"],
      github: "#", // TODO: Update repository URL later
      demo: "#",
      icon: <FiCpu />
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
                    {project.github && project.github !== "#" ? (
                      <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Link">
                        <FiGithub />
                      </a>
                    ) : (
                      <span className="disabled-icon" title="GitHub Repository Unavailable">
                        <FiGithub />
                      </span>
                    )}
                    {project.demo && project.demo !== "#" ? (
                      <a href={project.demo} target="_blank" rel="noreferrer" aria-label="External Link">
                        <FiExternalLink />
                      </a>
                    ) : (
                      <span className="disabled-icon" title="Live Demo Unavailable">
                        <FiExternalLink />
                      </span>
                    )}
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
