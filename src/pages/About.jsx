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
          className="grid items-center gap-10 rounded-3xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-xl md:grid-cols-2 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <img
              src="https://b.zmtcdn.com/data/reviews_photos/686/c6cff6f63994941ddb57da276d61c686_1520970182.jpg"
              alt="City Diner interior"
              className="h-full w-full object-cover"
            />
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-red-300">Our Story</h4>
            <h1 className="mt-2 text-4xl font-bold leading-tight md:text-5xl">
              The Heart of <br />
              <span className="bg-gradient-to-r from-red-400 to-red-700 bg-clip-text text-transparent">Bur Dubai</span>
            </h1>
            
            <p className="mt-4 text-lg text-slate-200">
              At City Diner, we believe that food is not just about sustenance - it's an experience that brings people together.
            </p>
            
            <p className="mt-4 text-slate-300">
              Nestled in the vibrant and historic lanes of Bur Dubai, City Diner was born from a passion to unite flavors from across the world under one cinematic roof. Our kitchen bridges the gap between South Indian spices, Chinese wok mastery, classic English comfort food, and the royal grills of Arabia.
            </p>
            
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur">
                <h2 className="text-3xl font-bold text-red-300">15+</h2>
                <p className="text-sm text-slate-300">Years of Legacy</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur">
                <h2 className="text-3xl font-bold text-red-300">4</h2>
                <p className="text-sm text-slate-300">Global Cuisines</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur">
                <h2 className="text-3xl font-bold text-red-300">1M+</h2>
                <p className="text-sm text-slate-300">Happy Customers</p>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
};

export default About;
