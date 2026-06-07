import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiCheckCircle } from 'react-icons/fi';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    "C Programming Bootcamp - Udemy",
    "Joy of Computing Using Python - NPTEL",
    "Soft Skills (Elite + Silver) - NPTEL",
    "Liguaskill English Certification (B2 Level) - Cambridge University"
  ];

  const activities = [
    {
      role: "President",
      org: "Digiflash - CSE association",
      duration: "Jul 2025 - May 2026"
    },
    {
      role: "Joint Secretary",
      org: "Digiflash - CSE association",
      duration: "Aug 2024 - May 2025"
    },
    {
      role: "Content Writer",
      org: "Digitimes magazine, Digiflash - CSE association",
      duration: "Aug 2023 - Apr 2024"
    }
  ];

  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Achievements</span>
          <h2>Certifications & Activities</h2>
          <div className="header-line"></div>
        </motion.div>

        <div className="cert-act-grid">
          {/* Certifications Block */}
          <motion.div 
            className="cert-block card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="block-header">
              <FiAward className="block-icon" />
              <h3>Certifications</h3>
            </div>
            <ul className="cert-list">
              {certifications.map((cert, index) => (
                <li key={index}>
                  <FiCheckCircle className="check-icon" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Activities Block */}
          <motion.div 
            className="act-block card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="block-header">
              <FiUsers className="block-icon" />
              <h3>Extracurricular Activities</h3>
            </div>
            <div className="act-list">
              {activities.map((act, index) => (
                <div className="act-item" key={index}>
                  <div className="act-dot"></div>
                  <div className="act-content">
                    <h4>{act.role}</h4>
                    <p>{act.org}</p>
                    <span className="act-duration">{act.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
