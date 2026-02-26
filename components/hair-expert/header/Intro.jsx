"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export default function Intro({ data, className }) {
  const { hero } = data;

  return (
    <div className={cn("space-y-8", className)}>
      <p className="font-syne capitalize font-medium text-primary flex items-center gap-3">
        <span className="bg-primary w-[108px] h-px"></span>
        <span className="">{hero.greeting}</span>
      </p>
      <h1 className="capitalize font-syne text-[clamp(3rem,6vw,5rem)] font-bold leading-none max-w-[12ch]">
        {hero.name}
      </h1>
      <h2 className="text-[34px] font-semibold font-syne text-text-secondary capitalize">
        {hero.title}
      </h2>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <motion.a
          href="/assets/cv/resume.pdf"
          download="resume.pdf"
          whileHover={{
            scale: 1.05,
          }}
          className="flex items-center justify-center rounded-md gap-3 w-[205px] h-[55px] bg-primary text-background-primary font-syne font-medium text-lg"
        >
          Download CV
          <Image
            src="/assets/hair-expert/icons/download-cv-icon.svg"
            alt="download cv link"
            width={20}
            height={20}
            priority
            className="w-[18px] h-auto object-cover"
          />
        </motion.a>
        <motion.a
          href="#portfolio"
          whileHover={{
            scale: 1.05,
          }}
          className="flex items-center justify-center rounded-md gap-3 w-[205px] h-[55px] border border-text-primary text-text-primary font-syne font-medium text-lg"
        >
          Check Portfolio
          <Image
            src="/assets/hair-expert/icons/check-portfolio-icon.svg"
            alt="download cv link"
            width={20}
            height={20}
            priority
            className="w-[18px] h-auto object-cover"
          />
        </motion.a>
      </div>
    </div>
  );
}
