import React from "react";

export default function About({ heroData }) {
  return (
    <div className="space-y-10">
      <h2 className="text-[clamp(2.2rem,4vw,2.5rem)] font-bold capitalize max-w-[10ch] leading-none">
        {heroData.title}
      </h2>
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold text-primary uppercase">
          {heroData.about.title}
        </h2>
        <p className="text-lg text-text-secondary max-w-[70ch]">
          {heroData.about.description}
        </p>
      </div>
    </div>
  );
}
