"use client";
import React from "react";
import { useRef } from "react";
import { useInView } from "motion/react";
import { motion } from "motion/react";
import CircularProgress from "@/components/CircularProgress";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Skill({ item }) {
  // Observe whole section
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={sectionRef}
      className="flex flex-col items-center gap-4"
      aria-label={`${item.name} skill proficiency`}
      whileHover={{
        scale: 1.05,
      }}
    >
      <div
        className="relative max-w-max"
        role="img"
        aria-label={`${item.name}: ${item.proficiency} percent proficiency`}
      >
        <CircularProgress
          progress={item.proficiency}
          lineCap="butt"
          size={230}
          strokeWidth={13}
          progressColor="#9923AF"
          trackColor="#FCF8FF"
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-[34px] font-bold text-text-primary font-syne">
            <AnimatedCounter
              value={item.proficiency}
              isInView={isInView}
              duration={2}
              from={10}
            />
            %
          </p>
        </div>
      </div>
      <h3 className="font-bold font-syne text-2xl max-w-[15ch] capitalize text-text-primary text-center">
        {item.name}
      </h3>
      {/* Screen reader only text for context */}
      <span className="sr-only">
        Proficiency level: {item.proficiency} percent
      </span>
    </motion.div>
  );
}
