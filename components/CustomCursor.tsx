'use client';

import { useEffect, useRef, useState } from 'react';
import { useCursor } from "@/context/CursorContext";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { isProjectHovered } = useCursor();
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const positionRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    // Detect if device uses coarse pointer (touch device)
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    if (isCoarsePointer) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Update cursor position smoothly with requestAnimationFrame
    const updateCursorPosition = () => {
      if (cursor) {
        cursor.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px)`;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
      
      if (!isVisible) {
        setIsVisible(true);
      }

      // Cancel previous animation frame and request new one
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(updateCursorPosition);

      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      const clickableElement = target.closest(
        'a[href], button, [role="button"], input, select, textarea, [data-cursor="pointer"]'
      );

      setIsHovering(!!clickableElement);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isVisible]);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isHovering ? 'hovering' : ''} ${isVisible ? 'visible' : ''}`}
      aria-hidden="true"
    >
      {isProjectHovered && (
        <div className="absolute top-0 left-0 w-max flex items-center gap-2 bg-[#0080FF] text-white px-4 py-2 rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2">
          <img
            src="/icons/Eye.svg"
            alt=""
            className="w-5 h-5 brightness-0 invert"
          />
          <span className="text-[15px] font-medium leading-none whitespace-nowrap">
            View Project
          </span>
        </div>
      )}
    </div>
  );
}
