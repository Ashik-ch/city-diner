import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = ({ cartItems = [] }) => {
  const phoneNumber = "971505377169";
  const hasItems = cartItems.length > 0;

  const orderLines = cartItems.map(
    (item, index) =>
      `${index + 1}. ID: ${item.id} | ${item.name} | Qty: ${item.qty} | ${item.currency} ${item.price}`
  );

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const message = hasItems
    ? [
        "Hello City Diner! I would like to place this order:",
        "",
        ...orderLines,
        "",
        `Total: AED ${total.toFixed(2)}`,
      ].join("\n")
    : "Hello City Diner! I would like to place an order.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-105 hover:bg-green-600"
      aria-label="Order on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-md bg-slate-900 px-3 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100">
        {hasItems ? `Order on WhatsApp (${cartItems.length})` : "Order on WhatsApp"}
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
