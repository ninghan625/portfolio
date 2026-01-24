import Link from "next/link";
import Container from "./Container";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 h-[72px] w-full border-b-[0.3px] border-solid border-[#86909c]/50 bg-white/80 backdrop-blur-md">
      <Container maxWidth="868px" className="h-full">
        <div className="flex h-full items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-[8px] text-[16px] font-normal text-black hover:text-[#0080FF] transition-colors"
          >
            <span className="h-[16px] w-[16px] rounded-full bg-[#0080FF]" />
            Claire
          </Link>
          <a
            href="/Resume_ClaireHan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[16px] font-normal text-black hover:text-[#0080FF] transition-colors"
          >
            Resume
          </a>
        </div>
      </Container>
    </header>
  );
}
