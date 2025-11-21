"use client";

import React from "react";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import uiuxdesignerData from "@/data/ui-ux-designer.json";
import Image from "next/image";

export default function SkillsSection() {
  const { skills } = uiuxdesignerData;

  // Observe whole section
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      aria-labelledby="skills-heading"
      className="bg-background-primary px-4 py-32"
      ref={sectionRef}
    >
      <div
        id="skills-heading"
        className="w-full max-w-[970px] mx-auto space-y-20"
      >
        {/* title and subtitle */}
        <div className="space-y-3 text-center">
          <h2 className="text-lg font-medium text-primary uppercase">
            {skills.title}
          </h2>
          <h3 className="text-3xl md:text-4xl font-medium text-text-primary leading-11">
            {skills.subtitle}
          </h3>
        </div>

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
                />
              </dt>
              <dd className="relative flex-1">
                <div className="w-full bg-text-dimmed h-2 flex-1 rounded-full ">
                  {/* proficiency percetage */}
                  <motion.div
                    className="bg-primary h-2 rounded-full relative"
                    initial={{ width: "0%" }}
                    animate={{
                      width: isInView ? `${skill.proficiency}%` : "0%",
                    }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  >
                    <div className="size-7 rounded-full bg-primary absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center">
                      <div className="size-3 bg-background-primary rounded-full"></div>
                    </div>
                  </motion.div>
                </div>
                <span className="absolute -top-10 right-0 text-text-dimmed">
                  {skill.proficiency}%
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
