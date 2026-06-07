import { motion } from 'framer-motion';
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaDatabase, FaGithub, FaRobot } from 'react-icons/fa';
import { SiPandas } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaPython />,
      skills: [
        { name: "Python (Primary)", level: 90 },
        { name: "Java", level: 75 }
      ]
    },
    {
      title: "Web Development",
      icon: <FaHtml5 />,
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 85 },
        { name: "Django", level: 85 }
      ]
    },
    {
      title: "Databases",
      icon: <FaDatabase />,
      skills: [
        { name: "MySQL", level: 80 }
      ]
    },
    {
      title: "Libraries",
      icon: <SiPandas />,
      skills: [
        { name: "pandas (basic)", level: 70 },
        { name: "requests (basic)", level: 70 }
      ]
    },
    {
      title: "Tools & Version Control",
      icon: <FaGithub />,
      skills: [
        { name: "GitHub", level: 85 }
      ]
    },
    {
      title: "Bot Dev & Automation",
      icon: <FaRobot />,
      skills: [
        { name: "Python Scripting & CRUD", level: 85 },
        { name: "API Handling & REST APIs", level: 80 },
        { name: "Basic Web Scraping", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Capabilities</span>
          <h2>Technical Skills</h2>
          <div className="header-line"></div>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              className="skill-category card"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div className="skill-item" key={idx}>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <motion.div 
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + (idx * 0.1) }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
