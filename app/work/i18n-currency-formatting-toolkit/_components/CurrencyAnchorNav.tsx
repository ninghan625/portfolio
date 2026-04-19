"use client";

import { useState, useEffect } from "react";

const ITEMS = [
  { label: "TL;DR",      id: "tldr" },
  { label: "Context",    id: "context" },
  { label: "Framework",  id: "framework" },
  { label: "Mechanism",  id: "mechanism" },
  { label: "Specs",      id: "specs" },
  { label: "Skill",      id: "skill" },
  { label: "Impact",     id: "impact" },
  { label: "Reflection", id: "reflection" },
];

export default function CurrencyAnchorNav() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const obs = new Map<string, IntersectionObserver>();
    ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const o = new IntersectionObserver(
        (entries) => { if (entries[0].isIntersecting) setActiveId(id); },
        { rootMargin: "-100px 0px -66% 0px", threshold: 0 }
      );
      o.observe(el);
      obs.set(id, o);
    });
    return () => obs.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className="sticky top-[136px] flex flex-col gap-[16px]">
      {ITEMS.map(({ label, id }) => (
        <button
          key={id}
          onClick={() =>
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          className={`w-full text-left text-[15px] leading-[1.03em] transition-colors hover:text-[#272E3B] ${
            activeId === id ? "font-medium text-[#272E3B]" : "text-[#86909C]"
          }`}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
