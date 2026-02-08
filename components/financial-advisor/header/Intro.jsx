import React from "react";
import Image from "next/image";

export default function Intro({ heroData }) {
  return (
    <div className="space-y-4">
      <p className="flex items-center gap-1 text-primary font-medium capitalize">
        <Image
          src="/assets/financial-advisor/images/section-title-decorative-line.png"
          aria-hidden
          alt=""
          width={5}
          height={20}
          priority
          className="w-[3px] h-auto object-cover"
        />
        {heroData.greeting}
      </p>
      <h1 className="font-semibold text-[clamp(3rem,5vw,4.1rem)] leading-none max-w-[12ch] capitalize">
        {heroData.name}
      </h1>
      <h2 className="text-primary font-medium text-2xl capitalize">
        {heroData.title}
      </h2>
    </div>
  );
}
