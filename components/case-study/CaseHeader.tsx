import styles from "../../app/work/[slug]/page.module.css";

interface CaseHeaderProps {
  title: string;
  subtitle: string;
}

export default function CaseHeader({ title, subtitle }: CaseHeaderProps) {
  return (
    <div className={`flex w-full flex-col text-[#272e3b] ${subtitle ? 'gap-[16px]' : ''}`}>
      <h1 className="text-[22px] font-bold leading-normal">{title}</h1>
      {subtitle && <p className={`text-[16px] leading-[24px] ${styles.paragraphContent}`}>{subtitle}</p>}
    </div>
  );
}
