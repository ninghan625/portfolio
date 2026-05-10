import type { TitleSlide as TitleSlideData } from "@/data/decks/types";
import styles from "./TitleSlide.module.css";

export default function TitleSlide({ title, subtitle, meta }: TitleSlideData) {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      {meta && <p className={styles.meta}>{meta}</p>}
    </div>
  );
}
