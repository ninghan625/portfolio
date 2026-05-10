import type { Metadata } from "next";
import Deck from "@/components/deck/Deck";
import deck from "@/data/decks/i18n";

export const metadata: Metadata = {
  title: "i18n Currency Toolkit — Deck | Claire Han",
};

export default function I18nDeckPage() {
  return <Deck deck={deck} />;
}
