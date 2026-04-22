import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ShoppingBag, Sun, Moon } from 'lucide-react';

const Navbar = ({ theme, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b transition ${isScrolled
        ? 'border-none  backdrop-blur'
        : 'border-transparent bg-slate-950/50'
        }`}
    >
      <div className="mx-auto mt-4 flex w-[calc(100%-1.5rem)] max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 backdrop-blur-xl md:mt-5 md:w-[calc(100%-3rem)] md:px-6">
        <NavLink to="/" className="text-lg font-semibold tracking-widest text-white">
          City<span className="text-red-400">Diner</span>
        </NavLink>

        <div
          className={`absolute left-0 top-[calc(100%+0.5rem)] w-full rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-xl backdrop-blur-xl md:static md:w-auto md:border-none md:bg-transparent md:p-0 md:shadow-none ${isMobileMenuOpen ? 'block' : 'hidden md:block'
            }`}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
            {[
              { to: '/', label: 'Home' },
              { to: '/menu', label: 'Menu' },
              { to: '/about', label: 'About Us' },
              { to: '/contact', label: 'Contact' },
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium transition hover:text-red-500 ${isActive ? 'text-red-400' : 'text-slate-200'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            className="flex items-center gap-1 rounded-full border border-white/20 px-3 py-2 text-xs font-semibold text-slate-100 transition hover:border-red-300"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
          <button className="relative rounded-full border border-white/20 p-2 text-slate-100 transition hover:border-red-300">
            <ShoppingBag size={20} />
            <span className="absolute -right-1 -top-1 rounded-full bg-red-400 px-1.5 text-[10px] font-bold text-slate-900">
              0
            </span>
          </button>
          <button className="hidden rounded-full border border-white/25 bg-white/10 px-5 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20 md:block">
            Book A Table
          </button>

          <button
            className="rounded-md p-1 text-slate-100 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
