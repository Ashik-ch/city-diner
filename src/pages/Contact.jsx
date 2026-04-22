import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import bgImage from '../assets/bgImage9.jpg';

const Contact = () => {
  const MotionDiv = motion.div;

  return (
    <div className="relative min-h-screen overflow-x-hidden px-4 py-16 text-white">
      <div
        className="fixed inset-0 z-0 bg-cover bg-center blur-sm"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="fixed inset-0 z-0 bg-slate-950/40" />
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
            <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
            <div className="space-y-6">
              {/* Contact Details */}
              <div className="grid grid-cols-1  gap-6">
                <div className="space-y-5">
                  <div className="flex gap-3">
                    <MapPin className="mt-1 text-orange-400 shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-white">Location</h4>
                      <p className="text-slate-300 text-sm">SharafDG Metro Exit 2, Al Fahdi, Bur Dubai, UAE</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Phone className="mt-1 text-orange-400 shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-white">Phone</h4>
                      <p className="text-slate-300 text-sm">+971 50 123 4567</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Mail className="mt-1 text-orange-400 shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-white">Email</h4>
                      <p className="text-slate-300 text-sm">citydiner@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Clock className="mt-1 text-orange-400 shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-white">Operating Hours</h4>
                      <p className="text-slate-300 text-sm">24/7 Service</p>
                    </div>
                  </div>

                  {/* Redesigned Map Container */}
                  <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 group">
                    <iframe
                      // Replace with your actual Google Maps Embed Link
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3265.380445965408!2d55.2964549!3d25.2583765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f433c17b1c617%3A0xeb8bd01bae849b12!2sCity%20Diner!5e1!3m2!1sen!2sae!4v1776893566626!5m2!1sen!2sae"
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="City Diner Location"
                    ></iframe>

                    {/* Subtle Overlay to make map match the dark theme */}
                    <div className="absolute inset-0 pointer-events-none bg-orange-500/5 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
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
