import { motion } from 'framer-motion';
import bgImage from '../assets/bgImage2.jpg';

const About = () => {
  const MotionDiv = motion.div;

  return (
    <div className="relative min-h-screen px-4 py-16 text-white">
      <div
        className="fixed inset-0 z-0 bg-cover bg-center blur-lg"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="fixed inset-0 z-0 bg-slate-950/70" />
      <div className="absolute left-[10%] top-[12%] h-72 w-72 rounded-full bg-red-500/15 blur-[100px]" />
      <div className="absolute bottom-[10%] right-[10%] h-72 w-72 rounded-full bg-cyan-500/15 blur-[100px]" />

      <div className="mx-auto w-full max-w-7xl">
        <MotionDiv
          className="grid items-center gap-8 rounded-2xl border border-white/20 bg-white/10 p-5 shadow-xl backdrop-blur-xl md:grid-cols-2 md:rounded-3xl md:p-10 lg:gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 md:rounded-3xl">
            <img
              src="https://b.zmtcdn.com/data/reviews_photos/686/c6cff6f63994941ddb57da276d61c686_1520970182.jpg"
              alt="City Diner interior"
              className="h-full w-full object-cover aspect-video md:aspect-auto"
            />
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-red-500 sm:text-xs">Our Story</h4>
            <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              The Heart of <br />
              <span className="bg-gradient-to-r from-red-400 to-red-700 bg-clip-text text-transparent">Bur Dubai</span>
            </h1>

            <p className="mt-4 text-base text-slate-200 sm:text-lg">
              At City Diner, we believe that food is not just about sustenance - it's an experience that brings people together.
            </p>

            <p className="mt-4 text-xs text-slate-300 sm:text-sm md:text-base">
              Nestled in the vibrant and historic lanes of Bur Dubai, City Diner was born from a passion to unite flavors from across the world under one cinematic roof. Our kitchen bridges the gap between South Indian spices, Chinese wok mastery, classic English comfort food, and the royal grills of Arabia.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4">
              <div className="rounded-xl border border-white/20 bg-white/10 p-3 text-center backdrop-blur sm:rounded-2xl sm:p-4">
                <h2 className="text-xl font-bold text-red-500 sm:text-3xl">9+</h2>
                <p className="text-[10px] text-slate-300 sm:text-xs">Years Legacy</p>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 p-3 text-center backdrop-blur sm:rounded-2xl sm:p-4">
                <h2 className="text-xl font-bold text-red-500 sm:text-3xl">4</h2>
                <p className="text-[10px] text-slate-300 sm:text-xs">Global Cuisines</p>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 p-3 text-center backdrop-blur sm:rounded-2xl sm:p-4">
                <h2 className="text-xl font-bold text-red-500 sm:text-3xl">1M+</h2>
                <p className="text-[10px] text-slate-300 sm:text-xs">Happy Customers</p>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
};

export default About;
