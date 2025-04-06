"use client";

import { useState } from "react";
import { Menu, Sun, Moon, Equal } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Container } from "@/components/Container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const links = [
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#articles", label: "Articles" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-background border-b py-6 z-40">
      <Container>
        <div className="flex justify-between items-center">
          <Link href="#hero" className="font-bold text-lg">
            <img src="/assets/jonahwambua.svg" alt="Logo" className="h-5" />
          </Link>

          <div className="flex gap-8 items-center">
            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:underline text-sm uppercase"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Link href="#" onClick={toggleTheme}>
                {theme === "dark" ? <Sun size={28} strokeWidth={1} /> : <Moon size={28} strokeWidth={1} />}
              </Link>

              {/* Mobile Menu Toggle */}
              <Link
                href="#"
                className="md:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Equal size={28} strokeWidth={1} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-background">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
