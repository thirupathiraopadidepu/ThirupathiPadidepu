import ChatWindow from "../components/chat/ChatWindow";
import { Link } from "react-router-dom";

const ChatPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      {/* Back Buttons Row */}
      <div className="flex gap-4 mb-6">
        <Link
          to="/"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md"
        >
          ⬅ Back to Home
        </Link>

        <Link
          to="/services"
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg shadow-md"
        >
          🛠 Back to Services
        </Link>
      </div>

      {/* Chat Window */}
      <ChatWindow onClose={() => {}} isStandalone={true} />
    </div>
  );
};

export default ChatPage;
