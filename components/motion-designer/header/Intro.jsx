import React from "react";
import { cn } from "@/lib/utils";

export default function Intro({ heroData, className }) {
  const { greeting, name } = heroData;

  return (
    <div className={cn("space-y-4", className)}>
      <p className="uppercase font-semibold bg-linear-to-r from-gradient-primary-start to-gradient-primary-end bg-clip-text text-transparent max-w-max">
        {greeting}
      </p>
      <h1 className="leading-none font-exo2 text-[clamp(4rem,5vw,5.93rem)] font-bold">
        {name}
      </h1>
    </div>
  );
}
