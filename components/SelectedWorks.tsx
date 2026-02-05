"use client";

import Link from "next/link";
import { useState } from "react";
import { works, type IconType } from "@/data/works";
import {
  ToolkitIcon,
  ProcurementIcon,
  TravelIcon,
  TaskIcon,
} from "@/components/WorkIcons";
import WorkPreview from "@/components/WorkPreview";

function getIconComponent(iconType: IconType) {
  const icons = {
    toolkit: ToolkitIcon,
    procurement: ProcurementIcon,
    travel: TravelIcon,
    task: TaskIcon,
  };
  return icons[iconType];
}

export default function SelectedWorks() {
  const [hoveredWork, setHoveredWork] = useState<{ image: string; objectPosition?: string } | null>(null);

  return (
    <section className="flex w-full flex-col gap-[20px]">
      <p className="font-['Heiti_SC','PingFang_SC','Helvetica',sans-serif] text-[15px] text-[#8f959e]">
        Selected Work
      </p>
      <div
        className="flex w-full flex-col gap-[24px]"
        onMouseLeave={() => setHoveredWork(null)}
      >
        {works.map((item) => {
          const IconComponent = getIconComponent(item.iconType);
          return (
            <Link
              key={item.title}
              href={`/work/${item.slug}`}
              className="group flex w-full items-center gap-[24px] cursor-pointer"
              onMouseEnter={() => setHoveredWork({ image: item.previewImage, objectPosition: item.previewObjectPosition })}
            >
              <div className="flex flex-1 flex-col gap-[4px]">
                <p className="font-normal text-[16px] text-[#00122E] group-hover:text-[#0080FF] transition-colors">
                  {item.title}
                </p>
                <p className="text-[14px] font-light leading-normal text-[#8f959e] group-hover:text-[#0080FF] transition-colors">
                  {item.subtitle}
                </p>
              </div>
              <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[8px] bg-[#f8f9fa] group-hover:bg-[#0080FF1A] transition-colors">
                <div className="text-[#8f959e] group-hover:text-[#0080FF] transition-colors">
                  <IconComponent />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      {/* Hide preview on mobile/touch devices */}
      <div className="work-preview-container">
        <WorkPreview 
          imageSrc={hoveredWork?.image || null} 
          objectPosition={hoveredWork?.objectPosition}
          isVisible={hoveredWork !== null} 
        />
      </div>
    </section>
  );
}
