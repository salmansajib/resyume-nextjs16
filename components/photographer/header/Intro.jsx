import Image from "next/image";
import React from "react";
import BracketedHeading from "../BracketedHeading";

export default function Intro({ heroData }) {
  return (
    <div className="mt-10">
      {/* greeting */}
      <BracketedHeading>{heroData.greeting}</BracketedHeading>

      {/* name */}
      <h1 className="text-6xl font-medium text-text-primary max-w-[10ch] leading-17 mb-4">
        {heroData.name}
      </h1>

      {/* title */}
      <h3 className="text-3xl text-text-secondary font-medium mb-7 max-w-max">
        {heroData.title}
      </h3>

      {/* cv download link */}
      <a href="#" className="relative">
        <div className="border border-primary rounded-full size-25 flex items-center justify-center">
          <Image
            src="/assets/photographer/icons/folder-icon.svg"
            alt="Folder Icon"
            width={50}
            height={50}
            className="w-7 h-auto object-cover"
          />
        </div>
        <span className="text-xl font-medium text-text-primary bg-background-primary py-1 absolute top-12 left-20">
          Download CV
        </span>
      </a>
    </div>
  );
}
