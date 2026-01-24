import { CalloutData } from "./types";
import { ReactNode } from "react";

interface CalloutProps {
  data?: CalloutData;
  title?: string;
  children?: ReactNode;
}

/**
 * Callout component with enforced typography:
 * - Title: font-weight 600 (semibold)
 * - Body: font-weight 400 (normal)
 * 
 * Can be used in two ways:
 * 1. With data prop (legacy/markdown): <Callout data={calloutData} />
 * 2. With title/children props (React): <Callout title="Title">Body content</Callout>
 */
export default function Callout({ data, title, children }: CalloutProps) {
  // Use explicit props if provided, otherwise fall back to data
  const displayTitle = title ?? (data?.heading !== "Note" ? data?.heading : undefined);
  const displayBody = children ?? data?.body;

  return (
    <div className="flex w-full flex-col gap-[4px] overflow-clip rounded-[8px] bg-[#edf6ff] px-[20px] py-[16px] text-[16px] leading-[24px] text-[#272e3b]">
      {displayTitle && (
        <p 
          className="w-full" 
          style={{ fontWeight: 600 }}
        >
          {displayTitle}
        </p>
      )}
      <div 
        className="w-full" 
        style={{ fontWeight: 400 }}
      >
        {typeof displayBody === 'string' ? <p>{displayBody}</p> : displayBody}
      </div>
      {data?.pdfUrl && (
        <a
          href={data.pdfUrl}
          target="_blank"
          rel="noreferrer"
          className="w-full text-[#0066cc] underline hover:text-[#0052a3] transition-colors"
        >
          Currency Amount Formatting Guidelines
        </a>
      )}
    </div>
  );
}
