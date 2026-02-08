import React from "react";

export default function About({ heroData }) {
  const { about } = heroData;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-medium capitalize leading-none text-text-secondary">
        {about.title}
      </h2>
      <p className="text-text-secondary max-w-[60ch] lg:max-w-full">
        {about.description}
      </p>
    </div>
  );
}
