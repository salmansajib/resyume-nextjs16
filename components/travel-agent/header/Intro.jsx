import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Intro({ heroData, className }) {
  return (
    <div className={cn("space-y-4", className)}>
      <p className="text-primary font-medium capitalize flex items-center gap-3">
        <Image
          src="/assets/travel-agent/icons/title-decorative-icon.svg"
          alt=""
          aria-hidden
          width={25}
          height={25}
          priority
          className="w-[20] h-auto object-cover"
        />
        {heroData.greeting}
      </p>
      <h1 className="font-poppins font-semibold text-[clamp(3rem,5vw,4.1rem)] max-w-[12ch] leading-none capitalize">
        {heroData.name}
      </h1>
    </div>
  );
}
