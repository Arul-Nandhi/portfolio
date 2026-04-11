import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Get In Touch</span>
          <h2>Contact Me</h2>
          <div className="header-line"></div>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Let's Connect</h3>
            <p>I'm currently looking for new opportunities in Software Development and Python Development. Whether you have a question, a project idea, or just want to say hi, my inbox is always open!</p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <FiMail />
                </div>
                <div>
                  <h4>Email</h4>
                  <a href={import.meta.env.VITE_MY_EMAIL ? `mailto:${import.meta.env.VITE_MY_EMAIL}` : "#"}>
                    {import.meta.env.VITE_MY_EMAIL || "email@example.com"}
                  </a>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <FiPhone />
                </div>
                <div>
                  <h4>Phone</h4>
                  <a href={import.meta.env.VITE_MY_PHONE ? `tel:${import.meta.env.VITE_MY_PHONE}` : "#"}>
                    {import.meta.env.VITE_MY_PHONE || "+00 0000000000"}
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FiMapPin />
                </div>
                <div>
                  <h4>Location</h4>
                  <span>India</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="contact-form" action={`https://formsubmit.co/${import.meta.env.VITE_MY_EMAIL || ""}`} method="POST">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={window.location.href} />
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Hi there..." required></textarea>
              </div>
              <button type="submit" className="btn-primary form-submit">
                <span>Send Message</span> <FiSend />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
