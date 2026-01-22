interface CaseHeaderProps {
  title: string;
  subtitle: string;
}

export default function CaseHeader({ title, subtitle }: CaseHeaderProps) {
  return (
    <div className="flex w-full flex-col gap-[16px] text-[#272e3b]">
      <h1 className="text-[20px] font-bold leading-normal">{title}</h1>
      <p className="text-[16px] leading-[24px]" style={{ color: 'rgba(0, 0, 0, 1)' }}>{subtitle}</p>
    </div>
  );
}
