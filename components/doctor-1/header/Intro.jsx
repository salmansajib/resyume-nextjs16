import React from "react";

export default function Intro({ heroData }) {
  return (
    <div className="text-text-primary space-y-4">
      <p className="text-lg uppercase">{heroData.greeting}</p>
      <h1 className="font-ebGaramond font-medium text-[clamp(2.5rem,5vw,3.5rem)] leading-none max-w-[20ch] uppercase">
        {heroData.name}
      </h1>
      <h2 className="font-ebGaramond text-[32px] font-medium capitalize">
        {heroData.title}
      </h2>
      {/* about only shows when the display size is smaller */}
      <p className="sm:hidden">{heroData.description}</p>
    </div>
  );
}
