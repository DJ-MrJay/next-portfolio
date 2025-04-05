import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});
const playfair = Playfair_Display({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal Portfolio - Jonah Wambua",
  description:
    "Responsive personal portfolio website showcasing my projects, skills, and experience. Built with Next.js, Tailwind, and shadcn",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
