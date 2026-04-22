import { useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { menuCategories } from './menu.data';

// Pages placeholders
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [theme, setTheme] = useState('dark');
  const [cartItems, setCartItems] = useState([]);

  const menuItemMap = useMemo(() => {
    const entries = menuCategories.flatMap((category) => category.items.map((item) => [item.id, item]));
    return new Map(entries);
  }, []);

  const addToCart = (itemId) => {
    const item = menuItemMap.get(itemId);
    if (!item) return;

    setCartItems((prev) => {
      const existing = prev.find((cartItem) => cartItem.id === itemId);
      if (existing) {
        return prev.map((cartItem) =>
          cartItem.id === itemId ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div
      className="min-h-screen bg-slate-950 text-white"
    >
      <Navbar theme={theme} onToggleTheme={toggleTheme} cartCount={cartCount} />

      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu onAddToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      <FloatingWhatsApp cartItems={cartItems} />
    </div>
  );
}

export default App;
