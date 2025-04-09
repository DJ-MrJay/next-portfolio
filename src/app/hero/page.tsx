"use client";

import { ArrowDown } from "lucide-react";
import { Container } from "@/components/Container";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero({
  onWelcomeClick,
}: {
  onWelcomeClick: () => void;
}) {
  return (
    <section className="h-screen w-full fixed top-0 left-0 bg-background flex items-center z-50 overflow-hidden">
      {/* Background Image Layer */}
      <div
        id="hero"
        className="absolute inset-0 pointer-events-none sm:bg-[url('/assets/images/mugshot.png')] 
                   sm:bg-no-repeat sm:bg-right-bottom sm:bg-contain
                   dark:filter dark:grayscale"
      />

      {/* Foreground Content */}
      <Container className="relative z-10">
        <div className="lg:w-[55%] w-[85%]">
          <div className="space-y-2 lg:space-y-4">
            <p>Jonah Wambua</p>
            <h1>Full-Stack Software Developer. </h1>
            <h2>Graphic & UI/UX Designer.</h2>

            <h4>
              I craft digital designs & web applications, prioritizing user
              experience, functionality, responsiveness, and accessibility.
            </h4>
            <Link
              href="/"
              onClick={onWelcomeClick}
              className="flex items-center gap-2 mt-6 scroll-smooth"
            >
              Welcome{" "}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: "easeInOut",
                }}
              >
                <ArrowDown />
              </motion.div>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
