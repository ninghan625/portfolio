import type { ContentSlide as ContentSlideData } from "@/data/decks/types";
import styles from "./ContentSlide.module.css";

export default function ContentSlide({ eyebrow, title, body, bullets }: ContentSlideData) {
  return (
    <div className={styles.root}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2 className={styles.title}>{title}</h2>
      {body && body.length > 0 && (
        <div className={styles.body}>
          {body.map((p, i) => (
            <p key={i} className={styles.paragraph}>{p}</p>
          ))}
        </div>
      )}
      {bullets && bullets.length > 0 && (
        <ul className={styles.bullets}>
          {bullets.map((b, i) => (
            <li key={i} className={styles.bullet}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
