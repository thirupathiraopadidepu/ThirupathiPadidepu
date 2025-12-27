import { MessageCircle } from "lucide-react";

const WhatsAppCTA = () => {
  const phoneNumber = "917036499748"; // country code + number
  const message = encodeURIComponent(
    "Hi Thirupathi 👋 I’m interested in building a website / web app. Can we discuss?"
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2
bg-green-500 hover:bg-green-600 text-white
px-4 py-3 rounded-full shadow-xl whatsapp-pulse"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:block font-medium">Chat on WhatsApp</span>
    </a>
  );
};

export default WhatsAppCTA;
