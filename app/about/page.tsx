"use client";

import Image from "next/image";
import TextType from "@/components/TextType";

export default function AboutPage() {
  return (
    <div className="bg-white flex flex-col items-center w-full pt-[120px] pb-[80px] gap-[105px] px-4 md:px-20">
      <div className="flex flex-col gap-[60px] w-full max-w-[580px]">
        
        {/* Section 1: What I do off-screen */}
        <section className="flex flex-col">
          <div className="mb-[60px]">
            <TextType 
              as="h1" 
              text={["More About Me"]}
              className="font-bold text-[#1f2329] text-[32px] leading-[1.21]"
              typingSpeed={80}
              cursorCharacter="_"
              loop={false}
            />
          </div>
          
          <div className="flex flex-col gap-5">
            <h2 className="font-normal text-[#8F959E] text-[15px] leading-tight">
              What I do off-screen
            </h2>
            <div className="flex items-center gap-5">
              {/* Image Placeholder - Circle Mask */}
            <div className="relative shrink-0 size-[68px] overflow-hidden rounded-full bg-[#D9D9D9]">
               <Image src="/images/selfie.png" alt="Running" fill className="object-cover" />
            </div>
              <p className="text-[#1F2329] text-[16px] leading-[1.5]">
                When I’m offline, I love running 🏃🏻‍♀️‍. I recently completed my first Hong Kong half marathon—now I’m training for the next one.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: How I built this portfolio */}
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h2 className="font-normal text-[#8F959E] text-[15px] leading-tight">
              How I built this portfolio
            </h2>
            <p className="text-[#1F2329] text-[16px] leading-[1.5]">
              This site is a personal experiment in AI-assisted workflows. Here’s the tooling behind it—and what each part helped with:
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {/* Design & Prototype */}
            <div className="flex flex-col gap-[10px]">
              <h3 className="text-[#1F2329] font-semibold text-[16px] leading-[1.5]">
                🎨 Design & Prototype
              </h3>
              <div className="flex flex-col gap-4">
                <ToolItem 
                  title="Figma Make" 
                  description="Rapid prototypes to validate layout, hierarchy, and interaction direction."
                />
                <ToolItem 
                  title="Variant" 
                  description="Quickly generates alternative visual directions so I can compare options early and avoid locking in too soon."
                />
                <ToolItem 
                  title="React Bits" 
                  description="Lightweight motion/interaction exploration to test pacing and feel."
                />
              </div>
            </div>

            {/* Write */}
            <div className="flex flex-col gap-[10px]">
              <h3 className="text-[#1F2329] font-semibold text-[16px] leading-[1.5]">
                ✍️ Write
              </h3>
              <div className="flex flex-col gap-4">
                <ToolItem 
                  title="ChatGPT" 
                  description="As my “Cursor tutor” - helps me turn design intent into engineer-friendly prompts (clear steps, constraints, edge cases), so Cursor can execute more precisely with fewer back-and-forth edits."
                />
                <ToolItem 
                  title="Typeless" 
                  description="I use voice to capture richer context than typing and convert it into usable prompts faster."
                />
              </div>
            </div>

            {/* Build & Ship */}
            <div className="flex flex-col gap-[10px]">
              <h3 className="text-[#1F2329] font-semibold text-[16px] leading-[1.5]">
                🚀 Build & Ship
              </h3>
              <div className="flex flex-col gap-4">
                <ToolItem 
                  title="Cursor + Figma MCP" 
                  description="Translates design into code and supports iterative refinement to match the intended UI."
                />
                <ToolItem 
                  title="Github + Vercel" 
                  description="Version control and continuous deployment for fast iteration."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Where to find me */}
        <section className="flex flex-col gap-5">
          <h2 className="font-normal text-[#8F959E] text-[15px] leading-tight">
            Where to find me
          </h2>
          <div className="flex flex-col gap-2">
            <a 
              href="mailto:clairehan4869@gmail.com" 
              className="flex items-center gap-2 group transition-opacity hover:opacity-80"
            >
              <div className="size-4 relative">
                 <Image src="/icons/email.svg" alt="Email" fill className="object-contain" />
              </div>
              <span className="text-[#1F2329] text-[16px] leading-[1.5]">
                clairehan4869@gmail.com
              </span>
            </a>
            {/* Assuming LinkedIn is also wanted as per icon presence, though design data only explicitly showed Email text in the last node children? 
                Wait, the design node 394:1547 (Frame 19) had Frame 16 (LinkedIn?) and Frame 15 (Email). 
                Frame 16 has text "Claire Han" and an icon. Let's add LinkedIn. 
            */}
            <a 
              href="https://www.linkedin.com/in/claire-han-604194114/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 group transition-opacity hover:opacity-80"
            >
              <div className="size-4 relative">
                 <Image src="/icons/linkedin.svg" alt="LinkedIn" fill className="object-contain" />
              </div>
              <span className="text-[#1F2329] text-[16px] leading-[1.5]">
                Claire Han
              </span>
            </a>
          </div>
        </section>

      </div>

      {/* Footer */}
      <div className="flex flex-col gap-16 w-full max-w-[1280px]">
        <div className="h-px bg-[#8f959e] w-full opacity-20" />
        <p className="text-[#8f959e] text-[14px] leading-[20px] font-normal">
          @ 2026 Claire Han. All rights reserved.
        </p>
      </div>
    </div>
  );
}

function ToolItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="text-[#1F2329] text-[16px] leading-[1.5]">
      <span className="font-semibold">{title}</span>
      <span className="font-normal"> - {description}</span>
    </div>
  );
}
