import type { StatSlide as StatSlideData } from "@/data/decks/types";
import styles from "./StatSlide.module.css";

export default function StatSlide({ title, items }: StatSlideData) {
  return (
    <div className={styles.root}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.grid}>
        {items.map((item, i) => (
          <div key={i} className={styles.item}>
            <p className={styles.label}>{item.label}</p>
            <p className={styles.value}>{item.value}</p>
            {item.note && <p className={styles.note}>{item.note}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
