"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useChat } from "@/context/ChatContext";

interface Message {
  role: "user" | "assistant";
  content: string;
}

// Parse a line of text and turn [text](url), raw URLs, and emails into clickable links
function parseLinks(text: string): React.ReactNode[] {
  const pattern =
    /(\[([^\]]+)\]\((https?:\/\/[^)]+)\)|\bhttps?:\/\/[^\s]+|\b[\w.+-]+@[\w-]+\.[a-z]{2,}\b)/gi;
  const result: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      result.push(text.slice(lastIndex, match.index));
    }

    if (match[2] && match[3]) {
      result.push(
        <a
          key={match.index}
          href={match[3]}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#0080FF] hover:text-[#0066CC]"
        >
          {match[2]}
        </a>
      );
    } else if (/^https?:\/\//i.test(match[0])) {
      result.push(
        <a
          key={match.index}
          href={match[0]}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#0080FF] hover:text-[#0066CC]"
        >
          {match[0]}
        </a>
      );
    } else {
      result.push(
        <a
          key={match.index}
          href={`mailto:${match[0]}`}
          className="underline text-[#0080FF] hover:text-[#0066CC]"
        >
          {match[0]}
        </a>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    result.push(text.slice(lastIndex));
  }

  return result.length > 0 ? result : [text];
}

const HOME_SUGGESTIONS = [
  "Tell me about Claire",
  "What's her most impactful project?",
  "How does Claire use AI in her work?",
];

const PROJECT_SUGGESTIONS: Record<string, string[]> = {
  "supplier-portal-sourcing-experience-optimization": [
    "What problem was this project solving?",
    "What was Claire's design approach here?",
    "What was the impact of this redesign?",
  ],
  "i18n-currency-formatting-toolkit": [
    "How did Claire build the Figma plugin?",
    "What made this a cross-team effort?",
    "How does this relate to AI workflows?",
  ],
  "cloudtower-task-center-redesign": [
    "What was the challenge with task tracking?",
    "How did Claire approach the component library?",
    "What was different about working at a startup?",
  ],
  "business-travel-initiatives-across-mobile-web": [
    "How did Claire design for mobile and web?",
    "What was the 0-1 process like?",
    "What were the key design decisions?",
  ],
};

function getSuggestionsForPath(pathname: string): string[] {
  const match = pathname.match(/^\/work\/(.+)$/);
  if (match && PROJECT_SUGGESTIONS[match[1]]) {
    return PROJECT_SUGGESTIONS[match[1]];
  }
  return HOME_SUGGESTIONS;
}

export default function ChatSidebar() {
  const { isOpen, setIsOpen } = useChat();
  const pathname = usePathname();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>(getSuggestionsForPath("/"));
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Update suggestions when navigating to a different page (only if no conversation yet)
  useEffect(() => {
    if (messages.length === 0) {
      setSuggestions(getSuggestionsForPath(pathname));
    }
  }, [pathname, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function resetChat() {
    setMessages([]);
    setInput("");
    setLoading(false);
    setSuggestions(getSuggestionsForPath(pathname));
  }

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
        body: JSON.stringify({ messages: newMessages, currentPage: pathname }),
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
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `Error: ${message}` },
      ]);
    } finally {
      setLoading(false);
    }
  }

  if (!isOpen) return null;

  return (
    <aside className="fixed top-0 right-0 bottom-0 w-[384px] bg-[#FAFCFF] border-l border-[#EAEAEA] z-50 flex flex-col">
      {/* Header — same height as main header (72px) */}
      <div className="h-[72px] shrink-0 border-b border-[#EAEAEA] flex items-center px-6">
        <div className="flex items-center gap-1 flex-1">
          <img src="/icons/icon_effects_filled.svg" alt="" width={18} height={18} style={{ filter: "invert(27%) sepia(96%) saturate(5035%) hue-rotate(203deg) brightness(101%) contrast(106%)" }} />
          <span className="text-[#0080FF] text-[16px] font-normal">
            Chat with CC
          </span>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={resetChat}
            className="p-1.5 rounded-md hover:bg-black/5 transition-colors"
            title="Reset conversation"
          >
            <img src="/icons/icon_refresh_outlined.svg" alt="Reset" width={18} height={18} className="opacity-50" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-md hover:bg-black/5 transition-colors"
            title="Close chat"
          >
            <img src="/icons/icon_base-agent-task-failed_outlined.svg" alt="Close" width={18} height={18} className="opacity-50" />
          </button>
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto px-6 pt-2 pb-4 flex flex-col gap-3">
        {messages.length === 0 && (
          <div className="flex-1 flex flex-col justify-center gap-2.5">
            <p className="font-light text-[20px] text-[rgba(0,128,255,0.4)] leading-normal">
              CC is Claire&apos;s portfolio assistant.
            </p>
            <p className="font-light text-[20px] text-[rgba(0,128,255,0.4)] leading-normal">
              Ask anything about Claire&apos;s work and background.
            </p>
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-[14px] leading-relaxed ${
                msg.role === "user"
                  ? "bg-[#0080FF] text-white rounded-br-sm"
                  : "bg-[#F3F4F6] text-[#1F2937] rounded-bl-sm"
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
            <div className="bg-[#F3F4F6] text-[#9CA3AF] px-3.5 py-2.5 rounded-2xl rounded-bl-sm text-[14px]">
              CC is thinking
              <span className="inline-flex w-[18px]">
                <span className="animate-dot1">.</span>
                <span className="animate-dot2">.</span>
                <span className="animate-dot3">.</span>
              </span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Bottom section: suggestions + input + disclaimer */}
      <div className="px-6 pb-6 flex flex-col gap-6">
        {/* Suggestions */}
        {suggestions.length > 0 && !loading && (
          <div className="flex flex-col gap-2 items-start pt-2">
            {suggestions.map((s, i) => (
              <button
                key={i}
                onClick={() => sendMessage(s)}
                className="text-[14px] text-left text-[#0080FF] bg-[#ECF5FF] hover:bg-[#DBEAFE] transition-colors px-3 py-1 rounded-full leading-[20px]"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input + disclaimer */}
        <div className="flex flex-col gap-2">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              placeholder="Ask about Claire…"
              className="w-full text-[16px] border-[0.5px] border-[#0080FF] rounded-full pl-4 pr-11 py-2 outline-none focus:border-[#0080FF] transition-colors text-[#1F2937] leading-[28px] placeholder:text-[rgba(134,144,156,0.5)] bg-white"
              disabled={loading}
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={loading || !input.trim()}
              className={`absolute right-1.5 top-1/2 -translate-y-1/2 size-8 rounded-full flex items-center justify-center transition-colors ${
                input.trim()
                  ? "bg-[#0080FF] text-white"
                  : "bg-[#E5E7EB] text-[#9CA3AF]"
              }`}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 13V3M8 3L3 8M8 3L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <p className="text-[#86909C] text-[12px] text-center w-full">
            CC is AI and can make mistakes
          </p>
        </div>
      </div>
    </aside>
  );
}
