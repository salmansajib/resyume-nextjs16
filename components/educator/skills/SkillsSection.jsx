"use client";
import React from "react";
import Image from "next/image";
import SkillCard from "./SkillCard";
import InViewAnimator from "@/components/InViewAnimator";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function SkillsSection({ data }) {
  const { skills } = data;

  return (
    <section
      aria-labelledby="skills-heading"
      className="px-4 py-20 bg-[url(/assets/educator/images/bg-img-skills-wave.svg)] bg-cover bg-no-repeat relative"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* title and subtitle */}
        <div className="flex flex-col gap-5 items-center justify-center">
          <h2 id="skills-heading" className="uppercase text-text-secondary">
            {skills.title}
          </h2>
          <h3 className="leading-none text-[clamp(2rem,4vw,3rem)] font-leagueSpartan font-medium text-center max-w-[20ch]">
            {skills.subtitle}
          </h3>
        </div>

        {/* skills */}
        <InViewAnimator
          variants={staggerContainer}
          className="flex items-start justify-center flex-wrap gap-8 mt-10"
        >
          {skills.items.map((item) => (
            <SkillCard key={item.id} item={item} fadeInUp={fadeInUp} />
          ))}
        </InViewAnimator>
      </div>
    </section>
  );
}
