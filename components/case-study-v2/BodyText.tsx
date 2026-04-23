import styles from "./BodyText.module.css";

export default function BodyText({ children }: { children: React.ReactNode }) {
  return <div className={styles.body}>{children}</div>;
}
