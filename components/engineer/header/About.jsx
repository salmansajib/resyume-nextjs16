import React from "react";
import { cn } from "@/lib/utils";

export default function About({ heroData, className }) {
  const { about } = heroData;

  return (
    <div className={cn("", className)}>
      <h2 className="text-[34px] font-medium font-chakraPetch capitalize">
        {about.title}
      </h2>
      <p className="text-text-secondary max-w-[60ch] lg:w-full">
        {about.description}
      </p>
    </div>
  );
}
