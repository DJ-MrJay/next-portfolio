"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

type WorkItemProps = {
  title: string;
  description: React.ReactNode;
  image: string;
  tags: string[];
  codeUrl?: string;
  liveUrl?: string;
  reverse?: boolean;
};

export default function WorkItem({
  title,
  description,
  image,
  tags,
  codeUrl,
  liveUrl,
  reverse = false,
}: WorkItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } gap-12 my-12`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 group overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          width={1200}
          height={800}
          className="w-full h-auto rounded-xl object-cover object-top transition duration-1000 filter brightness-[45%] grayscale group-hover:brightness-100 group-hover:grayscale-0 cursor-pointer"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h3>{title}</h3>
        <p>{description}</p>

        <ul className="flex flex-wrap items-center gap-2 uppercase tracking-widest text-gray-700 mt-4">
          {tags.map((tag, index) => (
            <li key={tag} className="flex items-center gap-2 text-xs">
              {index !== 0 && <span className="text-xs">&#x2022;</span>}
              {tag}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        {(codeUrl || liveUrl) && (
          <div className="mt-6 flex flex-wrap gap-4">
            {codeUrl && (
              <a
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-800 dark:bg-gray-200 dark:text-black rounded-lg hover:bg-gray-700 dark:hover:bg-white transition"
              >
                <Github size={16} />
                Code
              </a>
            )}

            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 dark:bg-blue-400 dark:text-black rounded-lg hover:bg-blue-700 dark:hover:bg-white transition"
              >
                <ExternalLink size={16} />
                View Live
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
