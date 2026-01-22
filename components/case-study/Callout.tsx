import { CalloutData } from "./types";

interface CalloutProps {
  data: CalloutData;
}

export default function Callout({ data }: CalloutProps) {
  return (
    <div className="flex w-full flex-col gap-[4px] overflow-clip rounded-[8px] bg-[#edf6ff] px-[20px] py-[16px] text-[16px] leading-[24px] text-[#272e3b]">
      <p className="w-full font-bold">{data.body}</p>
      {data.pdfUrl && (
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
