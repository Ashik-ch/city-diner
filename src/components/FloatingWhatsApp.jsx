import { MessageCircle } from 'lucide-react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  const phoneNumber = "971501234567"; // Replace with actual number
  const message = "Hello City Diner! I would like to make an order/booking.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="floating-wa">
      <MessageCircle size={32} />
      <span className="wa-tooltip">Order on WhatsApp</span>
    </a>
  );
};

export default FloatingWhatsApp;
