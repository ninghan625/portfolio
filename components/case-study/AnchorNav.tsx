"use client";

import { useState, useEffect } from "react";

interface AnchorNavProps {
  items: string[];
}

// Convert label to stable ID (e.g., "Role&Scope" -> "role-scope")
function labelToId(label: string): string {
  return label
    .toLowerCase()
    .replace(/&/g, "-")
    .replace(/\s+/g, "-");
}

export default function AnchorNav({ items }: AnchorNavProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observers = new Map<string, IntersectionObserver>();

    items.forEach((item) => {
      const id = labelToId(item);
      const element = document.getElementById(id);

      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(id);
              }
            });
          },
          {
            rootMargin: "-100px 0px -66% 0px",
            threshold: 0,
          }
        );

        observer.observe(element);
        observers.set(id, observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [items]);

  const scrollToSection = (label: string) => {
    const id = labelToId(label);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className="sticky top-[136px] flex flex-col gap-[16px] font-['Heiti_SC','PingFang_SC','Helvetica',sans-serif] text-[15px] leading-normal text-[#86909c]"
    >
      {items.map((item) => {
        const id = labelToId(item);
        const isActive = activeSection === id;

        return (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className={`w-full text-left transition-colors hover:text-[#272e3b] ${
              isActive ? "font-medium text-[#272e3b]" : ""
            }`}
          >
            {item}
          </button>
        );
      })}
    </nav>
  );
}
