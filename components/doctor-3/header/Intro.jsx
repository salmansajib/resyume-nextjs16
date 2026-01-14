import React from "react";
import SocialLinks from "./SocialLinks";

export default function Intro({ heroData }) {
  return (
    <div className="flex gap-5 flex-col items-center justify-center mt-4">
      <p className="text-lg font-semibold text-primary uppercase">
        {heroData.greeting}
      </p>
      <h1 className="text-[clamp(2.5rem,5vw,3.125rem)] font-bold max-w-[12ch] text-center leading-none uppercase">
        {heroData.name}
      </h1>
      {/* social links */}
      <SocialLinks />
    </div>
  );
}
