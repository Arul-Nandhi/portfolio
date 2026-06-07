import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
  const internships = [
    {
      company: "InfoMtrix Digital Solutions",
      role: "Full Stack Developer – Python Intern",
      location: "Remote",
      duration: "Jan 2026 – Apr 2026",
      description: "Developed full-stack applications using Python. Worked with REST APIs, MySQL, and CRUD operations. Built and maintained web-based applications. Collaborated in a remote development environment."
    },
    {
      company: "CodeAlpha",
      role: "Frontend Development Intern",
      location: "Virtual",
      duration: "Jan 2025",
      description: "Basic frontend projects including a Calculator, Music Player, and other interactive UI components to enhance foundational knowledge in web technologies."
    },
    {
      company: "Thinksolv Technologies",
      role: "Web Development Intern",
      location: "Coimbatore",
      duration: "Jun 2024 – Jul 2024",
      description: "Gained valuable experience in modern web development tools and frameworks. Learned about version controls and collaborated on building user interfaces."
    }
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Career</span>
          <h2>Internships</h2>
          <div className="header-line"></div>
        </motion.div>

        <div className="timeline">
          <div className="timeline-line"></div>
          {internships.map((item, index) => (
            <motion.div 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="timeline-dot">
                <FiBriefcase />
              </div>
              <div className="timeline-content card">
                <h3 className="timeline-role">{item.role}</h3>
                <h4 className="timeline-company">{item.company}</h4>
                <div className="timeline-meta">
                  <span className="meta-item">
                    <FiCalendar /> {item.duration}
                  </span>
                  <span className="meta-item">
                    <FiMapPin /> {item.location}
                  </span>
                </div>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
