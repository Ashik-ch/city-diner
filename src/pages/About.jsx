import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <motion.div 
          className="about-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-image glass-panel">
            <img src="https://b.zmtcdn.com/data/reviews_photos/686/c6cff6f63994941ddb57da276d61c686_1520970182.jpg"/></div>
          
          <div className="about-content">
            <h4 className="subtitle">Our Story</h4>
            <h1>The Heart of <br/><span className="text-gradient">Bur Dubai</span></h1>
            
            <p className="lead">
              At City Diner, we believe that food is not just about sustenance - it's an experience that brings people together.
            </p>
            
            <p>
              Nestled in the vibrant and historic lanes of Bur Dubai, City Diner was born from a passion to unite flavors from across the world under one cinematic roof. Our kitchen bridges the gap between South Indian spices, Chinese wok mastery, classic English comfort food, and the royal grills of Arabia.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <h2>15+</h2>
                <p>Years of Legacy</p>
              </div>
              <div className="stat">
                <h2>4</h2>
                <p>Global Cuisines</p>
              </div>
              <div className="stat">
                <h2>1M+</h2>
                <p>Happy Customers</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
