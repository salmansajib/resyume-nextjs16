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
      className="flex items-center gap-4 border border-[#d9d9d9] p-7 rounded-xl"
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
          size={100}
          strokeWidth={10}
          progressColor="#E20935"
          trackColor="#d9d9d9"
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-2xl font-medium text-text-primary font-poppins">
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
      <h3 className="font-medium font-poppins max-w-[15ch] uppercase text-text-primary">
        {item.name}
      </h3>
      {/* Screen reader only text for context */}
      <span className="sr-only">
        Proficiency level: {item.proficiency} percent
      </span>
    </motion.div>
  );
}
