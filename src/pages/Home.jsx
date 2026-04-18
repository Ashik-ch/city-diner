import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import './Home.css';

const Home = () => {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const floatAnimation = {
    y: [0, -20, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="dark-overlay"></div>
        <div className="container hero-container">

          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeUp} className="hero-title">
              it's not just <br />
              Food, It's an <br />
              <span className="text-gradient">Experience.</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="hero-actions">
              <button className="btn-primary">View Menu</button>
              <button className="btn-secondary">Book A Table</button>
            </motion.div>

            <motion.div variants={fadeUp} className="hero-reviews">
              <p>Reviews</p>
              <div className="review-avatars">
                <div className="avatar"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="Reviewer" /></div>
                <div className="avatar"><img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100" alt="Reviewer" /></div>
                <div className="avatar"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" alt="Reviewer" /></div>
                <div className="avatar-count">4K+</div>
              </div>
              <div className="review-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#FFB800" color="#FFB800" />
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Cinematic 3D plate effect using framer motion */}
            <motion.div
              className="main-plate-container"
              animate={floatAnimation}
            >
              <div className="plate-shadow"></div>
              {/* Using a placeholder for the cinematic hero food image */}
              <div className="plate-image-placeholder">
                <img src="https://img.freepik.com/premium-photo/delicious-burger-with-many-ingredients-4k-hd-background-photo_1193781-6292.jpg" alt="Featured Food" className="hero-food-img" />
              </div>

              {/* Floating garnish elements */}
              <motion.div
                className="floating-leaf leaf-1"
                animate={{ y: [0, -15, 0], rotate: [0, 15, 0], x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="floating-leaf leaf-2"
                animate={{ y: [0, 15, 0], rotate: [0, -20, 0], x: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              <motion.div
                className="floating-tomato"
                animate={{ y: [0, -20, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories/Menu Preview */}
      <section className="featured-section">
        <div className="container">
          <motion.div
            className="featured-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {[
              { title: 'South Indian', desc: 'Authentic Spices', img: 'https://images.unsplash.com/photo-1610192244261-3f33de815eed?auto=format&fit=crop&q=80&w=500' },
              { title: 'Chinese', desc: 'Wok Tossed Fusion', img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=500' },
              { title: 'English', desc: 'Classic Breakfasts', img: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=500' },
              { title: 'Arabian', desc: 'Royal Grills', img: 'https://images.unsplash.com/photo-1655365225165-8bc92cbfa4e8?auto=format&fit=crop&q=80&w=500' }
            ].map((cuisine, idx) => (
              <motion.div key={idx} variants={fadeUp} className="food-card glass-panel">
                <div className="food-card-img">
                  <img src={cuisine.img} alt={cuisine.title} className="category-img" />
                </div>
                <h3>{cuisine.title}</h3>
                <p>{cuisine.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
