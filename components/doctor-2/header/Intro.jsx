import React from "react";

export default function Intro({ heroData }) {
  return (
    <div className="space-y-10">
      <div className="relative max-w-max ml-1">
        <p className="relative z-10 text-lg font-semibold text-primary uppercase bg-background-neutral max-w-max px-3 py-1 rounded-xl">
          {heroData.greeting}
        </p>
        <span className="absolute inset-0 w-[50%] -left-1 bg-accent rounded-sm"></span>
      </div>
      <h1 className="text-[clamp(3.5rem,7vw,6.25rem)] font-ebGaramond font-medium leading-none capitalize max-w-[15ch]">
        {heroData.name}
      </h1>
      <h2 className="text-[34px] font-medium font-ebGaramond uppercase">
        {heroData.title}
      </h2>
    </div>
  );
}
