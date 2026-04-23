import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import {
  Star,
  ArrowRight,
  Sparkles,
  Play,
  Clock3,
  MapPin,
} from "lucide-react";
import { useEffect, useMemo } from "react";
import bgImage from '../assets/bgImage.jpg';
import { NavLink } from "react-router-dom";
import { homeMenu } from "../homeMenu.data";

const Home = () => {
  const MotionDiv = motion.div;
  /* ---------------- CURSOR INTERACTIVE GLOW ---------------- */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const { scrollYProgress } = useScroll();
  const heroFilter = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(10px)"]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0px", "80px"]);

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

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

  /* Show ONLY one random item each page load / render */
  const randomItem = useMemo(() => {
    return homeMenu[Math.floor(Math.random() * homeMenu.length)];
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">

      {/* BACKGROUND IMAGE (clean, behind everything) */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center scale-110 blur-md"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* GLASS OVERLAY (this gives blur effect properly) */}
      {/* <div className="fixed inset-0 -z-10 bg-slate-900/60 backdrop-blur-md" /> */}

      {/* Cursor Glow */}
      <MotionDiv
        className="pointer-events-none fixed z-10 h-[300px] w-[300px] rounded-full bg-cyan-400/20 blur-3xl"
        style={{
          x: smoothX,
          y: smoothY,
        }}
      />

      {/* Background Orbs */}
      <div className="absolute left-[10%] top-[10%] h-[400px] w-[400px] animate-pulse rounded-full bg-cyan-400/25 blur-[120px]"></div>
      <div className="absolute bottom-[10%] right-[10%] h-[300px] w-[300px] animate-pulse rounded-full bg-purple-500/25 blur-[120px]"></div>

      {/* MAIN CONTENT */}
      <main className="relative z-20">
        <section className="relative z-10">
          <div className="mx-auto grid min-h-screen w-full max-w-7xl items-center gap-10 px-4 py-20 lg:grid-cols-2 lg:py-12">
            {/* LEFT */}
            <MotionDiv
              className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left"
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              <MotionDiv variants={fadeUp} className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] backdrop-blur sm:text-xs">
                <Sparkles size={15} /> World-Class Quality & Flavor
              </MotionDiv>

              <motion.h1 variants={fadeUp} className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
                The <span className="bg-gradient-to-r from-red-700 to-red-400 bg-clip-text text-transparent">City</span>
                <br />                Never Sleeps,
                <br /> Neither Does Our Kitchen.


              </motion.h1>

              <motion.p variants={fadeUp} className="max-w-lg text-sm text-slate-300 sm:text-base"              >
                Authentic flavors from Kerala, Indian, Italian, and Arabian cuisines —
                crafted with quality ingredients and served in an unforgettable dining
                experience, with even more tastes to explore.              </motion.p>

              <MotionDiv variants={fadeUp} className="flex flex-wrap justify-center gap-3 lg:justify-start">
                <NavLink to="/menu" className="flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20 sm:text-base">
                  Explore Menu <ArrowRight size={18} />
                </NavLink>
                <a href="https://www.instagram.com/reel/DSnVPrKE-gl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 sm:text-base"
                >
                  <Play size={16} />
                  Watch Story
                </a>
              </MotionDiv>

              <MotionDiv variants={fadeUp} className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start">
                <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] backdrop-blur sm:px-4 sm:py-2 sm:text-sm">
                  <Clock3 size={14} /> Open 24/7
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] backdrop-blur sm:px-4 sm:py-2 sm:text-sm">
                  <MapPin size={14} /> Bur Dubai
                </div>

                <div className="flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] backdrop-blur sm:px-4 sm:py-2 sm:text-sm">
                  <Star size={12} fill="currentColor" strokeWidth={0} /> Since 2017
                </div>
              </MotionDiv>
            </MotionDiv>


            <MotionDiv
              className="relative flex h-[400px] items-center justify-center sm:h-[500px] lg:h-[620px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="absolute z-0 h-[250px] w-[250px] rounded-full bg-cyan-400/20 blur-[40px] sm:h-[350px] sm:w-[350px] lg:h-[420px] lg:w-[420px]"></div>

              <div className="absolute z-[1] h-[280px] w-[280px] animate-spin rounded-full border border-dashed border-white/20 [animation-duration:22s] sm:h-[380px] sm:w-[380px] lg:h-[430px] lg:w-[430px]"></div>
              <div className="absolute z-[1] h-[350px] w-[350px] animate-spin rounded-full border border-white/10 [animation-direction:reverse] [animation-duration:28s] sm:h-[450px] sm:w-[450px] lg:h-[520px] lg:w-[520px]"></div>

              <MotionDiv
                className="relative z-[5] h-[300px] w-[220px] overflow-hidden rounded-[24px] border border-white/20 bg-white/10 shadow-2xl backdrop-blur sm:h-[400px] sm:w-[300px] lg:h-[470px] lg:w-[340px]"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={randomItem.img}
                  alt={randomItem.name}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent px-4 py-4 sm:px-6 sm:py-6">
                  <h3 className="text-xl font-extrabold sm:text-2xl lg:text-3xl">
                    {randomItem.name}
                  </h3>

                  <p className="text-[10px] text-white/75 sm:text-xs lg:text-sm">
                    {randomItem.desc}
                  </p>
                </div>
              </MotionDiv>

              {/* Price Badge */}
              <MotionDiv
                className="absolute right-4 top-16 z-10 rounded-xl border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-extrabold backdrop-blur sm:right-6 sm:top-24 sm:rounded-2xl sm:px-5 sm:py-3 sm:text-xl"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                AED {randomItem.price}
              </MotionDiv>

              {/* Rating Card */}
              <MotionDiv
                className="absolute bottom-16 left-0 z-10 rounded-xl border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold backdrop-blur sm:bottom-24 sm:left-2 sm:rounded-2xl sm:px-5 sm:py-3 sm:text-base"
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
              >
                ⭐ 4.9 Rating
              </MotionDiv>

              {/* Floating Dots */}
              <span className="absolute left-6 top-20 h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_10px_rgba(34,211,238,0.5)] sm:left-10 sm:top-28 sm:h-3.5 sm:w-3.5"></span>
              <span className="absolute bottom-28 right-6 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_10px_rgba(34,211,238,0.5)] sm:bottom-36 sm:right-10 sm:h-2.5 sm:w-2.5"></span>
            </MotionDiv>


          </div>
        </section>

        {/* FEATURED */}
        <section className="relative z-10 pb-20">
          <div className="mx-auto w-full max-w-7xl px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">Featured Cuisines</h2>
              <p className="mt-2 text-sm text-slate-300 sm:text-base">Luxury tastes from around the world</p>
            </div>

            <MotionDiv
              className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "South Indian",
                  desc: "Traditional Flavors",
                  img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c291dGglMjBpbmRpYW4lMjBmb29kfGVufDB8fDB8fHww",
                },
                {
                  title: "Chinese",
                  desc: "Wok Fire Taste",
                  img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=500",
                },
                {
                  title: "Arabian",
                  desc: "Royal Grills",
                  img: "https://www.tasteofhome.com/wp-content/uploads/2025/06/Quick-Grilling-Ideas_TOH.com24_100276_DR_04_10_14bC_FT.jpg",
                },
                {
                  title: "English",
                  desc: "Classic Breakfast",
                  img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=500",
                },
              ].map((item, i) => (
                <MotionDiv
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="overflow-hidden rounded-xl border border-white/15 bg-white/10 shadow-lg backdrop-blur sm:rounded-2xl"
                >
                  <img src={item.img} alt={item.title} className="h-40 w-full object-cover sm:h-52" />
                  <div className="p-3 sm:p-4">
                    <h3 className="text-lg font-bold sm:text-xl">{item.title}</h3>
                    <p className="text-xs text-slate-300 sm:text-sm">{item.desc}</p>
                  </div>
                </MotionDiv>
              ))}
            </MotionDiv>
          </div>
        </section>
      </main>
    </div >
  );
};

export default Home;