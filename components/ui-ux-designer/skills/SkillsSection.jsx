"use client";

import React from "react";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function SkillsSection({ data }) {
  const { skills } = data;

  // Observe whole section
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      aria-labelledby="skills-heading"
      className="bg-background-primary px-4 py-32"
      ref={sectionRef}
    >
      <div className="w-full max-w-4xl mx-auto space-y-20">
        {/* title and subtitle */}
        <header className="space-y-3 text-center">
          <h2
            id="skills-heading"
            className="text-lg font-medium text-primary uppercase"
          >
            {skills.title}
          </h2>
          <h3 className="text-3xl md:text-4xl font-medium text-text-primary leading-11">
            {skills.subtitle}
          </h3>
        </header>

        {/* skills with proficiency percentage */}
        <dl className="space-y-10">
          {skills.entries.map((skill) => (
            <div key={skill.id} className="w-full flex items-center gap-8">
              <dt>
                <Image
                  width={100}
                  height={100}
                  className="w-[45px] h-auto"
                  src={skill.icon}
                  alt={skill.name}
                  // The alt text serves as the label for the visual icon
                />
              </dt>
              <dd className="relative flex-1">
                <div
                  className="w-full bg-text-dimmed h-2 flex-1 rounded-full"
                  // ACCESSIBILITY START: Define this div as a progress bar
                  role="progressbar"
                  aria-label={`${skill.name} proficiency`}
                  aria-valuenow={skill.proficiency}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  // ACCESSIBILITY END
                >
                  {/* proficiency percentage line */}
                  <motion.div
                    className="bg-primary h-2 rounded-full relative"
                    initial={{ width: "0%" }}
                    animate={{
                      width: isInView ? `${skill.proficiency}%` : "0%",
                    }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    // Hide the inner structural divs from screen readers to avoid confusion
                    aria-hidden="true"
                  >
                    <div className="size-7 rounded-full bg-primary absolute -right-1 top-1/2 -translate-y-1/2 flex items-center justify-center">
                      <div className="size-3 bg-background-primary rounded-full"></div>
                    </div>
                  </motion.div>
                </div>

                {/* percent value in number */}
                {/* We hide this from screen readers because the 'progressbar' role above 
                    already announces the value (e.g., "85%"). Reading this text would 
                    cause redundancy or noisy animation announcements. */}
                <div
                  className="absolute -top-10 right-0 text-text-dimmed flex"
                  aria-hidden="true"
                >
                  <AnimatedCounter
                    value={skill.proficiency}
                    isInView={isInView}
                    duration={2}
                    from={10}
                  />
                  %
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
