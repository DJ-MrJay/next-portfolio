import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen px-6 py-20 max-w-3xl mx-auto space-y-6">
      <h1 className="text-5xl font-bold">More About Me</h1>
      <p className="text-lg leading-relaxed text-muted-foreground">
        I specialize in building user interfaces using modern web technologies
        such as React, Next.js, and Tailwind CSS. My work is guided by a deep
        respect for clean code, maintainability, accessibility, and exceptional
        design. <br />
        <br />
        When I’m not coding, I enjoy learning about design systems, reading
        about technology trends, and contributing to open-source projects. I'm
        currently exploring full-stack development and always looking for ways
        to grow professionally and personally.
      </p>
      <Link href="/">
        <Button variant="outline">← Back to Home</Button>
      </Link>
    </div>
  );
}
