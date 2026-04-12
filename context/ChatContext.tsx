"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ChatContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  toggle: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(true); // default open on desktop

  return (
    <ChatContext.Provider value={{ isOpen, setIsOpen, toggle: () => setIsOpen((v) => !v) }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat must be used within ChatProvider");
  return ctx;
}
