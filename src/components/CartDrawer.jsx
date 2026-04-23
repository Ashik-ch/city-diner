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
            className="fixed right-0 top-0 z-[70] h-full w-full max-w-md border-l border-white/10 bg-slate-900/95 shadow-2xl backdrop-blur-xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 p-6">
              <h2 className="text-2xl font-bold text-white">Your Order</h2>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-slate-400">
                  <ShoppingCart size={64} className="mb-4 opacity-20" />
                  <p className="text-lg">Your cart is empty</p>
                  <button
                    onClick={onClose}
                    className="mt-4 text-green-500 hover:underline"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 rounded-2xl border border-white/5 bg-white/5 p-4"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-20 w-20 rounded-xl object-cover"
                    />
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-white">{item.name}</h3>
                          <p className="text-sm text-slate-400">AED {item.price}</p>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-slate-500 transition hover:text-red-500"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-3 rounded-lg bg-white/10 px-2 py-1">
                          <button
                            onClick={() => onUpdateQty(item.id, item.qty - 1)}
                            className="text-slate-300 hover:text-white"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="min-w-[20px] text-center text-sm font-medium text-white">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => onUpdateQty(item.id, item.qty + 1)}
                            className="text-slate-300 hover:text-white"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <p className="font-bold text-white">
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
              <div className="border-t border-white/10 bg-slate-900/50 p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-slate-400">
                    <span>Count :</span>
                    <span>{cartItems.length}</span>
                  </div>
                  <div className="flex justify-between border-t border-white/10 pt-2 text-xl font-bold text-white">
                    <span>Total</span>
                    <span>AED {(total).toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleConfirmOrder}
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-green-500 py-4 text-lg font-bold text-white transition hover:bg-green-600 active:scale-[0.98]"
                >
                  <MessageCircle size={24} />
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
