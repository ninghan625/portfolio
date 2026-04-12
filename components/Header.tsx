"use client";

import Container from "@/components/Container";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useChat } from "@/context/ChatContext";

export default function Header() {
  const pathname = usePathname();
  const { isOpen, setIsOpen } = useChat();

  return (
    <header
      className="fixed top-0 z-50 h-[72px] border-b border-[#EAEAEA] bg-white transition-all duration-300"
      style={{ left: 0, right: isOpen ? 384 : 0 }}
    >
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
          {!isOpen && (
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-1.5 text-[16px] leading-[20px] font-normal text-[#6B7280] hover:text-[#0080FF] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.1068 20.8476L15.0982 15.6724C15.1998 15.4084 15.4084 15.1998 15.6724 15.0983L20.8476 13.1068C21.0109 13.044 21.1548 12.9394 21.265 12.8035C21.613 12.3746 21.5473 11.7448 21.1184 11.3969L16.8119 7.9037C16.5922 7.72553 16.4583 7.46267 16.4433 7.18024L16.1485 1.64297C16.1392 1.46824 16.0842 1.29901 15.989 1.15218C15.6886 0.688752 15.0694 0.556599 14.606 0.857013L9.95297 3.87326C9.71564 4.02711 9.42426 4.07326 9.151 4.00028L3.79366 2.56951C3.62461 2.52437 3.44667 2.52437 3.27761 2.56952C2.74403 2.71202 2.427 3.26009 2.5695 3.79368L4.00026 9.15102C4.07324 9.42427 4.02709 9.71565 3.87324 9.95299L0.856997 14.606C0.761818 14.7528 0.706832 14.922 0.69753 15.0968C0.668172 15.6483 1.09145 16.1192 1.64296 16.1485L7.18022 16.4433C7.46265 16.4583 7.72551 16.5923 7.90369 16.8119L11.3969 21.1184C11.5071 21.2543 11.6511 21.3589 11.8144 21.4217C12.3298 21.6201 12.9084 21.363 13.1068 20.8476Z" fill="currentColor"/>
                <path d="M16.7138 16.7397L16.3363 17.7764L20.606 22.0461C20.9966 22.4367 21.6297 22.4367 22.0203 22.0461C22.4108 21.6556 22.4108 21.0224 22.0203 20.6319L17.7506 16.3622L16.7138 16.7397Z" fill="currentColor"/>
              </svg>
              Chat with CC
            </button>
          )}
        </nav>
      </Container>
    </header>
  );
}
