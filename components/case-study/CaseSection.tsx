import { SectionData } from "./types";
import SubSection from "./SubSection";
import Callout from "./Callout";

interface CaseSectionProps {
  data: SectionData;
}

// Convert label to stable ID (e.g., "Role&Scope" -> "role-scope")
function labelToId(label: string): string {
  return label
    .toLowerCase()
    .replace(/&/g, "-")
    .replace(/\s+/g, "-");
}

export default function CaseSection({ data }: CaseSectionProps) {
  return (
    <section
      id={labelToId(data.label)}
      className="flex w-full flex-col scroll-mt-[72px]"
    >
      <p className="font-['Heiti_SC','PingFang_SC','Helvetica',sans-serif] text-[15px] leading-normal text-[#86909c]">
        {data.label}
      </p>
      <div className="mt-[12px] flex w-full flex-col gap-[20px]">
        {data.subSections.map((subSection, index) => (
          <SubSection key={index} data={subSection} sectionLabel={data.label} />
        ))}
      </div>
      {data.callout && <div className="mt-[8px]"><Callout data={data.callout} /></div>}
    </section>
  );
}
