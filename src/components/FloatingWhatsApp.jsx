import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const phoneNumber = "971501234567"; // Replace with actual number
  const message = "Hello City Diner! I would like to make an order/booking.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-105 hover:bg-green-600"
    >
      <MessageCircle size={32} />
      <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-md bg-slate-900 px-3 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100">
        Order on WhatsApp
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
