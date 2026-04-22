import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Star,
  ArrowRight,
  Sparkles,
  Play,
  Clock3,
  MapPin,
} from "lucide-react";
import { useEffect } from "react";
import "./Home.css";

const Home = () => {
  /* ---------------- CURSOR INTERACTIVE GLOW ---------------- */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* ---------------- ANIMATION VARIANTS ---------------- */
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  return (
    <div className="home-page">
      {/* Cursor Glow */}
      <motion.div
        className="cursor-glow"
        style={{
          x: smoothX,
          y: smoothY,
        }}
      />

      {/* Background Orbs */}
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-grid"></div>

      {/* HERO */}
      <section className="hero-section">
        <div className="container hero-grid">
          {/* LEFT */}
          <motion.div
            className="hero-left"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp} className="glass-tag">
              <Sparkles size={15} />
              Premium Dining Experience
            </motion.div>

            <motion.h1 variants={fadeUp} className="hero-title">
              Not Just <span>Food</span>
              <br />
              It’s A Living
              <br />
              Experience.
            </motion.h1>

            <motion.p variants={fadeUp} className="hero-subtitle">
              Crafted flavors, immersive ambience, and unforgettable dining.
              Step into a next-generation culinary journey.
            </motion.p>

            <motion.div variants={fadeUp} className="hero-actions">
              <button className="btn-primary">
                Explore Menu <ArrowRight size={18} />
              </button>

              <button className="btn-secondary">
                <Play size={16} />
                Watch Story
              </button>
            </motion.div>

            <motion.div variants={fadeUp} className="stats-row">
              <div className="glass-mini">
                <Clock3 size={16} />
                Open 24/7
              </div>

              <div className="glass-mini">
                <MapPin size={16} />
                Dubai Marina
              </div>

              <div className="glass-mini stars-box">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="currentColor"
                    strokeWidth={0}
                  />
                ))}
                4.9
              </div>
            </motion.div>
          </motion.div>


          <motion.div
  className="hero-right"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
>
  {/* Background Glow */}
  <div className="hero-glow"></div>

  {/* Rotating Rings */}
  <div className="ring ring-1"></div>
  <div className="ring ring-2"></div>

  {/* Main Showcase */}
  <motion.div
    className="food-showcase glass-card"
    animate={{
      y: [0, -15, 0],
      rotate: [0, 1.5, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    whileHover={{
      scale: 1.04,
      rotate: -2,
    }}
  >
    <img
      src="https://img.freepik.com/premium-photo/delicious-burger-with-many-ingredients-4k-hd-background-photo_1193781-6292.jpg"
      alt="Burger"
    />

    <div className="food-overlay">
      <h3>Royal Burger</h3>
      <p>Premium Taste Experience</p>
    </div>
  </motion.div>

  {/* Price Badge */}
  <motion.div
    className="price-badge glass-card"
    animate={{ y: [0, -8, 0] }}
    transition={{ repeat: Infinity, duration: 4 }}
  >
    AED 29
  </motion.div>

  {/* Rating Card */}
  <motion.div
    className="rating-box glass-card"
    animate={{ y: [0, 8, 0] }}
    transition={{ repeat: Infinity, duration: 5 }}
  >
    ⭐ 4.9 Rating
  </motion.div>

  {/* Floating Dots */}
  <span className="dot dot-1"></span>
  <span className="dot dot-2"></span>
  <span className="dot dot-3"></span>
</motion.div>


        </div>
      </section>

      {/* FEATURED */}
      <section className="featured-section">
        <div className="container">
          <div className="section-head">
            <h2>Featured Cuisines</h2>
            <p>Luxury tastes from around the world</p>
          </div>

          <motion.div
            className="cards-grid"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              {
                title: "South Indian",
                desc: "Traditional Flavors",
                img: "https://images.unsplash.com/photo-1610192244261-3f33de815eed?auto=format&fit=crop&q=80&w=500",
              },
              {
                title: "Chinese",
                desc: "Wok Fire Taste",
                img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=500",
              },
              {
                title: "Arabian",
                desc: "Royal Grills",
                img: "https://images.unsplash.com/photo-1655365225165-8bc92cbfa4e8?auto=format&fit=crop&q=80&w=500",
              },
              {
                title: "English",
                desc: "Classic Breakfast",
                img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=500",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.03 }}
                className="menu-card glass-card"
              >
                <img src={item.img} alt={item.title} />
                <div className="menu-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;