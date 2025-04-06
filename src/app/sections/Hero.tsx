"use client";

import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";

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
            <h1>Full-Stack Software Developer. </h1>
            <h2>Graphic & UI/UX Designer.</h2>

            <h4>
              I craft digital designs & web applications, prioritizing user
              experience, functionality, responsiveness, and accessibility.
            </h4>
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
