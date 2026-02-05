"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface CursorContextType {
  isProjectHovered: boolean;
  setIsProjectHovered: (isHovered: boolean) => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export function CursorProvider({ children }: { children: ReactNode }) {
  const [isProjectHovered, setIsProjectHovered] = useState(false);

  return (
    <CursorContext.Provider value={{ isProjectHovered, setIsProjectHovered }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
}
