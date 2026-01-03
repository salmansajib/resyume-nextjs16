import React from "react";
import { cn } from "@/lib/utils";

export default function Intro({ heroData, className }) {
  return (
    <div className={cn("space-y-5", className)}>
      <p className="font-medium text-primary capitalize text-base">
        {heroData.greeting}
      </p>
      <h1 className="text-[clamp(3rem,6vw,5rem)] capitalize font-lora font-semibold leading-none">
        {heroData.name}
      </h1>
      <h2 className="text-3xl font-medium font-lora capitalize">
        {heroData.title}
      </h2>
      <p className="text-base text-text-secondary font-dmSans">
        {heroData.description}
      </p>
    </div>
  );
}
