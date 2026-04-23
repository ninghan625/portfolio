"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { usePathname } from "next/navigation";

interface ChatContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  toggle: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  // Default open only on homepage; closed on project detail pages and other routes
  const [isOpen, setIsOpen] = useState(pathname === "/");

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
