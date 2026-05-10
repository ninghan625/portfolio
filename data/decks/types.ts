// Deck data model — shared by all decks rendered at /work/[slug]/deck.
// Slide is a discriminated union; each `kind` maps to a dedicated component
// under components/deck/slides/. All slides may carry optional speaker notes.

export type ImageRef = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type StatItem = {
  value: string;
  label: string;
  note?: string;
};

type Base = { notes?: string };

export type TitleSlide = Base & {
  kind: "title";
  title: string;
  subtitle?: string;
  meta?: string;
};

export type SectionSlide = Base & {
  kind: "section";
  eyebrow: string;
  title: string;
};

export type ContentSlide = Base & {
  kind: "content";
  eyebrow?: string;
  title: string;
  body?: string[];
  bullets?: string[];
};

export type ImageTextSlide = Base & {
  kind: "image-text";
  title: string;
  body?: string[];
  image: ImageRef;
  layout: "image-left" | "image-right" | "image-below";
};

export type ImageFullSlide = Base & {
  kind: "image-full";
  image: ImageRef;
  caption?: string;
};

export type QuoteSlide = Base & {
  kind: "quote";
  text: string;
  attribution?: string;
};

export type StatSlide = Base & {
  kind: "stat";
  title?: string;
  items: StatItem[];
};

export type ClosingSlide = Base & {
  kind: "closing";
  title: string;
  body?: string;
};

export type Slide =
  | TitleSlide
  | SectionSlide
  | ContentSlide
  | ImageTextSlide
  | ImageFullSlide
  | QuoteSlide
  | StatSlide
  | ClosingSlide;

export type DeckMeta = {
  title: string;
  subtitle: string;
  durationMin: number;
  /** Path to the case study detail page; Esc returns here. */
  detailPath: string;
};

export type DeckData = {
  meta: DeckMeta;
  slides: Slide[];
};
