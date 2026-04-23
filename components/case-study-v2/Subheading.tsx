import styles from "./Subheading.module.css";

export default function Subheading({ children }: { children: React.ReactNode }) {
  return <h3 className={styles.sub}>{children}</h3>;
}
