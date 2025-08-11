/** @format */

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { FaqChat } from "@/components/common/faq-chat";
import "../style/globals.css";

export const metadata: Metadata = {
  title: "Bali Wanderlust - Authentic Balinese Tour Experiences",
  description:
    "Discover curated Balinese journeys with Bali Wanderlust. We offer authentic cultural tours, luxury travel experiences, and hidden gems across Bali.",
  icons: "/icons/bw-default.svg",
  keywords: "Bali, Travel, Luxury, Experiences, Balinese, Wanderlust",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>
            {children}
            <FaqChat />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
