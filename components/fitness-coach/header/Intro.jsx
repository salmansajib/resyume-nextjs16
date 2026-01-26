import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

export default function Intro({ heroData, className }) {
  return (
    <div className={cn("flex items-center gap-10", className)}>
      <div>
        <Image
          src="/assets/fitness-coach/images/decoretive-intro-image-left-line.png"
          alt=""
          width={20}
          height={350}
          priority
          className="w-2.5 h-[340px] object-cover"
        />
      </div>
      <div className="space-y-3">
        <p className="font-teko text-lg text-text-secondary uppercase">
          {heroData.greeting}
        </p>
        <h1 className="font-teko font-semibold text-[clamp(4rem,6vw,6.25rem)] capitalize max-w-[15ch] leading-none">
          {heroData.name}
        </h1>
        <h2 className="font-teko font-medium text-2xl text-text-secondary uppercase">
          {heroData.title}
        </h2>
      </div>
    </div>
  );
}
