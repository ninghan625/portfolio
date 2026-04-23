import styles from "./Eyebrow.module.css";

export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className={styles.eyebrow}>{children}</span>;
}
