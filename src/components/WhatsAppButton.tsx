import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/966503253273"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold-lg hover:scale-110 transition-transform duration-300 group"
    >
      <MessageCircle className="w-7 h-7 text-primary-foreground" />
      <span className="absolute right-full mr-3 bg-card border border-border text-foreground font-body text-xs px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
