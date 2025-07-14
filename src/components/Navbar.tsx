"use client";

import { useEffect, useState } from "react";
import { Menu, Sun, Moon, Equal, X } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Container } from "@/components/Container";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import SocialLinks from "./SocialLinks";

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

  const menuVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
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
            {/* Desktop Nav */}
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
                  <Sun
                    size={window.innerWidth < 768 ? 28 : 24}
                    strokeWidth={1.5}
                  />
                ) : (
                  <Moon
                    size={window.innerWidth < 768 ? 28 : 24}
                    strokeWidth={1.5}
                  />
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                {isOpen ? (
                  <X
                    size={window.innerWidth < 768 ? 30 : 24}
                    strokeWidth={1.5}
                  />
                ) : (
                  <Equal
                    size={window.innerWidth < 768 ? 30 : 24}
                    strokeWidth={1.5}
                  />
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
            initial="initial"
            animate="animate"
            exit="initial"
            variants={menuVariants}
            transition={{ duration: 0.2 }}
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
