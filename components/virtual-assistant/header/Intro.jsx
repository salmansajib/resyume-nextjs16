"use client";
import React from "react";
import { motion } from "motion/react";

export default function Intro({ heroData }) {
  return (
    <div className="space-y-12">
      {/* intro */}
      <div className="space-y-3">
        <p className="font-semibold text-primary capitalize relative">
          <span className="relative z-10 ml-4">{heroData.greeting}</span>
          <span className="absolute -top-2 left-0 size-8 rounded-full bg-background-neutral/50"></span>
          <span className="absolute -top-5 left-0 size-2.5 rounded-full bg-primary/50"></span>
        </p>
        <h1 className="font-semibold text-[clamp(3rem,5vw,4.5rem)] capitalize leading-none max-w-[12ch]">
          {heroData.name}
        </h1>
      </div>

      <div className="space-y-3">
        <h2 className="text-2xl font-medium text-text-secondary uppercase">
          {heroData.title}
        </h2>
        <p className="text-text-secondary max-w-[55ch]">
          {heroData.about.description}
        </p>
      </div>

      {/* download cv and portfolio link */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <motion.a
          whileHover={{
            scale: 1.03,
          }}
          href="/assets/cv/resume.pdf"
          download="resume.pdf"
          className="w-[190px] h-[50px] bg-primary text-background-primary flex items-center justify-center rounded-md uppercase font-medium"
        >
          download CV
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.03,
          }}
          href="#portfolio"
          className="w-[190px] h-[50px] bg-background-neutral text-background-primary flex items-center justify-center rounded-md uppercase font-medium"
        >
          Check Portfolio
        </motion.a>
      </div>
    </div>
  );
}
