"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { DeckData } from "@/data/decks/types";
import Slide from "./Slide";
import ProgressBar from "./ProgressBar";
import styles from "./Deck.module.css";

/**
 * Deck shell — renders one slide at a time over a fixed full-viewport surface.
 *
 * Navigation:
 *   →  / Space / PageDown       next
 *   ←  / PageUp                  prev
 *   Home / End                   first / last
 *   Esc                          return to case study detail page
 *   F                            toggle fullscreen
 *   URL hash #N                  current slide index (1-indexed), kept in sync
 *   Click right/left screen half next / prev
 *
 * Speaker notes live on each slide's data but are intentionally NOT rendered
 * yet — presentation mode is a separate design decision.
 */
export default function Deck({ deck }: { deck: DeckData }) {
  const total = deck.slides.length;
  const router = useRouter();

  // Initialize from hash on mount so refresh keeps the slide.
  const [index, setIndex] = useState(0);

  // Lock body scroll while deck is mounted.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  useEffect(() => {
    const readHash = () => {
      const raw = window.location.hash.replace(/^#/, "");
      const n = parseInt(raw, 10);
      if (Number.isFinite(n) && n >= 1 && n <= total) {
        setIndex(n - 1);
      }
    };
    readHash();
    window.addEventListener("hashchange", readHash);
    return () => window.removeEventListener("hashchange", readHash);
  }, [total]);

  // Sync hash whenever index changes (without adding history entries).
  useEffect(() => {
    const next = `#${index + 1}`;
    if (window.location.hash !== next) {
      history.replaceState(null, "", next);
    }
  }, [index]);

  const go = useCallback((delta: number) => {
    setIndex((i) => Math.min(total - 1, Math.max(0, i + delta)));
  }, [total]);

  const goTo = useCallback((i: number) => {
    setIndex(Math.min(total - 1, Math.max(0, i)));
  }, [total]);

  const exitToDetail = useCallback(() => {
    router.push(deck.meta.detailPath);
  }, [router, deck.meta.detailPath]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case "PageDown":
        case " ":
          e.preventDefault();
          go(1);
          break;
        case "ArrowLeft":
        case "PageUp":
          e.preventDefault();
          go(-1);
          break;
        case "Home":
          e.preventDefault();
          goTo(0);
          break;
        case "End":
          e.preventDefault();
          goTo(total - 1);
          break;
        case "Escape":
          e.preventDefault();
          exitToDetail();
          break;
        case "f":
        case "F":
          e.preventDefault();
          toggleFullscreen();
          break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, goTo, total, exitToDetail, toggleFullscreen]);

  const slide = deck.slides[index];

  return (
    <div className={styles.root}>
      <ProgressBar current={index} total={total} />

      <div className={styles.stage}>
        <div className={styles.slide}>
          <Slide slide={slide} />
        </div>
      </div>

      {/* Invisible click zones for prev / next — sit below UI chrome via lower z-index. */}
      <button
        type="button"
        className={`${styles.zone} ${styles.zoneLeft}`}
        aria-label="Previous slide"
        onClick={() => go(-1)}
      />
      <button
        type="button"
        className={`${styles.zone} ${styles.zoneRight}`}
        aria-label="Next slide"
        onClick={() => go(1)}
      />
    </div>
  );
}
