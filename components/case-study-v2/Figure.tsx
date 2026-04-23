"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Figure.module.css";

type FigureProps = {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  placeholder?: boolean;
  placeholderRatio?: string;
};

export default function Figure({
  src,
  alt,
  width = 1080,
  height = 608,
  caption,
  placeholder,
  placeholderRatio = "16/9",
}: FigureProps) {
  const [isOpen, setIsOpen] = useState(false);
  const canZoom = !placeholder && !!src;

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  return (
    <>
      <figure className={styles.figure}>
        {placeholder || !src ? (
          <div
            className={styles.placeholder}
            style={{ aspectRatio: placeholderRatio }}
          >
            <span className={styles.placeholderLabel}>[Image: {alt}]</span>
          </div>
        ) : (
          <div className={styles.imgWrap}>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className={styles.img}
              unoptimized
            />
            <button
              type="button"
              className={styles.expandBtn}
              onClick={() => setIsOpen(true)}
              aria-label={`Enlarge image: ${alt}`}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M2 6V2H6M14 6V2H10M2 10V14H6M14 10V14H10"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
        {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
      </figure>

      {isOpen && canZoom && (
        <div
          className={styles.lightbox}
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className={styles.closeBtn}
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            aria-label="Close"
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M4 4L16 16M16 4L4 16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div
            className={styles.lightboxImgWrap}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src!}
              alt={alt}
              width={width}
              height={height}
              className={styles.lightboxImg}
              unoptimized
            />
          </div>
        </div>
      )}
    </>
  );
}
