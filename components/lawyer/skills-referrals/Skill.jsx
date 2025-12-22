"use client";
import React from "react";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import CircularProgress from "@/components/CircularProgress";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Skill({ item }) {
  // Observe whole section
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center gap-4"
      aria-label={`${item.name} skill proficiency`}
    >
      <div
        className="relative max-w-max"
        role="img"
        aria-label={`${item.name}: ${item.proficiency} percent proficiency`}
      >
        <CircularProgress
          progress={item.proficiency}
          size={117}
          strokeWidth={10}
          progressColor="#CCA967"
          trackColor="#222222"
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-3xl font-medium text-white font-taviraj">
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
      <h3 className="font-bold text-lg capitalize text-text-secondary text-center">
        {item.name}
      </h3>
      {/* Screen reader only text for context */}
      <span className="sr-only">
        Proficiency level: {item.proficiency} percent
      </span>
    </div>
  );
}
