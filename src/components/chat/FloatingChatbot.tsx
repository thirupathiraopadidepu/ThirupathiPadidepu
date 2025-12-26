import React, { useEffect, useRef, useState } from "react";
import ChatWindow from "./ChatWindow";

const FloatingChatbot = () => {
  const [open, setOpen] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);

  const autoOpenedRef = useRef(false);

  const messages = [
    "Hey buddy, chat with me!",
    "Need help? I'm here 😊",
    "Tap to start the conversation!",
    "I'm your AI assistant 💬",
  ];

  /* ================= AUTO-OPEN CHAT (8s) ================= */
  useEffect(() => {
    if (autoOpenedRef.current) return;

    const timer = setTimeout(() => {
      setOpen(true);
      autoOpenedRef.current = true;
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  /* ================= TOOLTIP ROTATION ================= */
  useEffect(() => {
    if (open) {
      setShowMsg(false);
      return;
    }

    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
      setShowMsg(true);

      const hideTimer = setTimeout(() => {
        setShowMsg(false);
      }, 2200);

      return () => clearTimeout(hideTimer);
    }, 5000);

    return () => clearInterval(interval);
  }, [open, messages.length]);

  return (
    <>
      {/* Chat Window */}
      {open && (
        <ChatWindow onClose={() => setOpen(false)} isStandalone={false} />
      )}

      {/* Floating Button */}
      {!open && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
          {/* Tooltip Bubble */}
          {showMsg && (
            <div
              className="
                bg-white text-black text-sm font-medium
                px-4 py-2 rounded-xl shadow-lg
                animate-fade-slide
                whitespace-nowrap
                flex items-center gap-1
              "
            >
              {messages[msgIndex]}
              <span className="wave">👋</span>
            </div>
          )}

          {/* Chat Button */}
          <button
            onClick={() => setOpen(true)}
            className="
              w-24 h-24
              rounded-full
              shadow-xl
              hover:scale-110
              transition-transform
              bg-transparent
              flex items-center justify-center
            "
          >
            <img
              src="/TP.png"
              alt="TP Chatbot"
              className="w-full h-full object-contain"
            />
          </button>
        </div>
      )}
    </>
  );
};

export default FloatingChatbot;
