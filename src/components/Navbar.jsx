import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ShoppingBag, Sun, Moon } from 'lucide-react';

const Navbar = ({ theme, onToggleTheme, cartCount = 0, onOpenCart }) => {
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
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled
        ? 'py-2'
        : 'py-4'
        }`}
    >
      <div className={`mx-auto flex w-[calc(100%-1.5rem)] max-w-7xl items-center justify-between rounded-2xl border border-white/10 px-4 py-3 transition-all duration-300 md:w-[calc(100%-3rem)] md:px-6 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-2xl' : 'bg-slate-900/40 backdrop-blur-sm'
        }`}>
        <NavLink to="/" className="text-lg font-bold tracking-widest text-white sm:text-xl">
          City<span className="text-red-500">Diner</span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <div className="flex items-center gap-8">
            {[
              { to: '/', label: 'Home' },
              { to: '/menu', label: 'Menu' },
              { to: '/about', label: 'About Us' },
              { to: '/contact', label: 'Contact' },
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-all hover:text-red-500 ${isActive ? 'text-red-500' : 'text-slate-200'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`absolute left-0 top-[calc(100%+0.5rem)] w-full px-3 transition-all duration-300 md:hidden ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
            }`}
        >
          <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-2xl backdrop-blur-xl">
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
                  `rounded-xl px-4 py-3 text-sm font-medium transition-all ${isActive ? 'bg-white/10 text-red-500' : 'text-slate-200 hover:bg-white/5'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <button
              className="mt-2 rounded-xl bg-red-600 px-4 py-3 text-sm font-bold text-white shadow-lg active:scale-95"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book A Table
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* <button
            className="flex items-center gap-1 rounded-full border border-white/20 bg-white/5 p-2 text-slate-100 transition hover:border-red-500 sm:px-3 sm:py-2 sm:text-xs sm:font-semibold"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button> */}

          {/* <button 
            onClick={onOpenCart}
            className="relative rounded-full border border-white/20 bg-white/5 p-2 text-slate-100 transition hover:border-red-500 active:scale-90"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm sm:h-5 sm:w-5">
                {cartCount}
              </span>
            )}
          </button> */}

          <button
            className="rounded-xl p-2 text-slate-100 transition hover:bg-white/10 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
