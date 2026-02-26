import React from "react";

export default function Title({ heroData }) {
  return (
    <div className="space-y-10">
      <h2 className="text-[clamp(3rem,6vw,4rem)] font-medium uppercase leading-none">
        {heroData.title}
      </h2>
      <a
        href="/assets/cv/resume.pdf"
        download="resume.pdf"
        className="border border-primary/25 px-12 py-3 uppercase rounded-full bg-background-neutral/23 text-2xl font-medium shadow-[inset_1px_1px_16px_0px_rgba(169,241,113,0.2)] hover:border-primary transition-colors duration-150"
      >
        Download CV
      </a>
    </div>
  );
}
