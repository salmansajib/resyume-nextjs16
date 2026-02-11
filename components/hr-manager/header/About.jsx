import React from "react";

export default function About({ heroData }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-medium font-poppins capitalize">
        {heroData.about.title}
      </h2>
      <h3 className="text-secondary text-lg max-w-[60ch]">
        {heroData.about.description}
      </h3>
    </div>
  );
}
