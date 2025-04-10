import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Inter, Abril_Fatface } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { AuroraBackground } from "./components/ui/aurora-background";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-primary",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const abril = Abril_Fatface({
  subsets: ["latin"],
  variable: "--font-heading-alt",
  weight: "400",
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} ${abril.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
