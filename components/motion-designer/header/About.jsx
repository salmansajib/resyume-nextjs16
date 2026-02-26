import React from "react";
import { motion } from "motion/react";
import AnimatedArrow from "@/components/AnimatedArrow.jsx";
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
    <div
      className={cn(
        "w-full max-w-[800px] lg:max-w-[340px] bg-background-secondary p-8 space-y-7 rounded-2xl ring-1 ring-primary/30",
        className,
      )}
    >
      <h2 className="uppercase font-semibold bg-linear-to-r from-gradient-primary-start to-gradient-primary-end bg-clip-text text-transparent max-w-max leading-none">
        {title}
      </h2>
      <p className="text-text-secondary text-pretty">{description}</p>
      <motion.a
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        href="/assets/cv/resume.pdf"
        download="resume.pdf"
        className="bg-transparent ring-1 ring-primary/30 flex gap-8 items-center justify-between pl-6 py-2 pr-2 rounded-full max-w-max text-text-secondary text-lg font-medium uppercase"
      >
        Download CV
        <AnimatedArrow
          size={47}
          bg=""
          className="rounded-full bg-transparent ring-1 ring-primary/15"
        >
          <svg
            width={11}
            height={14}
            viewBox="0 0 11 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.66849 0V9.56315L9.34766 6.90598L11 8.54475L5.50004 14L0 8.54475L1.6525 6.90598L4.33159 9.56315V0H6.66849Z"
              fill="#C17CF0"
            />
          </svg>
        </AnimatedArrow>
      </motion.a>
    </div>
  );
}
