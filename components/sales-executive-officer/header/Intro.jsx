import React from "react";
import { cn } from "@/lib/utils";

export default function Intro({ heroData, className }) {
  const { greeting, name, title, about } = heroData;

  return (
    <div className={cn("space-y-15", className)}>
      <div className="relative">
        <div className="space-y-5 ml-5">
          <p className="text-lg font-semibold uppercase text-primary">
            {greeting}
          </p>
          <h1 className="text-[clamp(3.2rem,4vw,3.75rem)] font-bold capitalize leading-none max-w-[12ch]">
            {name}
          </h1>
          <h2 className="text-lg font-medium text-text-secondary capitalize leading-none">
            {title}
          </h2>
        </div>

        {/* left line */}
        <div className="absolute top-0 left-0 w-0.5 h-full bg-primary"></div>
      </div>

      <div className="">
        <p className="text-text-secondary max-w-[60ch]">{about.description}</p>
      </div>
    </div>
  );
}
