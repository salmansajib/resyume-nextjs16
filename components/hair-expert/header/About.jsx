import React from "react";
import { cn } from "@/lib/utils";

export default function About({ data, className }) {
  return (
    <div
      className={cn(
        "py-10 lg:py-20 space-y-5 px-4 lg:pl-20 lg:pr-4",
        className,
      )}
    >
      <h2 className="text-lg font-syne font-medium text-primary capitalize flex items-center gap-3">
        <span className="w-[50px] h-px bg-primary"></span>
        About Me
      </h2>
      <h3 className="text-[clamp(2.5rem,4vw,3.125rem)] font-bold font-syne max-w-[14ch] leading-none">
        {data.hero.about.title}
      </h3>
      <p className="text-text-dimmed max-w-[90ch]">
        {data.hero.about.description}
      </p>
    </div>
  );
}
