import React from "react";

const ChatIcon = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="
        fixed bottom-6 right-6
        w-24 h-24
        rounded-full
        shadow-xl
        hover:scale-110
        transition
        z-50
        p-0
        bg-white
      "
    >
      <img
        src="/TP.png"
        alt="Chat Icon"
        className="w-full h-full object-contain"
      />
    </button>
  );
};

export default ChatIcon;
