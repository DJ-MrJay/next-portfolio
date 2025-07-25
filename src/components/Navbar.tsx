"use client";

import { useEffect, useState, useCallback } from "react";
import { Menu, Sun, Moon, Equal, X } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Container } from "@/components/Container";
import { motion, AnimatePresence } from "framer-motion";
import SocialLinks from "./SocialLinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [active, setActive] = useState<string>("#about");
  const [isMobile, setIsMobile] = useState(false);

  const links = [
    { href: "/#intro", label: "About" },
    { href: "/#work", label: "Work" },
    { href: "/#articles", label: "Articles" },
    { href: "/#contact", label: "Contact" },
  ];

  // Update screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll direction detection
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setIsVisible(currentScrollY < prevScrollY || currentScrollY < 10);
    setPrevScrollY(currentScrollY);
  }, [prevScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Update active link on hash change
  useEffect(() => {
    const updateHash = () => setActive(window.location.hash);
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  const menuVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

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
        borderBottom: `2px solid var(--shade-100)`,
      }}
    >
      <Container className="h-full">
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
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm uppercase tracking-wide transition-colors ${
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
                  <Sun size={isMobile ? 28 : 24} strokeWidth={1.5} />
                ) : (
                  <Moon size={isMobile ? 28 : 24} strokeWidth={1.5} />
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? (
                  <X size={isMobile ? 30 : 24} strokeWidth={1.5} />
                ) : (
                  <Equal size={isMobile ? 30 : 24} strokeWidth={1.5} />
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
            id="mobile-menu"
            key="mobile-menu"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={menuVariants}
            className="md:hidden pt-16 pb-16 m-5 rounded-xl flex flex-col gap-4 items-center"
            style={{
              backgroundColor: "var(--background-color-transparent)",
              color: "var(--text-color)",
            }}
          >
            {links.map((link) => (
              <motion.a
                key={link.href}
                variants={itemVariants}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-xl tracking-wide uppercase ${
                  active === link.href ? "text-primary font-medium" : ""
                }`}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.div variants={itemVariants} className="mt-10">
              <SocialLinks />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
