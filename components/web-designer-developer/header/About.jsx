import React from "react";

export default function About({ heroData }) {
  const { about } = heroData;
  const { title, description } = about;

  return (
    <div className="relative overflow-hidden bg-background-secondary/15 rounded-2xl ring-1 ring-border-primary backdrop-blur-[3px] px-8 py-10">
      <div className="relative z-10 space-y-7">
        <h2 className="text-2xl font-rajdhani font-semibold leading-none uppercase">
          {title}
        </h2>
        <p className="text-text-secondary max-w-[60ch]">{description}</p>
      </div>

      {/* gradient circle */}
      <div className="absolute top-30 left-1/2 -translate-x-1/2 size-120 rounded-full bg-radial-[circle_at_center] from-[#9E1586]/60 from-0% via-[#0E1724]/0 via-50% to-transparent to-70%"></div>
    </div>
  );
}
