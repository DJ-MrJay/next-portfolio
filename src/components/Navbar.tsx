"use client";

import { useEffect, useState } from "react";
import { Menu, Sun, Moon, Equal, X } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Container } from "@/components/Container";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [active, setActive] = useState<string>("#about");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const links = [
    { href: "#intro", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#articles", label: "Articles" },
    { href: "#contact", label: "Contact" },
  ];

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < prevScrollY || currentScrollY < 10);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  // Update active link on hash change
  useEffect(() => {
    const updateHash = () => {
      setActive(window.location.hash);
    };
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : "-100%" }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full z-50"
      style={{
        backgroundColor: "var(--background-color)",
        height: "var(--navbar-height)",
        color: "var(--text-color)",
        borderBottom: `1px solid var(--shade-100)`,
      }}
    >
      <Container className="h-[var(--navbar-height)]">
        <div className="flex justify-between items-center h-full">
          <Link href="/hero">
            <img
              src="/assets/images/jonahwambua.svg"
              alt="Logo"
              className={`h-4 sm:h-4 md:h-5 ${
                theme === "dark" ? "filter invert" : ""
              }`}
            />
          </Link>

          <div className="flex gap-8 items-center">
            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`hover:underline text-sm uppercase tracking-wide transition-colors ${
                    active === link.href ? "text-primary font-medium" : ""
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <button onClick={toggleTheme} aria-label="Toggle Theme">
                {theme === "dark" ? (
                  <Sun size={24} strokeWidth={1} />
                ) : (
                  <Moon size={24} strokeWidth={1} />
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                {isOpen ? (
                  <X size={24} strokeWidth={1.5} />
                ) : (
                  <Equal size={24} strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden px-6 pt-4 pb-6 flex flex-col gap-4 bg-background"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm uppercase ${
                  active === link.href ? "text-primary font-medium" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
