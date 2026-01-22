"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface WorkPreviewProps {
  imageSrc: string | null;
  isVisible: boolean;
  objectPosition?: string;
}

export default function WorkPreview({ imageSrc, isVisible, objectPosition }: WorkPreviewProps) {
  const previewRef = useRef<HTMLDivElement>(null);
  const cursorPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!isVisible) return;

    const updatePosition = () => {
      if (!previewRef.current) return;

      const preview = previewRef.current;
      const { x: mouseX, y: mouseY } = cursorPosRef.current;

      // Get preview dimensions
      const rect = preview.getBoundingClientRect();
      const previewWidth = rect.width;
      const previewHeight = rect.height;

      // Fixed gap between cursor and preview (always above)
      const gap = 40;

      // Core positioning rule:
      // Preview is ALWAYS above the cursor
      // - Top edge = mouseY - previewHeight - gap
      // - Horizontally centered on cursor
      let previewTop = mouseY - previewHeight - gap;
      let previewLeft = mouseX - previewWidth / 2;

      // Viewport boundaries with safe margins
      const viewportWidth = window.innerWidth;
      const safeMargin = 16;

      // Clamp horizontal position (left/right)
      if (previewLeft < safeMargin) {
        previewLeft = safeMargin;
      } else if (previewLeft + previewWidth > viewportWidth - safeMargin) {
        previewLeft = viewportWidth - previewWidth - safeMargin;
      }

      // Clamp vertical position (top)
      // If not enough space above cursor, clamp to top edge
      // Still keep it above cursor as much as possible
      if (previewTop < safeMargin) {
        previewTop = safeMargin;
      }

      // Apply transform for GPU-accelerated movement
      // Note: scale is applied via CSS classes, so only apply translate here
      preview.style.transform = `translate3d(${previewLeft}px, ${previewTop}px, 0)`;
    };

    const handleMouseMove = (e: MouseEvent) => {
      cursorPosRef.current = { x: e.clientX, y: e.clientY };

      // Cancel previous frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      // Schedule update with requestAnimationFrame for smoothness
      rafRef.current = requestAnimationFrame(updatePosition);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Initial position update
    updatePosition();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isVisible]);

  if (!imageSrc) return null;

  return (
    <div
      ref={previewRef}
      className="fixed left-0 top-0 z-50 pointer-events-none"
      style={{
        width: "280px",
        height: "160px",
      }}
    >
      <div
        className={`h-full w-full ${
          isVisible ? "work-preview-visible" : "work-preview-hidden"
        }`}
      >
        <div
          className="relative h-full w-full p-[8px] rounded-[10px] border-[0.5px] border-solid border-[#d6d6d6] bg-[rgba(255,255,255,0.9)]"
          style={{
            backdropFilter: "blur(0.5px)",
            WebkitBackdropFilter: "blur(0.5px)",
            boxShadow: "3px 3px 10px 0px #dee0e3",
          }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-[8px]">
            <Image
              src={imageSrc}
              alt="Work preview"
              fill
              className="object-cover"
              style={objectPosition ? { objectPosition } : undefined}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
