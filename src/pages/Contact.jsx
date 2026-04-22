import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import bgImage from '../assets/bgImage.jpg';

const Contact = () => {
  const MotionDiv = motion.div;

  return (
    <div className="relative min-h-screen overflow-x-hidden px-4 py-16 text-white">
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center blur-lg"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="fixed inset-0 -z-10 bg-slate-950/70" />
      <div className="absolute left-[10%] top-[12%] h-72 w-72 rounded-full bg-red-500/15 blur-[100px]" />
      <div className="absolute bottom-[10%] right-[10%] h-72 w-72 rounded-full bg-cyan-500/15 blur-[100px]" />

      <div className="mx-auto w-full max-w-7xl">
        <MotionDiv 
          className="mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Get in <span className="bg-gradient-to-r from-red-400 to-purple-300 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="mt-3 text-slate-300">We'd love to hear from you. Book a table or ask us anything.</p>
        </MotionDiv>

        <div className="grid gap-6 lg:grid-cols-2">
          <MotionDiv 
            className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-xl md:p-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-white">Contact Information</h2>
            <div className="mt-6 space-y-5">
              <div className="flex gap-3">
                <MapPin className="mt-1 text-red-300" />
                <div>
                  <h4 className="font-semibold text-white">Location</h4>
                  <p className="text-slate-300">123 Food Street, Historic District, Bur Dubai, UAE</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-1 text-red-300" />
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <p className="text-slate-300">+971 50 123 4567</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="mt-1 text-red-300" />
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-slate-300">reservations@citydiner.ae</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="mt-1 text-red-300" />
                <div>
                  <h4 className="font-semibold text-white">Operating Hours</h4>
                  <p className="text-slate-300">Mon - Sun: 8:00 AM - 1:00 AM</p>
                </div>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv 
            className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-xl md:p-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-white">Send a Message</h2>
            <form>
              <div className="mt-5">
                <input type="text" placeholder="Your Name" required className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none backdrop-blur focus:border-red-300" />
              </div>
              <div className="mt-4">
                <input type="email" placeholder="Your Email" required className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none backdrop-blur focus:border-red-300" />
              </div>
              <div className="mt-4">
                <input type="tel" placeholder="Your Phone Number" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none backdrop-blur focus:border-red-300" />
              </div>
              <div className="mt-4">
                <textarea rows="4" placeholder="Your Message or Booking Details" required className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none backdrop-blur focus:border-red-300"></textarea>
              </div>
              <button type="submit" className="mt-4 w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20">
                Send Message
              </button>
            </form>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};

export default Contact;
