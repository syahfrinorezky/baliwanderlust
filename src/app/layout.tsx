import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
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
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
