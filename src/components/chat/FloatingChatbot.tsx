import React, { useState, useEffect } from "react";
import ChatWindow from "./ChatWindow";

const FloatingChatbot = () => {
  const [open, setOpen] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);

  const messages = [
    "Hey buddy, chat with me! 👋",
    "Need help? I'm here 😊👋",
    "Tap to start the conversation! 👋",
    "I'm your AI assistant 💬👋",
  ];

  // Auto-show message every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);

      setShowMsg(true);
      setTimeout(() => setShowMsg(false), 2000); // Show message for 2.5 sec
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {open && (
        <ChatWindow onClose={() => setOpen(false)} isStandalone={false} />
      )}

      {!open && (
        <div className="fixed bottom-6 right-6 z-50 group flex items-center gap-3">
          {/* Auto-appearing message bubble */}
          {showMsg && (
            <div
              className="
      bg-white text-black text-sm font-medium
      px-4 py-2 rounded-xl shadow-lg
      animate-fade-slide
      whitespace-nowrap
      flex gap-1 items-center
    "
            >
              {messages[msgIndex].split("👋")[0]}
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
              transition
              p-0
              bg-transparent
              flex items-center justify-center
            "
          >
            <img
              src="/TP.png"
              alt="TP Chatbot Icon"
              className="w-full h-full object-contain"
            />
          </button>
        </div>
      )}
    </>
  );
};

export default FloatingChatbot;
