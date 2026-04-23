import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { version } from '../../package.json';

const Footer = () => {
  return (
    <footer className="border-t border-white/15 bg-white/5 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-7xl px-4 py-14">
        <div className="grid gap-10 text-center md:grid-cols-2 md:text-left xl:grid-cols-4">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold text-white">
              City<span className="text-red-400">Diner</span>
            </h2>
            <p className="mt-1 text-sm text-slate-300">Cafe and Restaurant</p>
            <div className="mt-4 flex gap-3">
              <a href="https://www.instagram.com/citydinerr/" className="rounded-full border border-white/20 bg-white/5 p-2 text-slate-300 transition hover:text-red-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.facebook.com/citydiner/" className="rounded-full border border-white/20 bg-white/5 p-2 text-slate-300 transition hover:text-red-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.youtube.com/citydiner" className="rounded-full border border-white/20 bg-white/5 p-2 text-slate-300 transition hover:text-red-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="flex flex-col gap-2 text-slate-300">
              <Link to="/" className="transition hover:text-red-300">Home</Link>
              <Link to="/menu" className="transition hover:text-red-300">Our Menu</Link>
              <Link to="/about" className="transition hover:text-red-300">About Us</Link>
              <Link to="/contact" className="transition hover:text-red-300">Contact</Link>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="flex items-start justify-center gap-2 text-slate-300 md:justify-start">
              <MapPin size={18} className="mt-0.5 text-red-300" />
              <p>Bur Dubai, United Arab Emirates</p>
            </div>
            <div className="flex items-start justify-center gap-2 text-slate-300 md:justify-start">
              <Phone size={18} className="mt-0.5 text-red-300" />
              <p>+971 50 123 4567</p>
            </div>
            <div className="flex items-start justify-center gap-2 text-slate-300 md:justify-start">
              <Mail size={18} className="mt-0.5 text-red-300" />
              <p>info@citydiner.ae</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="mt-2 text-slate-300">Subscribe for exclusive offers and updates.</p>
            <form className="mt-4 flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="Your Email Address"
                required
                className="w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm text-white outline-none backdrop-blur focus:border-red-300"
              />
              <button type="submit" className="rounded-xl border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-5 text-center text-[10px] text-slate-400 sm:text-xs">
          <p>&copy; {new Date().getFullYear()} Version {version}. City Diner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
