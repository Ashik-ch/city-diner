import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import {
  Star,
  ArrowRight,
  Sparkles,
  Play,
  Clock3,
  MapPin,
} from "lucide-react";
import { useEffect } from "react";
import bgImage from '../assets/bgImage.jpg';

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
          <div className="mx-auto grid min-h-screen w-full max-w-7xl items-center gap-10 px-4 py-12 lg:grid-cols-2">
            {/* LEFT */}
            <MotionDiv
              className="flex flex-col gap-5"
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              <MotionDiv variants={fadeUp} className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs backdrop-blur">
                <Sparkles size={15} />              World-Class Quality & Flavor           </MotionDiv>

              <motion.h1 variants={fadeUp} className="text-5xl font-extrabold leading-tight md:text-6xl">
                Not Just <span className="bg-gradient-to-r from-red-700 to-red-400 bg-clip-text text-transparent">Food</span>
                <br />
                It’s A Living
                <br />
                Experience.
              </motion.h1>

              <motion.p variants={fadeUp} className="max-w-lg text-slate-300">
                Crafted flavors, immersive ambience, and unforgettable dining.
                Step into a next-generation culinary journey.
              </motion.p>

              <MotionDiv variants={fadeUp} className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 font-semibold text-white shadow-lg backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20">
                  Explore Menu <ArrowRight size={18} />
                </button>

                <button className="flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20">
                  <Play size={16} />
                  Watch Story
                </button>
              </MotionDiv>

              <MotionDiv variants={fadeUp} className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
                  <Clock3 size={16} />
                  Open 24/7
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
                  <MapPin size={16} />
                  Bur Dubai
                </div>

                <div className="flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
                  <Star

                    size={14}
                    fill="currentColor"
                    strokeWidth={0}
                  /> Since 2017
                </div>
              </MotionDiv>
            </MotionDiv>


            <MotionDiv
              className="relative flex h-[620px] items-center justify-center"
              style={{ filter: heroFilter, y: heroY }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              {/* Background Glow */}
              <div className="absolute z-0 h-[420px] w-[420px] rounded-full bg-cyan-400/20 blur-[60px]"></div>

              {/* Rotating Rings */}
              <div className="absolute z-[1] h-[430px] w-[430px] animate-spin rounded-full border border-dashed border-white/20 [animation-duration:22s]"></div>
              <div className="absolute z-[1] h-[520px] w-[520px] animate-spin rounded-full border border-white/10 [animation-direction:reverse] [animation-duration:28s]"></div>

              {/* Main Showcase */}
              <MotionDiv
                className="relative z-[5] h-[470px] w-[340px] overflow-hidden rounded-[34px] border border-white/20 bg-white/10 shadow-2xl backdrop-blur"
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
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent px-6 py-6">
                  <h3 className="text-3xl font-extrabold">Royal Burger</h3>
                  <p className="text-sm text-white/75">Premium Taste Experience</p>
                </div>
              </MotionDiv>

              {/* Price Badge */}
              <MotionDiv
                className="absolute right-6 top-24 z-10 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-xl font-extrabold backdrop-blur"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                AED 29
              </MotionDiv>

              {/* Rating Card */}
              <MotionDiv
                className="absolute bottom-24 left-2 z-10 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-base font-bold backdrop-blur"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
              >
                ⭐ 4.9 Rating
              </MotionDiv>

              {/* Floating Dots */}
              <span className="absolute left-10 top-28 h-3.5 w-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_20px_rgba(34,211,238,0.5)]"></span>
              <span className="absolute bottom-36 right-10 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_20px_rgba(34,211,238,0.5)]"></span>
              <span className="absolute bottom-20 left-24 h-4.5 w-4.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_20px_rgba(34,211,238,0.5)]"></span>
            </MotionDiv>


          </div>
        </section>

        {/* FEATURED */}
        <section className="relative z-10 pb-20">
          <div className="mx-auto w-full max-w-7xl px-4">
            <div className="mb-10 text-center">
              <h2 className="text-4xl font-bold">Featured Cuisines</h2>
              <p className="mt-2 text-slate-300">Luxury tastes from around the world</p>
            </div>

            <MotionDiv
              className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
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
                  className="overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur"
                >
                  <img src={item.img} alt={item.title} className="h-52 w-full object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-slate-300">{item.desc}</p>
                  </div>
                </MotionDiv>
              ))}
            </MotionDiv>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;