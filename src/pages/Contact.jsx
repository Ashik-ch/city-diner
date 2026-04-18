import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Get in <span className="text-gradient">Touch</span></h1>
          <p>We'd love to hear from you. Book a table or ask us anything.</p>
        </motion.div>

        <div className="contact-wrapper">
          <motion.div 
            className="contact-info glass-panel"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2>Contact Information</h2>
            <div className="info-list">
              <div className="info-item">
                <MapPin className="info-icon" />
                <div>
                  <h4>Location</h4>
                  <p>123 Food Street, Historic District, Bur Dubai, UAE</p>
                </div>
              </div>
              <div className="info-item">
                <Phone className="info-icon" />
                <div>
                  <h4>Phone</h4>
                  <p>+971 50 123 4567</p>
                </div>
              </div>
              <div className="info-item">
                <Mail className="info-icon" />
                <div>
                  <h4>Email</h4>
                  <p>reservations@citydiner.ae</p>
                </div>
              </div>
              <div className="info-item">
                <Clock className="info-icon" />
                <div>
                  <h4>Operating Hours</h4>
                  <p>Mon - Sun: 8:00 AM - 1:00 AM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form glass-panel"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2>Send a Message</h2>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Your Phone Number" />
              </div>
              <div className="form-group">
                <textarea rows="4" placeholder="Your Message or Booking Details" required></textarea>
              </div>
              <button type="submit" className="btn-primary w-100">Send Message</button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
