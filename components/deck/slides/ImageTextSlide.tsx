import Image from "next/image";
import type { ImageTextSlide as ImageTextSlideData } from "@/data/decks/types";
import styles from "./ImageTextSlide.module.css";

export default function ImageTextSlide({ title, body, image, layout }: ImageTextSlideData) {
  const rootClass = [
    styles.root,
    layout === "image-left" && styles.imageLeft,
    layout === "image-right" && styles.imageRight,
    layout === "image-below" && styles.imageBelow,
  ].filter(Boolean).join(" ");

  return (
    <div className={rootClass}>
      <div className={styles.textCol}>
        <h2 className={styles.title}>{title}</h2>
        {body && body.length > 0 && (
          <div className={styles.body}>
            {body.map((p, i) => (
              <p key={i} className={styles.paragraph}>{p}</p>
            ))}
          </div>
        )}
      </div>
      <div className={styles.imageCol}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className={styles.image}
          unoptimized
        />
      </div>
    </div>
  );
}
