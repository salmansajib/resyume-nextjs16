"use client";
import React from "react";
import { useRef } from "react";
import Skill from "./Skill";
import Image from "next/image";
import { useInView } from "motion/react";

export default function SkillsSection({ data }) {
  const { skills } = data;

  // Observe whole section
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      aria-labelledby="skills-heading"
      ref={sectionRef}
      className="bg-background-secondary px-4 py-20 overflow-hidden relative"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-15 items-center justify-items-center">
        <div className="relative z-30 space-y-10 order-2 lg:order-1">
          {/* title and subtitle */}
          <header className="space-y-4">
            <h2
              id="skills-heading"
              className="text-2xl font-normal text-primary leading-none"
            >
              {skills.title}
            </h2>
            <h3 className="text-[clamp(3rem,6vw,4rem)] font-medium leading-none max-w-[30ch]">
              {skills.subtitle}
            </h3>
          </header>
          {/* skills */}
          <div className="space-y-12">
            <div className="space-y-6">
              {skills.entries.map((item) => (
                <Skill key={item.id} item={item} isInView={isInView} />
              ))}
            </div>
            <a
              href="#portfolio"
              className="uppercase border border-primary/25 px-12 py-3 rounded-full bg-background-neutral/23 text-2xl font-medium shadow-[inset_1px_1px_16px_0px_rgba(169,241,113,0.3)] hover:border-primary transition-colors duration-150"
            >
              check my portfolio
            </a>
          </div>
        </div>
        {/* hero image */}
        <div className="order-1 lg:order-2">
          <Image
            src="/assets/marketer/images/skill-hero-image.png"
            alt=""
            width={800}
            height={800}
            className="w-[640px] h-auto object-cover"
          />
        </div>
      </div>

      {/* gradient background circles */}
      <div className="absolute -top-[50%] -left-30 size-[900px] bg-radial-[circle_at_center] from-[#3A8300]/40 from-0% via-[#5D982F]/5 via-55% to-transparent to-70% rounded-full"></div>
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-[50%] size-[900px] bg-radial-[circle_at_center] from-[#975219]/40 from-0% via-[#995E2E]/5 via-55% to-transparent to-70% rounded-full"></div>
      <div className="absolute -right-[20%] -bottom-60 size-[900px] bg-radial-[circle_at_center] from-[#12AFBF]/30 from-0% via-[#328F99]/5 via-55% to-transparent to-70% rounded-full"></div>
    </section>
  );
}
