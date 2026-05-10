import type { SectionSlide as SectionSlideData } from "@/data/decks/types";
import styles from "./SectionSlide.module.css";

export default function SectionSlide({ eyebrow, title }: SectionSlideData) {
  return (
    <div className={styles.root}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}
