import styles from "./ProgressBar.module.css";

export default function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = total > 0 ? ((current + 1) / total) * 100 : 0;
  return (
    <div className={styles.root} aria-hidden>
      <div className={styles.track}>
        <div className={styles.fill} style={{ width: `${pct}%` }} />
      </div>
      <span className={styles.counter}>{current + 1} / {total}</span>
    </div>
  );
}
