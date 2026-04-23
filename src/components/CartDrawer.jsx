import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, MessageCircle } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose, cartItems, onUpdateQty, onRemoveItem, total }) => {
  const phoneNumber = "971505377169";

  const handleConfirmOrder = () => {
    const orderLines = cartItems.map(
      (item, index) =>
        `${index + 1}. ${item.name} | Qty: ${item.qty} | AED ${item.price * item.qty}`
    );

    const message = [
      "Hello City Diner! I would like to place this order:",
      "",
      ...orderLines,
      "",
      `Total: AED ${total.toFixed(2)}`,
      "",
      "Thank you!"
    ].join("\n");

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-[70] h-full w-full border-l border-white/10 bg-slate-900/95 shadow-2xl backdrop-blur-xl flex flex-col sm:max-w-md"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 p-5 sm:p-6">
              <h2 className="text-xl font-bold text-white sm:text-2xl">Your Order</h2>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
              {cartItems.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-slate-400">
                  <ShoppingCart size={48} className="mb-4 opacity-20 sm:size-64" />
                  <p className="text-base sm:text-lg">Your cart is empty</p>
                  <button
                    onClick={onClose}
                    className="mt-4 text-sm text-green-500 hover:underline sm:text-base"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 rounded-xl border border-white/5 bg-white/5 p-3 sm:gap-4 sm:rounded-2xl sm:p-4"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-16 w-16 rounded-lg object-cover sm:h-20 sm:w-20 sm:rounded-xl"
                    />
                    <div className="flex flex-1 flex-col justify-between min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <h3 className="text-sm font-semibold text-white sm:text-base truncate">{item.name}</h3>
                          <p className="text-xs text-slate-400">AED {item.price}</p>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-slate-500 transition hover:text-red-500 shrink-0"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2 rounded-lg bg-white/10 px-1.5 py-0.5 sm:gap-3 sm:px-2 sm:py-1">
                          <button
                            onClick={() => onUpdateQty(item.id, item.qty - 1)}
                            className="text-slate-300 hover:text-white"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="min-w-[16px] text-center text-xs font-medium text-white sm:min-w-[20px] sm:text-sm">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => onUpdateQty(item.id, item.qty + 1)}
                            className="text-slate-300 hover:text-white"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <p className="text-sm font-bold text-white sm:text-base">
                          AED {(item.price * item.qty).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Invoice */}
            {cartItems.length > 0 && (
              <div className="border-t border-white/10 bg-slate-900/50 p-5 sm:p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-slate-400 sm:text-sm">
                    <span>Count :</span>
                    <span>{cartItems.length}</span>
                  </div>
                  <div className="flex justify-between border-t border-white/10 pt-2 text-lg font-bold text-white sm:text-xl">
                    <span>Total</span>
                    <span>AED {(total).toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleConfirmOrder}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-green-600 py-3 text-base font-bold text-white transition hover:bg-green-700 active:scale-[0.98] sm:rounded-2xl sm:py-4 sm:text-lg"
                >
                  <MessageCircle size={20} className="sm:size-24" />
                  Confirm Order via WhatsApp
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Placeholder icon since it's not imported at the top in this specific block
import { ShoppingCart } from 'lucide-react';

export default CartDrawer;
