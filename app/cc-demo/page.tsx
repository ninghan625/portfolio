"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

// Parse a line of text and turn [text](url), raw URLs, and emails into clickable links
function parseLinks(text: string): React.ReactNode[] {
  // Match: [link text](url) | raw https:// URLs | email addresses
  const pattern = /(\[([^\]]+)\]\((https?:\/\/[^)]+)\)|\bhttps?:\/\/[^\s]+|\b[\w.+-]+@[\w-]+\.[a-z]{2,}\b)/gi;
  const result: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      result.push(text.slice(lastIndex, match.index));
    }

    if (match[2] && match[3]) {
      // [link text](url) format
      result.push(
        <a key={match.index} href={match[3]} target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800">
          {match[2]}
        </a>
      );
    } else if (/^https?:\/\//i.test(match[0])) {
      // Raw URL
      result.push(
        <a key={match.index} href={match[0]} target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800">
          {match[0]}
        </a>
      );
    } else {
      // Email
      result.push(
        <a key={match.index} href={`mailto:${match[0]}`} className="underline text-blue-600 hover:text-blue-800">
          {match[0]}
        </a>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    result.push(text.slice(lastIndex));
  }

  return result.length > 0 ? result : [text];
}

const DEFAULT_SUGGESTIONS = [
  "Tell me about Claire",
  "What's her most impactful project?",
  "How does Claire use AI in her work?",
];

export default function CCDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>(DEFAULT_SUGGESTIONS);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage(text: string) {
    if (!text.trim() || loading) return;

    const userMessage: Message = { role: "user", content: text };
    const newMessages = [...messages, userMessage];

    setMessages(newMessages);
    setInput("");
    setLoading(true);
    setSuggestions([]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) {
        let errMsg = `HTTP ${res.status}`;
        try {
          const err = await res.json();
          errMsg = err.error || errMsg;
        } catch {}
        throw new Error(errMsg);
      }

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.answer },
      ]);

      if (data.suggestions?.length > 0) {
        setSuggestions(data.suggestions);
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong";
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `Error: ${message}` },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg flex flex-col" style={{ height: "80vh" }}>

        {/* Header */}
        <div className="p-5 border-b border-gray-100">
          <h1 className="font-semibold text-gray-900 text-lg">Chat with CC</h1>
          <p className="text-gray-500 text-sm mt-0.5">CC is Claire's assistant — ask anything about her work and background.</p>
          <div className="mt-2 inline-block bg-yellow-50 border border-yellow-200 text-yellow-700 text-xs px-2 py-1 rounded-full">
            🧪 Demo — not connected to portfolio yet
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
          {messages.length === 0 && (
            <div className="text-center text-gray-400 text-sm mt-8">
              Ask me anything about Claire ↓
            </div>
          )}

          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-blue-500 text-white rounded-br-sm"
                    : "bg-gray-100 text-gray-800 rounded-bl-sm"
                }`}
              >
                {msg.content.split("\n").map((line, lineIdx) => (
                  <span key={lineIdx}>
                    {parseLinks(line)}
                    {lineIdx < msg.content.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-400 px-4 py-2.5 rounded-2xl rounded-bl-sm text-sm">
                CC is thinking...
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggestions */}
        {suggestions.length > 0 && !loading && (
          <div className="px-5 pb-3 flex gap-2 flex-wrap">
            {suggestions.map((s, i) => (
              <button
                key={i}
                onClick={() => sendMessage(s)}
                className="text-xs border border-blue-200 text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors px-3 py-1.5 rounded-full"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-gray-100 flex gap-3 items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
            placeholder="Ask about Claire..."
            className="flex-1 text-sm border border-gray-200 rounded-full px-4 py-2.5 outline-none focus:border-blue-400 transition-colors"
            disabled={loading}
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={loading || !input.trim()}
            className="bg-blue-500 hover:bg-blue-600 disabled:opacity-40 text-white text-sm px-4 py-2.5 rounded-full transition-colors"
          >
            Send
          </button>
        </div>

        {/* Disclaimer */}
        <div className="text-center text-gray-400 text-xs pb-3">
          CC is AI and can make mistakes
        </div>
      </div>
    </div>
  );
}
