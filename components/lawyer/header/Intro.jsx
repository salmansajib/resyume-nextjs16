import Image from "next/image";
import React from "react";

export default function Intro({ heroData }) {
  return (
    <div className="space-y-15">
      <div className="space-y-5">
        <p className="text-lg font-bold text-primary border-b border-primary max-w-max py-1 relative">
          <span>{heroData.greeting}</span>
          <span className="absolute size-2 rounded-full bg-primary -bottom-1 right-0"></span>
        </p>
        <h1 className="text-[clamp(3rem,6vw,3.2rem)] font-taviraj font-medium max-w-[10ch] leading-none">
          {heroData.name}
        </h1>
      </div>

      <div className="space-y-5">
        <p className="text-lg text-text-secondary max-w-[40ch]">
          {heroData.description}
        </p>
        <a
          href="/assets/cv/resume.pdf"
          download="resume.pdf"
          className="flex items-center gap-2 border-b border-primary max-w-max py-3 relative hover:scale-105 transition-all duration-150 ease-in-out"
        >
          <span className="uppercase text-lg text-primary">download cv</span>
          <span>
            <Image
              src="/assets/lawyer/icons/download-cv-icon.svg"
              alt="download cv icon"
              width={50}
              height={50}
              className="w-[33px] h-auto"
            />
          </span>
          <span className="size-2 rounded-full bg-primary absolute -bottom-1 right-0"></span>
        </a>
      </div>
    </div>
  );
}
