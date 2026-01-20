import { cn } from "@/lib/utils";
import React from "react";

export default function Intro({ heroData, className }) {
  const { greeting, name, title } = heroData;

  return (
    <div className={cn("space-y-3", className)}>
      <p className="text-lg font-medium text-text-secondary uppercase">
        {greeting}
      </p>
      <h1 className="font-chakraPetch text-[clamp(2.5rem,5vw,3.75rem)] font-bold leading-none max-w-[15ch] uppercase">
        {name}
      </h1>
      <h2 className="font-chakraPetch text-[34px] font-medium capitalize text-text-secondary">
        {title}
      </h2>
    </div>
  );
}
