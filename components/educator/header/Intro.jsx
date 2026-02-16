import React from "react";
import { cn } from "@/lib/utils";

export default function Intro({ heroData, className }) {
  const { greeting, name, title } = heroData;

  return (
    <div className={cn("space-y-7", className)}>
      <p className="text-primary uppercase">{greeting}</p>
      <h1 className="font-leagueSpartan font-semibold text-[clamp(3rem,5vw,4.1rem)] leading-none">
        {name}
      </h1>
      <h2 className="text-2xl text-text-secondary leading-none">{title}</h2>
    </div>
  );
}
