"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
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

  // Re-sync open state on route change so detail pages always start closed
  // and the homepage always starts open, regardless of navigation direction.
  useEffect(() => {
    setIsOpen(pathname === "/");
  }, [pathname]);

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
