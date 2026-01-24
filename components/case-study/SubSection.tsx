import { SubSectionData } from "./types";
import MediaBlock from "./MediaBlock";
import styles from "../../app/work/[slug]/page.module.css";

interface SubSectionProps {
  data: SubSectionData;
  sectionLabel?: string;
}

export default function SubSection({ data, sectionLabel }: SubSectionProps) {
  // Check if we're in the Solution section
  const isSolutionSection = sectionLabel === "Solution";
  
  // Check if heading starts with "Part " followed by a number
  const isPartHeading = /^Part \d+:/.test(data.heading);
  
  // Check if heading is "Solution 1/2/3:" (these should have 4px spacing)
  const isSolutionNumberHeading = /^Solution [123]:/.test(data.heading);
  
  // Check if heading starts with a number followed by a dot (e.g., "1. ", "2. ", "3. ")
  const isNumericListHeading = /^\d+\.\s/.test(data.heading);
  
  // Check if this specific heading should be styled as a callout
  const isCalloutHeading = data.heading === "Deliver a toolkit, not just formatting rules";
  
  return (
    <div className="flex w-full flex-col">
      <h3 className={`w-full font-semibold text-[16px] leading-[24px] text-[#272e3b] ${isCalloutHeading ? styles.calloutHeading : ''}`}>{data.heading}</h3>
      
      {/* Render content in order (text and media interleaved) */}
      {data.content && data.content.map((item, index) => {
        // Helper function to check if text is a heading-like paragraph (short, bold-only)
        const isHeadingLikeParagraph = (content: string) => {
          // Check if it's a short paragraph with only bold text (no other content)
          const stripped = content.replace(/<\/?strong>/g, '').trim();
          return content.includes('<strong>') && 
                 !content.includes('<ul>') && 
                 stripped.length < 50 && 
                 content === `<strong>${stripped}</strong>`;
        };
        
        // Determine spacing based on content type
        let marginClass = "mt-[4px]"; // Default for first item (heading to paragraph)
        
        if (index === 0) {
          // First item after heading: 
          // - 4px for "Part X" headings (even in Solution section)
          // - 4px for "Solution 1/2/3:" headings
          // - 4px for numbered list headings (e.g., "1. ", "2. ", "3. ")
          // - 16px in Solution section (for other headings)
          // - 4px elsewhere
          if (isPartHeading || isSolutionNumberHeading || isNumericListHeading) {
            marginClass = "mt-[4px]";
          } else {
            marginClass = isSolutionSection ? "mt-[16px]" : "mt-[4px]";
          }
        } else {
          const prevItem = data.content![index - 1];
          
          // Text after text: check if current item is heading-like paragraph
          if (item.type === "text" && prevItem.type === "text") {
            // If current paragraph is heading-like (e.g., "Design goal"), use 16px spacing
            if (isHeadingLikeParagraph(item.content)) {
              marginClass = "mt-[16px]";
            } else {
              marginClass = "mt-[4px]";
            }
          }
          // Media after text: 16px
          else if (item.type === "media" && prevItem.type === "text") {
            marginClass = "mt-[16px]";
          }
          // Text after media: 16px
          else if (item.type === "text" && prevItem.type === "media") {
            marginClass = "mt-[16px]";
          }
          // Media after media: 16px
          else if (item.type === "media" && prevItem.type === "media") {
            marginClass = "mt-[16px]";
          }
        }
        
        if (item.type === "text") {
          return (
            <div
              key={index}
              className={`w-full text-[16px] leading-[24px] [&_ul]:list-disc [&_ul]:pl-[20px] [&_ul]:space-y-[4px] [&_li]:text-[16px] [&_li]:leading-[24px] ${marginClass} ${styles.paragraphContent}`}
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          );
        } else if (item.type === "media") {
          return <MediaBlock key={index} media={item.data} className={marginClass} />;
        }
        return null;
      })}
    </div>
  );
}
