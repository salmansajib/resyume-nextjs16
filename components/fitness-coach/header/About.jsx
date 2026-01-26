import React from "react";
import { cn } from "@/lib/utils";

export default function About({ heroData, className }) {
  const { about } = heroData;

  return (
    <section
      aria-labelledby="about-heading"
      className={cn("bg-background-secondary", className)}
    >
      <div className="w-full max-w-7xl mx-auto px-4 py-10 space-y-7">
        <h2 className="text-2xl font-teko font-medium capitalize text-text-secondary">
          {about.title}
        </h2>
        <p className="text-text-secondary max-w-[55ch]  xl:max-w-[70ch]">
          {about.description}
        </p>
      </div>
    </section>
  );
}
