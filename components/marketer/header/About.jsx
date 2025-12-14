import React from "react";

export default function About({ heroData }) {
  return (
    <div>
      <h2 className="text-2xl font-normal">{heroData.about.title}</h2>
      <p className="text-xl font-normal font-rubik text-text-secondary">
        {heroData.about.description}
      </p>
    </div>
  );
}
