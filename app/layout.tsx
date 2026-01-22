import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Claire Han - Portfolio",
  description: "Portfolio homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CustomCursor />
        <Header />
        <div className="pt-[72px]">{children}</div>
      </body>
    </html>
  );
}
