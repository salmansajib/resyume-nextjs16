import React from "react";
import Image from "next/image";
import BracketedHeading from "../BracketedHeading";

export default function About() {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:items-stretch lg:justify-between gap-10 lg:gap-30 border-3 border-primary/20 px-5 lg:px-15 py-5 lg:py-20">
      {/* about me */}
      <div className="space-y-3">
        <div className="relative">
          <h2 className="text-[50px] md:text-[80px] font-medium text-text-dimmed">
            ABOUT
          </h2>
          <div className="absolute top-7 md:top-13 left-2">
            <BracketedHeading>ABOUT ME</BracketedHeading>
          </div>
        </div>
        <h3 className="text-[30px] md:text-[40px] font-medium text-text-primary">
          The Art Behind My Photography
        </h3>
        <p className="text-lg font-normal text-text-secondary max-w-[62ch]">
          I am a passionate photographer specializing in portrait I capture
          moments that tell compelling stories with creativity and precision.
          Through my lens, I transform ordinary scenes into unforgettable
          memories.
        </p>
        <a
          href="#portfolio"
          className="text-xl font-medium bg-linear-to-r from-gradient-primary-start to-gradient-primary-end text-black px-6 py-2.5 inline-block mt-5 hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 ease-in-out"
        >
          Check my Portfolio
        </a>
      </div>

      {/* years of experience */}
      <div className="lg:shrink-0 lg:w-[418px] w-full relative">
        <div className="bg-linear-to-br from-gradient-primary-start to-gradient-primary-end lg:h-full flex flex-col items-center justify-center py-20">
          <p className="text-[200px] text-text-primary font-medium leading-50">
            5+
          </p>
          <p className="text-[21px] font-semibold text-text-primary">
            YEARS OF EXPERIENCE
          </p>
        </div>
        <div
          aria-hidden="true"
          className="hidden lg:block absolute top-80 -left-22"
        >
          <Image
            src="/assets/photographer/icons/decorative-rectangle.svg"
            alt="dot rectangle for decoration"
            width={200}
            height={200}
            className="w-44 h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
