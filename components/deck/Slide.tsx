import type { Slide as SlideData } from "@/data/decks/types";
import TitleSlide from "./slides/TitleSlide";
import SectionSlide from "./slides/SectionSlide";
import ContentSlide from "./slides/ContentSlide";
import ImageTextSlide from "./slides/ImageTextSlide";
import ImageFullSlide from "./slides/ImageFullSlide";
import QuoteSlide from "./slides/QuoteSlide";
import StatSlide from "./slides/StatSlide";
import ClosingSlide from "./slides/ClosingSlide";

// Discriminated-union dispatcher. Adding a new slide kind:
// 1. Extend the Slide union in data/decks/types.ts
// 2. Create components/deck/slides/<Kind>Slide.tsx
// 3. Add a case here

export default function Slide({ slide }: { slide: SlideData }) {
  switch (slide.kind) {
    case "title":      return <TitleSlide {...slide} />;
    case "section":    return <SectionSlide {...slide} />;
    case "content":    return <ContentSlide {...slide} />;
    case "image-text": return <ImageTextSlide {...slide} />;
    case "image-full": return <ImageFullSlide {...slide} />;
    case "quote":      return <QuoteSlide {...slide} />;
    case "stat":       return <StatSlide {...slide} />;
    case "closing":    return <ClosingSlide {...slide} />;
  }
}
