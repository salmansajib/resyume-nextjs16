"use client";
import React from "react";
import { motion } from "motion/react";
import AnimatedArrow from "@/components/AnimatedArrow";

export default function Intro({ heroData }) {
  /* ---------------- button variant  ---------------- */

  const buttonVariants = {
    initial: {},
    hover: {},
  };

  /* ------------------------------------------ */

  return (
    <div className="space-y-4">
      <p className="uppercase max-w-max bg-linear-to-br from-gradient-primary-start to-gradient-primary-end bg-clip-text text-transparent font-medium">
        {heroData.greeting}
      </p>
      <h1 className="font-poppins text-[clamp(3rem,5vw,4.1rem)] font-semibold max-w-[12ch] leading-none">
        {heroData.name}
      </h1>
      <motion.a
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        href="#"
        className="bg-linear-to-r from-gradient-primary-end to-gradient-primary-start flex gap-8 items-center justify-between pl-6 py-2 pr-2 rounded-full max-w-max text-lg font-poppins font-medium uppercase mt-20"
      >
        Download CV
        <AnimatedArrow
          size={47}
          bg=""
          className="rounded-full bg-transparent border border-border-primary"
        >
          <svg
            width="11"
            height="14"
            viewBox="0 0 11 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.66849 0V9.56315L9.34766 6.90598L11 8.54475L5.50004 14L0 8.54475L1.6525 6.90598L4.33159 9.56315V0H6.66849Z"
              fill="white"
            />
          </svg>
        </AnimatedArrow>
      </motion.a>
    </div>
  );
}
