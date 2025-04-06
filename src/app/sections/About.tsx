import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";

export default function About() {
  return (
    <Container>
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-3xl text-center space-y-6">
          <h1>Hello.</h1>
          <p className="text-2xl">
            I'm a Kenyan creative designer and full-stack developer crafting
            elegant, high-performing web experiences since 2015. With a passion
            for design, clean code, captivating aesthetics, and continuous
            learning, I bring ideas to life through thoughtful, user-focused
            solutions. Music keeps me inspired.
          </p>
          <p className="text-2xl">Let’s build something amazing together!</p>
          <Link href="/about">
            <Button variant="default">Read More</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
