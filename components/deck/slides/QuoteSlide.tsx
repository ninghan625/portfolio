import type { QuoteSlide as QuoteSlideData } from "@/data/decks/types";
import styles from "./QuoteSlide.module.css";

export default function QuoteSlide({ text, attribution }: QuoteSlideData) {
  return (
    <div className={styles.root}>
      <blockquote className={styles.quote}>
        <p className={styles.text}>&ldquo;{text}&rdquo;</p>
        {attribution && <footer className={styles.attribution}>{attribution}</footer>}
      </blockquote>
    </div>
  );
}
