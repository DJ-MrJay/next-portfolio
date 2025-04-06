"use client";

import { useState } from "react";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Work from "./sections/Work"
// Import other sections later

export default function Home() {
  const [showMain, setShowMain] = useState(false);

  const handleWelcomeClick = () => {
    setShowMain(true);
    const about = document.getElementById("about");
    if (about) about.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {!showMain && <Hero onWelcomeClick={handleWelcomeClick} />}
      {showMain && (
        <>
          <Navbar />
          <main className="mt-20 scroll-smooth">
            <section id="about">
              <About />
            </section>

            <section id="work">
              <Work />
            </section>
            {/* Add Work, Articles, Contact, Footer */}
          </main>
        </>
      )}
    </>
  );
}
