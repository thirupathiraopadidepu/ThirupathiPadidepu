import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
  onClose: () => void;
  isStandalone?: boolean;
}

const API_BASE = import.meta.env.VITE_API_BASE || "";

const ChatWindow: React.FC<Props> = ({ onClose, isStandalone = false }) => {
  const [messages, setMessages] = useState<
    { from: "user" | "bot"; text: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [streamingText, setStreamingText] = useState("");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput("");

    setMessages((prev) => [...prev, { from: "user", text: userMessage }]);
    setStreamingText("TP is typing...");

    try {
      const res = await fetch(`${API_BASE}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      // ❗ Important safety check
      if (!res.ok) {
        throw new Error(`Server error ${res.status}`);
      }

      const data = await res.json();

      if (!data?.reply) {
        throw new Error("Invalid response from server");
      }

      const text = data.reply;

      // Typing animation
      let index = 0;
      setStreamingText("");

      const interval = setInterval(() => {
        setStreamingText((prev) => prev + text.charAt(index));
        index++;

        if (index >= text.length) {
          clearInterval(interval);
          setMessages((prev) => [...prev, { from: "bot", text }]);
          setStreamingText("");
        }
      }, 15);
    } catch (error) {
      console.error("Chat error:", error);

      setStreamingText("");
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "⚠️ Sorry, the assistant is temporarily unavailable. Please try again in a moment.",
        },
      ]);
    }
  };

  return (
    <div
      className={`${
        isStandalone
          ? "w-full max-w-3xl mx-auto bg-gray-900 border border-gray-700 rounded-xl p-6"
          : "fixed bottom-20 right-6 w-96 bg-gray-900 border border-gray-700 rounded-xl p-4 z-50"
      } shadow-2xl`}
    >
      {/* Header */}
      <div className="flex justify-between mb-3">
        <h2 className="text-xl font-semibold text-blue-400">TP Assistant</h2>

        {!isStandalone && (
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-red-400"
          >
            ✖
          </button>
        )}
      </div>

      {/* Messages */}
      <div className="h-96 overflow-y-auto space-y-4 p-3 bg-gray-800 rounded-lg">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg text-sm whitespace-pre-wrap ${
              m.from === "user"
                ? "bg-blue-500 text-white w-fit ml-auto"
                : "bg-gray-700 text-gray-200"
            }`}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ inline, className, children, ...props }: any) {
                  const match = /language-(\w+)/.exec(className || "");
                  const codeText = String(children).replace(/\n$/, "");

                  if (inline || !match) {
                    return (
                      <code
                        className="bg-gray-700 px-1 py-0.5 rounded"
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  }

                  return (
                    <div className="relative group">
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(codeText);
                          setCopiedCode(codeText);
                          setTimeout(() => setCopiedCode(null), 1500);
                        }}
                        className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition
                                   bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded"
                      >
                        {copiedCode === codeText ? "✓ Copied" : "Copy"}
                      </button>

                      <SyntaxHighlighter
                        style={vscDarkPlus as any}
                        language={match[1]}
                        PreTag="div"
                        className="rounded-md my-2"
                      >
                        {codeText}
                      </SyntaxHighlighter>
                    </div>
                  );
                },
              }}
            >
              {m.text}
            </ReactMarkdown>
          </div>
        ))}

        {streamingText && (
          <div className="bg-gray-700 p-2 rounded-lg text-gray-200 text-sm animate-pulse">
            {streamingText}
          </div>
        )}
      </div>

      {/* Input */}
      <div className="mt-4 flex">
        <input
          className="flex-1 px-3 py-2 bg-gray-700 rounded-l-lg text-white outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="px-5 bg-blue-500 rounded-r-lg hover:bg-blue-600 text-white"
        >
          ➤
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
