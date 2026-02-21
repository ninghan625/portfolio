"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import { useCursor } from "@/context/CursorContext";

interface Work {
  slug: string;
  title: string;
  subtitle: string;
  company: string;
  companyLogo: string;
  previewImage: string;
  tags: string[];
  previewObjectPosition?: string;
}

interface ProjectCardProps {
  work: Work;
  index: number;
}

export default function ProjectCard({ work, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;
  const { setIsProjectHovered } = useCursor();
  const cardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    return () => {
      setIsProjectHovered(false);
    };
  }, [setIsProjectHovered]);

  return (
    <Link
      ref={cardRef}
      href={`/work/${work.slug}`}
      className="relative group flex flex-col md:flex-row items-stretch bg-white rounded-xl shadow-[0px_1px_3px_0px_rgba(0,0,0,0.08)] overflow-hidden w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)]"
      onMouseEnter={() => setIsProjectHovered(true)}
      onMouseLeave={() => setIsProjectHovered(false)}
    >
      {isEven ? (
        <>
          {/* Image Left */}
          <div className="w-full md:w-1/2 aspect-[3/2] md:aspect-auto overflow-hidden">
            <img
              alt={work.title}
              className="object-cover size-full transition-transform duration-500 group-hover:scale-105"
              src={work.previewImage}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              style={work.previewObjectPosition ? { objectPosition: work.previewObjectPosition } : undefined}
            />
          </div>
          {/* Content Right */}
          <div className="w-full md:w-1/2 bg-[rgba(248,249,250,0.8)] p-8 md:p-12 flex flex-col justify-between">
            <div className="flex flex-col gap-5">
              <img
                alt={work.company}
                className={`w-auto object-contain object-left ${work.company === 'SmartX' ? 'h-3' : 'h-4'}`}
                src={work.companyLogo}
              />
              <h3 className="font-semibold text-[#1f2329] text-[24px] md:text-[28px] leading-[30px] md:leading-[34px] tracking-[-0.26px]">
                {work.title}
              </h3>
              <p className="font-normal text-[#6b7280] text-[17px] leading-[24px] md:leading-[27px]">
                {work.subtitle}
              </p>
            </div>
            <div className="flex gap-2 flex-wrap mt-6">
              {work.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[rgba(255,255,255,0.6)] border border-[rgba(39,46,59,0.1)] px-[13px] py-[7px] rounded-full text-[#272e3b] text-[13px] leading-[18px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Content Left */}
          <div className="w-full md:w-1/2 bg-[rgba(248,249,250,0.8)] p-8 md:p-12 flex flex-col justify-between order-2 md:order-1">
            <div className="flex flex-col gap-5">
              <img
                alt={work.company}
                className={`w-auto object-contain object-left ${work.company === 'SmartX' ? 'h-3' : 'h-4'}`}
                src={work.companyLogo}
              />
              <h3 className="font-semibold text-[#1f2329] text-[24px] md:text-[28px] leading-[30px] md:leading-[34px] tracking-[-0.26px]">
                {work.title}
              </h3>
              <p className="font-normal text-[#6b7280] text-[17px] leading-[24px] md:leading-[27px]">
                {work.subtitle}
              </p>
            </div>
            <div className="flex gap-2 flex-wrap mt-6">
              {work.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[rgba(255,255,255,0.6)] border border-[rgba(39,46,59,0.1)] px-[13px] py-[7px] rounded-full text-[#272e3b] text-[13px] leading-[18px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {/* Image Right */}
          <div className="w-full md:w-1/2 aspect-[3/2] md:aspect-auto overflow-hidden order-1 md:order-2">
            <img
              alt={work.title}
              className="object-cover size-full transition-transform duration-500 group-hover:scale-105"
              src={work.previewImage}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              style={work.previewObjectPosition ? { objectPosition: work.previewObjectPosition } : undefined}
            />
          </div>
        </>
      )}
    </Link>
  );
}
