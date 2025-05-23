"use client";

import { ArrowDown } from "lucide-react";
import { Container } from "@/components/Container";
import Link from "next/link";
import { motion } from "framer-motion";
import { BackgroundBeams } from "../components/ui/background-beams";

export default function Hero({
  onWelcomeClick,
}: {
  onWelcomeClick: () => void;
}) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="h-screen w-full fixed top-0 left-0 bg-background flex items-center z-50 overflow-hidden"
    >
      {/* Background Beams Layer */}
      <div className="absolute inset-0 z-0">
        <BackgroundBeams />
      </div>

      {/* Background Image Layer */}
      <div
        id="hero"
        className="absolute inset-0 pointer-events-none hidden lg:block bg-[url('/assets/images/mugshot.png')] bg-no-repeat bg-right-bottom bg-contain dark:filter dark:grayscale z-10"
      />

      {/* Foreground Content */}
      <Container className="relative z-20">
        <div className="lg:w-[55%] w-[95%]">
          <div className="space-y-4">
            <p>Jonah Wambua</p>
            <h1 className="tracking-tight">Full-Stack Software Developer.</h1>
            <h2 className="tracking-tight">Graphic & UI/UX Designer.</h2>
            <h4>
              I develop web applications & digital designs, prioritizing user
              experience, functionality, responsiveness, and accessibility.
            </h4>
            <Link
              href="/"
              onClick={onWelcomeClick}
              className="flex items-center gap-2 pt-4 scroll-smooth"
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
    </motion.section>
  );
}
