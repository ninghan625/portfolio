import styles from "./CaseStudyLayout.module.css";
import StickyTOC, { type TOCItem } from "./StickyTOC";

type CaseStudyLayoutProps = {
  tocItems: TOCItem[];
  children: React.ReactNode;
};

export default function CaseStudyLayout({ tocItems, children }: CaseStudyLayoutProps) {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <StickyTOC items={tocItems} />
      </aside>
      <article className={styles.article}>{children}</article>
    </div>
  );
}
