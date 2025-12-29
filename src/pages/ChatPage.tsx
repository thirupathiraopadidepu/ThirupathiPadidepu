import ChatWindow from "../components/chat/ChatWindow";
import { Link } from "react-router-dom";

const ChatPage = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white px-4 py-20">
      {/* 🔝 Top-left Navigation */}
      <div className="fixed top-6 left-6 z-50 flex gap-3">
        <Link
          to="/"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md text-sm font-medium"
        >
          ⬅ Back
        </Link>

        <Link
          to="/services"
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg shadow-md text-sm font-medium"
        >
          🛠 Services
        </Link>
      </div>

      {/* 🧠 Intro */}
      <div className="text-center max-w-2xl mx-auto mb-10 mt-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Talk to TP Assistant 🤖
        </h1>

        <p className="text-gray-300">
          Ask about web development, SaaS ideas, AI automation, pricing, tech
          stack suggestions, or project guidance.
        </p>

        <p className="text-sm text-gray-400 mt-3">
          ⚡ Instant replies • 💡 Technical help • 🚀 Project guidance
        </p>
      </div>

      {/* 💬 Chat Window */}
      <div className="flex justify-center">
        <ChatWindow onClose={() => {}} isStandalone />
      </div>

      {/* ℹ️ Footer Note */}
      <p className="text-center text-xs text-gray-500 mt-8">
        This is an AI-powered assistant. For business inquiries, please use the
        Contact page.
      </p>
    </div>
  );
};

export default ChatPage;
