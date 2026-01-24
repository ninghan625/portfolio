import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "540px" | "868px";
}

/**
 * Shared content container that provides consistent width and horizontal padding
 * across all screen sizes. Used by both header and page content.
 * 
 * Width rules:
 * - Default max-width: 540px (home page)
 * - Case detail pages: 868px
 * - px-4 (16px) horizontal padding on mobile
 * - No padding on screens with sufficient width (content + 16px padding on each side)
 * - Centered with mx-auto
 */
export default function Container({ children, className = "", maxWidth = "540px" }: ContainerProps) {
  const maxWidthClass = maxWidth === "868px" ? "max-w-[868px]" : "max-w-[540px]";
  const breakpointClass = maxWidth === "868px" ? "min-[900px]:px-0" : "min-[572px]:px-0";
  
  return (
    <div className={`mx-auto w-full ${maxWidthClass} px-4 ${breakpointClass} ${className}`}>
      {children}
    </div>
  );
}
