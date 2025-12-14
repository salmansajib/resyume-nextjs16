import React from "react";

export default function Intro({ heroData }) {
  return (
    <div className="space-y-3">
      <p className="text-2xl font-normal text-primary">{heroData.greeting}</p>
      <h1 className="text-[clamp(5rem,6vw,7.5rem)] font-medium text-text-primary max-w-[10ch] leading-none uppercase">
        {heroData.name}
      </h1>
    </div>
  );
}
