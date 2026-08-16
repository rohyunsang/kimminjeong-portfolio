import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MinJeong Kim — 3D Environment Artist",
    template: "%s — MinJeong Kim",
  },
  description:
    "Portfolio of MinJeong Kim, 3D environment artist. Game-ready environments, modular kits and props built in Unreal Engine.",
  openGraph: {
    title: "MinJeong Kim — 3D Environment Artist",
    description: "Game-ready environments, modular kits and props.",
    images: ["/works/forgotten-breath/cover.webp"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
