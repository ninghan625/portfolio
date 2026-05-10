import type { Metadata } from "next";
import Deck from "@/components/deck/Deck";
import deck from "@/data/decks/supplier";

export const metadata: Metadata = {
  title: "Supplier Portal — Deck | Claire Han",
};

export default function SupplierDeckPage() {
  return <Deck deck={deck} />;
}
