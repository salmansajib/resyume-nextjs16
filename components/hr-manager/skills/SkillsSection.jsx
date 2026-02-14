"use client";
import React, { useRef } from "react";
import Skills from "./Skills";
import { useInView } from "motion/react";
import Image from "next/image";

export default function SkillsSection({ data }) {
  const { skills } = data;
  // Observe whole section
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section aria-labelledby="skills-heading" ref={sectionRef}>
      <div className="w-full max-w-4xl mx-auto px-4 py-20">
        {/* title and subtitle */}
        <div className="flex gap-3 flex-col items-center justify-center">
          <h2
            id="skills-heading"
            className="text-lg font-medium capitalize bg-linear-to-b from-gradient-primary-start via-gradient-primary-middle to-gradient-primary-end bg-clip-text text-transparent"
          >
            {skills.title}
          </h2>
          <h3 className="text-[clamp(2rem,3vw,2.9rem)] font-poppins font-medium text-center capitalize leading-none">
            {skills.subtitle}
          </h3>
        </div>

        {/* skills */}
        <div className="mt-10 space-y-10">
          {skills.items.map((item) => (
            <Skills key={item.id} item={item} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
