import Image from "next/image";
import type { ImageFullSlide as ImageFullSlideData } from "@/data/decks/types";
import styles from "./ImageFullSlide.module.css";

export default function ImageFullSlide({ image, caption }: ImageFullSlideData) {
  return (
    <div className={styles.root}>
      <div className={styles.imageWrap}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className={styles.image}
          unoptimized
        />
      </div>
      {caption && <p className={styles.caption}>{caption}</p>}
    </div>
  );
}
