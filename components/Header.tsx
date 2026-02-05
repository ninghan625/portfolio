"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 h-[72px] w-full border-b border-[#E5E7EB] bg-white">
      <div className="flex h-full items-center justify-between px-4 md:px-20 max-w-[1440px] mx-auto">
        <div className="flex gap-3 items-center">
          <div className="size-[18px] rounded-full bg-[#0080FF]" />
          <Link
            href="/"
            className="flex gap-2 items-center group transition-colors"
          >
            <span className="font-medium text-[#1F2937] text-[16px] leading-[20px] group-hover:text-[#0080FF] transition-colors">
              Claire Han
            </span>
            <span className="font-normal text-[#6B7280] text-[16px] leading-[20px] group-hover:text-[#0080FF] transition-colors">
              Portfolio
            </span>
          </Link>
        </div>
        
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
      </div>
    </header>
  );
}
