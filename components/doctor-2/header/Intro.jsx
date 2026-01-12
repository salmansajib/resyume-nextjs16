import React from "react";

export default function Intro({ heroData }) {
  return (
    <div className="space-y-10">
      <p className="relative z-10 text-lg font-semibold text-primary uppercase ml-1 px-3 py-1 rounded-xl max-w-max before:absolute before:inset-0 before:bg-background-neutral before:rounded-xl before:z-0 after:absolute after:inset-0 after:w-5 after:-left-1 after:bg-accent after:rounded-sm after:-z-10">
        <span className="relative z-10">{heroData.greeting}</span>
      </p>
      <h1 className="text-[clamp(3.5rem,7vw,6.25rem)] font-ebGaramond font-medium leading-none capitalize max-w-[15ch]">
        {heroData.name}
      </h1>
      <h2 className="text-[34px] font-medium font-ebGaramond uppercase">
        {heroData.title}
      </h2>
    </div>
  );
}
