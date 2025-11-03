import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const phoneNumber = '+254734410310';
  const message = 'Hello! I would like to inquire about Simba Cement products.';
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-strong hover:shadow-glow transform hover:scale-110 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} className="group-hover:animate-pulse" />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Talk to us on WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
      </div>
    </button>
  );
};

export default FloatingWhatsApp;