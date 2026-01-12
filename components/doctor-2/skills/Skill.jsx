"use client";
import React from "react";
import { useRef } from "react";
import { useInView } from "motion/react";
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
          size={179}
          strokeWidth={20}
          progressColor="#00A198"
          trackColor="#E0F7FF"
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-[34px] font-medium text-text-primary font-ebGaramond">
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
      <h3 className="font-medium font-ebGaramond text-2xl max-w-[15ch] capitalize text-text-secondary text-center">
        {item.name}
      </h3>
      {/* Screen reader only text for context */}
      <span className="sr-only">
        Proficiency level: {item.proficiency} percent
      </span>
    </div>
  );
}
