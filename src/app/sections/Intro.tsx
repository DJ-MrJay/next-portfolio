import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";
import { section } from "framer-motion/client";
import { ContainerNarrow } from "@/components/ContainerNarrow";

export default function Intro() {
  return (
    <section className="h-[calc(100vh-var(--navbar-height))]" id="intro">
  <ContainerNarrow className="h-full">
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
