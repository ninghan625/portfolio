import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";
import { CursorProvider } from "@/context/CursorContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Claire Han | Product Designer",
  description: "Portfolio homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <CursorProvider>
          <CustomCursor />
          <Header />
          <div className="pt-[72px]">{children}</div>
        </CursorProvider>
      </body>
    </html>
  );
}
