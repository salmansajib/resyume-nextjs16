"use client";
import React from "react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import InViewAnimator from "@/components/InViewAnimator";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function SkillsSection({ data }) {
  const { skills } = data;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <section
      ref={ref}
      aria-labelledby="skills-heading"
      className="px-4 py-20 bg-background-secondary"
    >
      <InViewAnimator
        variants={staggerContainer}
        className="w-full max-w-[1440px] mx-auto"
      >
        {/* title and subtitle */}
        <div className="space-y-4">
          <h2
            id="skills-heading"
            className="relative font-semibold capitalize max-w-max mx-auto"
          >
            <div className="relative z-10">{skills.title}</div>
            <div
              aria-hidden="true"
              className="bg-primary w-[37px] h-[33px] absolute top-1/2 -translate-y-1/2 -left-6"
            ></div>
          </h2>
          <h3 className="font-chakraPetch text-[40px] font-semibold uppercase max-w-max mx-auto text-center">
            {skills.subtitle}
          </h3>
        </div>

        {/* skills */}
        <ul className="flex gap-x-7 sm:gap-x-40 lg:gap-x-50 gap-y-5 items-start justify-center flex-wrap mt-15">
          {skills.items.map((skill) => (
            <motion.li
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
              }}
              key={skill.id}
              className=""
            >
              <article className="flex flex-col items-center gap-5">
                <div className="size-[146px] border border-text-secondary/30 rounded-full flex items-center justify-center">
                  <div className="size-[126px] bg-linear-to-br from-[#D45B2D]/50 via-[#D45B2D]/0 to-[#D45B2D]/50 rounded-full flex items-center justify-center text-4xl font-chakraPetch font-medium">
                    <AnimatedCounter
                      value={skill.proficiency}
                      isInView={isInView}
                      duration={1.5}
                      from={0}
                    />
                    %
                  </div>
                </div>
                <p className="text-lg font-medium capitalize text-text-secondary max-w-[12ch] mx-auto text-center">
                  {skill.name}
                </p>
              </article>
            </motion.li>
          ))}
        </ul>
      </InViewAnimator>
    </section>
  );
}
