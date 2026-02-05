import React from "react";
import { cn } from "@/lib/utils";

export default function About({ heroData, className }) {
  const { about } = heroData;

  return (
    <div className={cn("space-y-7", className)}>
      <h2 className="leading-none font-poppins font-semibold text-[clamp(1.7rem,3vw,2.3rem)]">
        {heroData.title}
      </h2>
      <div className="space-y-3">
        <h2 className="leading-none font-poppins font-semibold uppercase text-xl text-text-secondary">
          {about.title}
        </h2>
        <p className="text-text-secondary max-w-[60ch] lg:max-w-full">
          {about.description}
        </p>
      </div>
      <a href="#" className="relative block mt-13 group max-w-max">
        <span className="relative z-10 font-poppins font-medium uppercase ml-10">
          Download CV
        </span>
        <span className="absolute top-1/2 -translate-y-1/2 left-0 size-21 rounded-full border border-background-neutral group-hover:border-primary/30 flex items-center justify-center p-2 transition-colors duration-150">
          <span className="size-15 bg-background-neutral rounded-full "></span>
        </span>
      </a>
    </div>
  );
}
