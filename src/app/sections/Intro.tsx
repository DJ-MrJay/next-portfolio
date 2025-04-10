"use client";

import Link from "next/link";
import { ContainerNarrow } from "@/components/ContainerNarrow";
import { cn } from "@/lib/utils";

export default function Intro() {
  return (
    <section
      id="intro"
      className="h-[calc(100vh-var(--navbar-height))] relative overflow-hidden p-0"
    >
      {/* Dot Background Layer */}
      <div
        className={cn(
          "absolute inset-0 -z-10",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black -z-10" />

      {/* Content */}
      <ContainerNarrow className="h-full p-0">
        <div className="flex h-full items-center justify-center">
          <div className="mx-auto space-y-4">
            <h2>Hello!</h2>
            <p className="text-xl sm:text-2xl">
              I'm a Kenyan creative designer and full-stack developer crafting
              elegant, high-performing web experiences since 2015. With a
              passion for design, clean code, captivating aesthetics, and
              continuous learning, I bring ideas to life through thoughtful,
              user-focused solutions. Music keeps me inspired.
            </p>
            <p className="text-xl sm:text-2xl">
              Let’s build something amazing together!
            </p>
            <Link
              href="/about"
              className="btn-rounded mt-2 inline-flex items-center"
            >
              Read More
            </Link>
          </div>
        </div>
      </ContainerNarrow>
    </section>
  );
}
