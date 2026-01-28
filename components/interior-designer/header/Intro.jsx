import React from "react";

export default function Intro({ data }) {
  const { hero } = data;

  return (
    <div className="space-y-5">
      <p className="capitalize font-medium">{hero.greeting}</p>
      <h1 className="font-playfairDisplay text-[60px] capitalize leading-none max-w-[12ch]">
        {hero.name}
      </h1>
      <h2 className="font-playfairDisplay font-medium text-[20px] uppercase text-primary">
        {hero.title}
      </h2>
      <p className="max-w-[60ch] text-text-secondary">
        {hero.about.description}
      </p>
    </div>
  );
}
