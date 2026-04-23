"use client";

import ProjectCard from "@/components/ProjectCard";
import { works } from "@/data/works";
import Highlight from "@/components/Highlight";
import TextType from "@/components/TextType";
import Container from "@/components/Container";

const serifFont = { fontFamily: "var(--font-noto-serif), Georgia, serif" };

export default function Home() {
  const scrollToWork = () => {
    const element = document.getElementById("selected-work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white flex flex-col items-center w-full">
      {/* Hero Section */}
      <Container className="flex flex-col items-center min-h-[100svh] pt-[180px] pb-16">
        {/* Content */}
        <div className="flex flex-col items-center gap-6 w-full max-w-[1280px]">
          {/* Avatar */}
          <div className="relative rounded-full shrink-0 size-20">
            <img
              alt="Claire Han"
              className="rounded-full object-cover size-full"
              src="/images/IMG_6527 1.png"
            />
          </div>

          {/* Name — Noto Serif 500 to match case study titles */}
          <div style={serifFont}>
            <TextType
              as="h1"
              text={[
                "Hey, I'm Claire!",
                "I design B2B & enterprise products.",
                "Let's connect!",
              ]}
              className="font-medium text-[#1f2329] text-[32px] leading-[1.2] text-center"
              typingSpeed={80}
              deletingSpeed={50}
              pauseDuration={2000}
              loop={true}
              cursorCharacter="_"
            />
          </div>

          {/* Introduction */}
          <div className="flex flex-col gap-3 text-[19px] leading-[28px] w-full max-w-[680px] text-center">
            <p className="text-[#1f2329]">
              A product designer who lives in the messy middle of{" "}
              <Highlight>complex B2B systems</Highlight>. Currently at ByteDance.
              Lately <Highlight>building AI workflows</Highlight> into how I
              research, QA, and ship.
            </p>
            <p className="text-[#8f959e] text-[18px] leading-[24px] mt-2">
              📍 Based in Dubai, open to relocate
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8 items-center hidden">
            <a
              href="/Resume_ClaireHan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-[2px] items-center text-[#8f959e] text-[20px] font-normal hover:text-[#0080ff] transition-colors"
            >
              Resume
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M5.83333 14.1667L14.1667 5.83333M14.1667 5.83333H5.83333M14.1667 5.83333V14.1667"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/claire-han-604194114/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-[2px] items-center text-[#8f959e] text-[20px] font-normal hover:text-[#0080ff] transition-colors"
            >
              Linkedin
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M5.83333 14.1667L14.1667 5.83333M14.1667 5.83333H5.83333M14.1667 5.83333V14.1667"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="mailto:clairehan4869@gmail.com"
              className="flex gap-[2px] items-center text-[#8f959e] text-[20px] font-normal hover:text-[#0080ff] transition-colors"
            >
              Email me
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M5.83333 14.1667L14.1667 5.83333M14.1667 5.83333H5.83333M14.1667 5.83333V14.1667"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Spacer — fixed 100px gap between content and button */}
        <div className="h-[100px] shrink-0" />

        {/* View Case Studies Button */}
        <button
          onClick={scrollToWork}
          className="font-normal text-[#0080ff] text-[16px] leading-[20px] border border-[#0080ff] rounded-full pl-4 pr-4 py-[8px] hover:bg-[#0080ff]/10 transition-colors flex items-center gap-1.5 self-center"
        >
          View Case Studies <span className="text-[18px]">↓</span>
        </button>
      </Container>

      {/* Selected Works */}
      <div id="selected-work" className="w-full py-[80px] scroll-mt-24">
        <Container className="flex flex-col gap-8">
          {/* Section Title */}
          <h2
            className="font-medium text-[#8f959e] text-[28px] leading-[1.25] w-full"
            style={serifFont}
          >
            Selected Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 w-full">
            {works.map((work, index) => (
              <ProjectCard key={work.slug} work={work} index={index} />
            ))}
          </div>
        </Container>
      </div>

      {/* Footer */}
      <Container className="flex flex-col gap-16 pb-[80px]">
        <div className="h-px bg-[#8f959e] w-full opacity-20" />
        <p className="text-[#8f959e] text-[14px] leading-[20px] font-normal">
          @ 2026 Claire Han. All rights reserved.
        </p>
      </Container>
    </div>
  );
}
