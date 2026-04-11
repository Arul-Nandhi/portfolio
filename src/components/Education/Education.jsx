import { motion } from 'framer-motion';
import { FiBookOpen, FiAward } from 'react-icons/fi';
import './Education.css';

const Education = () => {
  const eduData = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Dr. Mahalingam College of Engineering and Technology, Pollachi",
      duration: "2022 - Present",
      score: "CGPA - 9.2/10"
    },
    {
      degree: "HSC (Higher Secondary Certificate)",
      institution: "Vivek Vidyalaya Matric Higher Secondary School, Kinathukadavu",
      duration: "May 2022",
      score: "94%"
    },
    {
      degree: "SSLC (Secondary School Leaving Certificate)",
      institution: "Vivek Vidyalaya Matric Higher Secondary School, Kinathukadavu",
      duration: "March 2020",
      score: "93%"
    }
  ];

  return (
    <section id="education" className="education section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Academics</span>
          <h2>Education</h2>
          <div className="header-line"></div>
        </motion.div>

        <div className="education-grid">
          {eduData.map((item, index) => (
            <motion.div 
              className="edu-card card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="edu-icon">
                {index === 0 ? <FiBookOpen /> : <FiAward />}
              </div>
              <div className="edu-content">
                <div className="edu-duration">{item.duration}</div>
                <h3 className="edu-degree">{item.degree}</h3>
                <h4 className="edu-institution">{item.institution}</h4>
                <div className="edu-score-badge">Score: {item.score}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
