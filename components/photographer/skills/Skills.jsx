"use client";

import React from "react";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Skills({ skillsData }) {
  // Observe whole section
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <div
      ref={sectionRef}
      className="mt-15 flex flex-wrap gap-5 items-center justify-center"
    >
      {skillsData.map((skill) => (
        <article
          key={skill.id}
          className="size-[300px] px-8 flex flex-col items-center justify-center rounded-full border border-primary/20 space-y-5"
        >
          {/* skill icon */}
          <div>
            <Image
              src={skill.icon}
              alt=""
              width={60}
              height={60}
              className="w-[50px] h-auto"
            />
          </div>

          {/* skill name and progress bar */}
          <div className="w-full space-y-2">
            {/* name */}
            <h3 className="text-xl text-center font-medium text-text-primary">
              {skill.name}
            </h3>
            {/* progress bar */}
            <div
              role="progressbar"
              aria-valuenow={skill.proficiency}
              aria-valuemin="0"
              aria-valuemax="100"
              aria-label={`${skill.name} proficiency`}
              className="w-full h-4 border border-primary/20 flex items-center justify-start px-1"
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{
                  width: isInView ? `${skill.proficiency}%` : "0%",
                }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="bg-linear-to-r from-gradient-primary-start to-gradient-primary-end h-1.5"
                aria-hidden="true"
              ></motion.div>
            </div>
          </div>

          {/* skill proficiency */}
          <p
            aria-hidden="true"
            className="text-[40px] font-medium text-text-primary"
          >
            <AnimatedCounter
              value={skill.proficiency}
              isInView={isInView}
              duration={2}
              from={10}
            />
            %
          </p>
        </article>
      ))}
    </div>
  );
}
