import Link from "next/link";

interface CaseCTAProps {
  secondary: string;
  primary?: string;
  secondaryHref: string;
  primaryHref?: string;
}

export default function CaseCTA({
  secondary,
  primary,
  secondaryHref,
  primaryHref,
}: CaseCTAProps) {
  return (
    <div className="flex gap-[12px]">
      <Link
        href={secondaryHref}
        className="flex items-center justify-center rounded-[100px] border border-solid border-[#272e3b] px-[14px] py-[6px] text-[14px] leading-[24px] text-[#272e3b] transition-colors hover:bg-[#f5f5f5]"
      >
        {secondary}
      </Link>
      {primary && primaryHref && (
        <Link
          href={primaryHref}
          className="flex items-center justify-center rounded-[100px] bg-[#272e3b] px-[14px] py-[6px] text-[14px] leading-[24px] text-white transition-colors hover:bg-[#1f2329]"
        >
          {primary}
        </Link>
      )}
    </div>
  );
}
