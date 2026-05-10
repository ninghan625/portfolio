import type { ClosingSlide as ClosingSlideData } from "@/data/decks/types";
import styles from "./ClosingSlide.module.css";

export default function ClosingSlide({ title, body }: ClosingSlideData) {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{title}</h2>
      {body && <p className={styles.body}>{body}</p>}
    </div>
  );
}
