import { ShoppingCart } from 'lucide-react';

const FloatingCart = ({ cartCount = 0, onClick }) => {
  const hasItems = cartCount > 0;

  return (
    <button
      onClick={onClick}
      className={`group fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-green-600 active:scale-95 ${
        hasItems ? 'animate-cart-blink' : ''
      }`}
      aria-label="View Cart"
    >
      <div className="relative">
        <ShoppingCart size={32} />
        {hasItems && (
          <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white shadow-md">
            {cartCount}
          </span>
        )}
      </div>
      
      <span className="pointer-events-none absolute right-20 whitespace-nowrap rounded-xl bg-slate-900/90 px-4 py-2 text-sm font-medium text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 translate-x-4 border border-white/10 shadow-xl">
        {hasItems ? `View Cart (${cartCount} items)` : "Cart is empty"}
      </span>
    </button>
  );
};

export default FloatingCart;
