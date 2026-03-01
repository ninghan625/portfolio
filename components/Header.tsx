"use client";

import Container from "@/components/Container";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 h-[72px] w-full border-b border-[#E5E7EB] bg-white">
      <Container className="flex h-full items-center justify-between">
        <Link
          href="/"
          className="flex gap-[10px] items-center group transition-colors"
        >
          <div className="size-[20px] rounded-full bg-[#0080FF] shrink-0" />
          <div className="flex gap-[8px] items-center">
            <span className="font-normal text-[#272E3B] text-[16px] leading-normal group-hover:text-[#0080FF] transition-colors">
              Claire Han
            </span>
            <div className="w-[0.5px] h-[12px] bg-[#86909C] group-hover:bg-[#0080FF] transition-colors shrink-0" />
            <span className="font-normal text-[#272E3B] text-[16px] leading-normal group-hover:text-[#0080FF] transition-colors">
              Portfolio
            </span>
          </div>
        </Link>
        
        <nav className="flex gap-8 items-center">
          <Link
            href="/about"
            className={`text-[16px] leading-[20px] font-normal transition-colors ${
              pathname === "/about" 
                ? "text-[#1F2937] font-medium" 
                : "text-[#6B7280] hover:text-[#0080FF]"
            }`}
          >
            About Me
          </Link>
          <a
            href="/Resume_ClaireHan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[16px] leading-[20px] font-normal text-[#6B7280] hover:text-[#0080FF] transition-colors"
          >
            Resume
          </a>
        </nav>
      </Container>
    </header>
  );
}
