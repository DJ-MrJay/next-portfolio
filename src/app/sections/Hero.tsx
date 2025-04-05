// app/sections/Hero.tsx
"use client";

import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";

export default function Hero({
  onWelcomeClick,
}: {
  onWelcomeClick: () => void;
}) {
  return (
    <section className="h-screen w-full fixed top-0 left-0 bg-background bg-no-repeat bg-right-bottom bg-contain flex items-center z-50 sm:bg-[url('/assets/mugshot.png')] sm:bg-right-bottom sm:bg-contain bg-none">
      <Container>
        <div className="lg:w-[55%] w-[80%]">
          <div className="space-y-2 lg:space-y-4">
            <p>Jonah Wambua</p>
            <h1 className="text-6xl font-bold leading-tight font-heading">
              Full-Stack Software Developer. <br />
              <span className="text-4xl">Graphic & UI/UX Designer.</span>
            </h1>
            <h1 className="text-2xl font-heading">
              I craft digital designs & web applications, prioritizing user
              experience, functionality, responsiveness, and accessibility.
            </h1>
            <Button
              onClick={onWelcomeClick}
              variant="outline"
              className="flex items-center gap-2 mt-6"
            >
              Welcome <ArrowDown />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
