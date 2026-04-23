import styles from "./SectionHeadline.module.css";

export default function SectionHeadline({ children }: { children: React.ReactNode }) {
  return <h2 className={styles.headline}>{children}</h2>;
}
