"use client";
import React from "react";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import SkillProgressCard from "./SkillProgressCard";

export default function SkillsSection({ data }) {
  const { skills } = data;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section ref={ref} aria-labelledby="skills-heading" className="px-4 py-20">
      <div className="w-full max-w-7xl mx-auto">
        {/* title and subtitle */}
        <div className="space-y-4">
          <h2
            id="skills-heading"
            className="flex items-center justify-center gap-2 text-lg font-medium text-primary uppercase"
          >
            <Image
              src="/assets/doctor-3/icons/section-title-icon.svg"
              alt=""
              width={100}
              height={50}
              className="w-[94px] h-auto object-cover"
            />
            <span>{skills.title}</span>
          </h2>
          <h3 className="text-[clamp(2.2rem,4vw,2.5rem)] font-bold uppercase max-w-[20ch] mx-auto text-center leading-11">
            {skills.subtitle}
          </h3>
        </div>

        {/* skills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-7">
          {skills.items.map((item) => (
            <SkillProgressCard
              key={item.id}
              item={item}
              isInView={isInView}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
