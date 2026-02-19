"use client";

import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { works } from "@/data/works";
import Highlight from "@/components/Highlight";
import TextType from "@/components/TextType";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/Container";

export default function Home() {
  const [isDocked, setIsDocked] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const scrollToWork = () => {
    const element = document.getElementById('selected-work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!titleRef.current) return;

      const rect = titleRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Fixed button bottom is at bottom-16 (64px).
      // Fixed button top = viewportHeight - 64 - 24 (line-height) = viewportHeight - 88.
      
      const dockThreshold = viewportHeight - 88;
      
      // Using a slightly looser threshold to ensure it snaps in time
      setIsDocked(rect.top <= dockThreshold + 2);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white flex flex-col items-center w-full">
      {/* Hero Section */}
      <Container className="flex flex-col gap-8 h-[100svh] min-h-[700px] max-h-[1000px] pt-[180px] pb-[10vh]">
        <div className="flex flex-col gap-8 w-full max-w-[1280px]">
          {/* Avatar */}
          <div className="relative rounded-full shrink-0 size-20">
            <img
              alt="Claire Han"
              className="rounded-full object-cover size-full"
              src="/images/IMG_6527 1.png"
            />
          </div>

          {/* Name */}
          <TextType
            as="h1"
            text={[
              "Hey, I'm Claire!",
              "I design B2B & enterprise products.",
              "Let's connect!"
            ]}
            className="font-bold text-[#1f2329] text-[32px] leading-[1.21]"
            typingSpeed={80}
            deletingSpeed={50}
            pauseDuration={2000}
            loop={true}
            cursorCharacter="_"
          />

          {/* Introduction */}
          <div className="flex flex-col gap-5 text-[19px] leading-[28px] w-full">
            <p className="text-[#1f2329]">
              A product designer focused on <Highlight>B2B systems for the past 6 years</Highlight>. I simplify complex workflows into scalable experiences.
            </p>
            <p className="text-[#1f2329]">
              My experience spans enterprise products and startup environments—at ByteDance, I design <Highlight>internal enterprise workflows</Highlight> across web and mobile; at SmartX, I helped build a <Highlight>data center infrastructure management</Highlight> platform.
            </p>
            <p className="text-[#1f2329]">
              I also <Highlight>leverage AI tools</Highlight> to speed up synthesis, documentation, and early prototyping—so teams can align faster and iterate with higher quality.
            </p>
            <p className="text-[#8f959e] text-[18px] leading-[24px]">
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
                <path d="M5.83333 14.1667L14.1667 5.83333M14.1667 5.83333H5.83333M14.1667 5.83333V14.1667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
                <path d="M5.83333 14.1667L14.1667 5.83333M14.1667 5.83333H5.83333M14.1667 5.83333V14.1667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="mailto:clairehan4869@gmail.com"
              className="flex gap-[2px] items-center text-[#8f959e] text-[20px] font-normal hover:text-[#0080ff] transition-colors"
            >
              Email me
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5.83333 14.1667L14.1667 5.83333M14.1667 5.83333H5.83333M14.1667 5.83333V14.1667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </Container>

      {/* Floating Button - Dockable State A */}
      <div 
        className={`fixed inset-x-0 bottom-16 z-50 pointer-events-none transition-opacity duration-100 ease-out will-change-[opacity,transform] transform-gpu [backface-visibility:hidden] ${isDocked ? 'opacity-0' : 'opacity-100'}`}
      >
        <Container className="pointer-events-none">
          <button
            onClick={scrollToWork}
            className={`pointer-events-auto font-normal text-[#8f959e] text-[18px] leading-[24px] hover:text-[#0080ff] transition-colors flex items-center gap-2 ${isDocked ? '!pointer-events-none' : ''}`}
          >
            Selected Work <span className="text-lg">↓</span>
          </button>
        </Container>
      </div>

      {/* Selected Works */}
      <div id="selected-work" className="w-full py-[80px] scroll-mt-24">
        <Container className="flex flex-col gap-8">
          {/* Section Title - Dockable State B */}
          <h2 
            ref={titleRef} 
            className={`font-normal text-[#8f959e] text-[18px] leading-[24px] w-full flex items-center gap-2 transition-opacity duration-100 ease-out will-change-[opacity] ${isDocked ? 'opacity-100' : 'opacity-0'}`}
          >
            Selected Work <span className="text-lg">↓</span>
          </h2>

          <div className="flex flex-col gap-[60px] w-full">
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
