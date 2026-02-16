"use client";
import React from "react";
import Image from "next/image";
import AnimatedCounter from "@/components/AnimatedCounter";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function SkillCard({ item, fadeInUp }) {
  // Observe whole section
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <motion.article
      ref={sectionRef}
      aria-labelledby={`skill-${item.name.replace(/\s+/g, "-").toLowerCase()}`}
      className="flex flex-col items-center"
      variants={fadeInUp}
      whileHover={{
        scale: 1.05,
      }}
    >
      <div className="relative bg-linear-to-b from-[#74708A]/41 to-[#373543]/22 h-[300px] max-w-max mx-auto p-3.5 rounded-full backdrop-blur-sm ring ring-text-primary/10">
        <div
          aria-hidden
          className="bg-[#25354B]/74 shadow-lg size-40 rounded-full flex items-center justify-center"
        >
          <Image
            src={item.icon}
            alt="" // Decorative image, name is already in the h3
            width={100}
            height={100}
            className="w-18 h-auto object-cover"
            aria-hidden="true"
          />
        </div>
        <p className="sr-only">Proficiency: </p>
        <p
          aria-label={`Proficiency level: ${item.proficiency}`}
          className="text-center text-2xl font-medium mt-10"
        >
          <AnimatedCounter
            value={item.proficiency}
            isInView={isInView}
            duration={2}
            from={10}
          />
          %
        </p>
      </div>
      <h3
        className="text-2xl max-w-[15ch] mx-auto text-center mt-5"
        id={`skill-${item.name.replace(/\s+/g, "-").toLowerCase()}`}
      >
        {item.name}
      </h3>
    </motion.article>
  );
}
