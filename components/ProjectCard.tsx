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
  year?: string;
}

interface ProjectCardProps {
  work: Work;
  // index kept for API compatibility even though layout no longer alternates
  index?: number;
}

export default function ProjectCard({ work }: ProjectCardProps) {
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
      className="group flex flex-col w-full transition-transform duration-300 hover:-translate-y-1"
      onMouseEnter={() => setIsProjectHovered(true)}
      onMouseLeave={() => setIsProjectHovered(false)}
    >
      {/* Cover image */}
      <div className="w-full aspect-[16/10] overflow-hidden rounded-[12px] bg-[#f5f5f5]">
        <img
          alt={work.title}
          className="object-cover size-full transition-transform duration-500 group-hover:scale-[1.03]"
          src={work.previewImage}
          style={work.previewObjectPosition ? { objectPosition: work.previewObjectPosition } : undefined}
        />
      </div>

      {/* Year | Company — tight line-box; divider is a short 10px bar */}
      {work.year && (
        <p className="mt-5 text-[#8f959e] text-[13px] leading-none tracking-[0.02em] flex items-center gap-[8px]">
          <span>{work.year}</span>
          <span className="inline-block w-px h-[10px] bg-current opacity-60" aria-hidden="true" />
          <span>{work.company}</span>
        </p>
      )}

      {/* Title — inherits Inter from global body */}
      <h3
        className="mt-2 text-[#1f2329] text-[24px] leading-[1.2] tracking-[-0.01em] font-semibold"
      >
        {work.title}
      </h3>

      {/* Tags */}
      <div className="mt-5 flex gap-2 flex-wrap">
        {work.tags.map((tag) => (
          <span
            key={tag}
            className="bg-[#f1f2f4] px-[14px] py-[6px] rounded-full text-[#4e5969] text-[14px] leading-[20px]"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
