import type { DeckData } from "./types";

// Skeleton deck — 5 placeholder slides to validate the shell end-to-end.
// Content phase will rewrite this file from Claire's presentation script.

const deck: DeckData = {
  meta: {
    title: "i18n Currency Toolkit",
    subtitle: "Lifting formatting quality across ByteDance's global products",
    durationMin: 20,
    detailPath: "/work/i18n-currency-formatting-toolkit",
  },
  slides: [
    {
      kind: "title",
      title: "i18n Currency Toolkit",
      subtitle: "From a single spec to a reusable design currency",
      meta: "Claire Han  ·  20 min",
    },
    {
      kind: "section",
      eyebrow: "01 — Context",
      title: "Global expansion outpaced the quality of our internationalization.",
    },
    {
      kind: "content",
      eyebrow: "Placeholder",
      title: "A slide of body text lives here.",
      body: [
        "Skeleton slide for end-to-end validation. Real content arrives in the next commit.",
      ],
    },
    {
      kind: "image-text",
      title: "Image + text layout sample",
      body: [
        "Left image, right copy. Placeholder.",
      ],
      image: {
        src: "/images/currency-new/1.png",
        alt: "Currency toolkit placeholder",
        width: 1600,
        height: 1000,
      },
      layout: "image-left",
    },
    {
      kind: "stat",
      title: "Impact (placeholder)",
      items: [
        { value: "4 areas  ·  1,900 terms", label: "Spec coverage" },
        { value: "10+ teams / 20+ products", label: "Skill adoption" },
        { value: "Douyin, Volcano Engine", label: "External reach" },
      ],
    },
    {
      kind: "closing",
      title: "Thank you",
      body: "Questions?",
    },
  ],
};

export default deck;
