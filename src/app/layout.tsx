import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Bangers, Permanent_Marker, Share_Tech_Mono, Outfit } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});
const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
});
const mark = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mark",
});
const mono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "SPIDER-VERSE — College Fest + Spider-Hack",
  description:
    "An immersive Spider-Verse-inspired college fest. Events, Spider-Hack, and a campus that became a universe.",
  openGraph: {
    title: "SPIDER-VERSE",
    description: "A college fest happening inside another dimension.",
  },
};

export const viewport: Viewport = {
  themeColor: "#09080c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${bangers.variable} ${mark.variable} ${mono.variable} ${outfit.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
