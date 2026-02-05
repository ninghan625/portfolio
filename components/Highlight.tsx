import React from "react";

interface HighlightProps {
  children: React.ReactNode;
  className?: string;
}

export default function Highlight({ children, className = "" }: HighlightProps) {
  return (
    <span
      className={`highlight-text inline rounded-[4px] bg-[rgba(0,128,255,0.1)] px-[4px] py-[2px] text-[#0080FF] ${className}`}
    >
      {children}
    </span>
  );
}
