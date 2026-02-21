import React from "react";

export default function Intro({ heroData }) {
  const { greeting, name, title } = heroData;

  return (
    <div className="space-y-5">
      <p className="font-rajdhani font-semibold uppercase">{greeting}</p>
      <h1 className="leading-none font-rajdhani text-[clamp(3.2rem,4vw,3.75rem)] font-bold max-w-[15ch]">
        {name}
      </h1>
      <h2 className="leading-none font-rajdhani text-2xl font-semibold text-text-secondary">
        {title}
      </h2>
    </div>
  );
}
