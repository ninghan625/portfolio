"use client";

import { ReactNode } from "react";
import { useChat } from "@/context/ChatContext";

export default function MainContent({ children }: { children: ReactNode }) {
  const { isOpen } = useChat();

  return (
    <div
      className="pt-[72px] transition-all duration-300"
      style={{ marginRight: isOpen ? 384 : 0 }}
    >
      {children}
    </div>
  );
}
