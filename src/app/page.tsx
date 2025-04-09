"use client";

import Hero from "./hero/page";
import Navbar from "@/components/Navbar";
import Intro from "./sections/Intro";
import Work from "./sections/Work";
import Articles from "./sections/Articles";
import Footer from "@/components/Footer";
import Contact from "./sections/Contact";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [showMain, setShowMain] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleWelcomeClick = () => {
    setIsFadingOut(true); // Start fading out the Hero
  };

  const handleHeroExitComplete = () => {
    setShowMain(true); // Show the main content

    // Scroll to #intro after main content is shown
    setTimeout(() => {
      const intro = document.getElementById("intro");
      if (intro) intro.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  return (
    <>
      <AnimatePresence>
        {!showMain && !isFadingOut && (
          <motion.div
            key="hero"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            onAnimationComplete={handleHeroExitComplete}
          >
            <Hero onWelcomeClick={handleWelcomeClick} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMain && (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Navbar />
            <main className="mt-20 scroll-smooth">
              <section id="intro">
                <Intro />
              </section>

              <section id="work">
                <Work />
              </section>

              <section id="articles">
                <Articles />
              </section>

              <section id="contact">
                <Contact />
              </section>
            </main>
            {/* <Footer /> */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
