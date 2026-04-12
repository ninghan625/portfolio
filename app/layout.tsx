import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";
import { CursorProvider } from "@/context/CursorContext";
import { ChatProvider } from "@/context/ChatContext";
import ChatSidebar from "@/components/ChatSidebar";
import MainContent from "@/components/MainContent";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-instrument-serif",
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
      <body className={`${inter.className} ${instrumentSerif.variable} antialiased`}>
        <CursorProvider>
          <ChatProvider>
            <CustomCursor />
            <Header />
            <MainContent>{children}</MainContent>
            <ChatSidebar />
          </ChatProvider>
        </CursorProvider>
      </body>
    </html>
  );
}
