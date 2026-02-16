import React from "react";
import { motion } from "motion/react";
import AnimatedArrow from "@/components/AnimatedArrow";
import { cn } from "@/lib/utils";

export default function About({ heroData, className }) {
  const { about } = heroData;
  const { title, description } = about;

  /* ---------------- button variant  ---------------- */

  const buttonVariants = {
    initial: {},
    hover: {},
  };

  /* ------------------------------------------ */

  return (
    <div className={cn("space-y-7", className)}>
      <h2 className="text-2xl font-medium capitalize leading-none">{title}</h2>
      <p className="text-text-secondary max-w-[50ch] lg:max-w-full text-pretty">
        {description}
      </p>
      <motion.a
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        href="#"
        className="bg-primary flex gap-8 items-center justify-between pl-6 py-2 pr-2 rounded-full max-w-max text-lg font-poppins font-medium uppercase mt-10 lg:mt-15"
      >
        Download CV
        <AnimatedArrow
          size={47}
          bg=""
          className="rounded-full bg-transparent border border-text-primary"
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
