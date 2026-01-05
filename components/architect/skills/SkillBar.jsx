"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function SkillBar({ name, percentage, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // ===== Configuration =====
  const barWidth = 3; // width of each bar segment (px)
  const gapWidth = 4; // gap between segments (px)
  const totalSegment = barWidth + gapWidth;

  const startColor = "#4A3B31";
  const endColor = "#B49077";

  const radius = 0; // rounding for top & bottom of each bar
  // =========================

  // SVG mask (URL-encoded)
  const maskSvg = `
    <svg xmlns='http://www.w3.org/2000/svg' width='${totalSegment}' height='100'>
      <rect
        x='0'
        y='0'
        width='${barWidth}'
        height='100'
        rx='${radius}'
        ry='${radius}'
        fill='black'
      />
    </svg>
  `;

  const encodedMask = `url("data:image/svg+xml,${encodeURIComponent(
    maskSvg,
  )}")`;

  return (
    <div ref={ref} className="mb-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <span
          id={`skill-${name.replace(/\s+/g, "-").toLowerCase()}`}
          className="text-2xl font-medium font-lora text-white capitalize"
        >
          {name}
        </span>

        <span
          className="text-base font-medium text-primary border border-border-primary border-dashed size-[47px] flex items-center justify-center"
          aria-label={`${percentage} percent`}
        >
          <AnimatedCounter
            value={percentage}
            isInView={isInView}
            duration={1.5}
            delay={delay / 1000}
            from={0}
          />
          %
        </span>
      </div>

      {/* Progress bar */}
      <div
        role="progressbar"
        aria-labelledby={`skill-${name.replace(/\s+/g, "-").toLowerCase()}`}
        aria-valuenow={isInView ? percentage : 0}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuetext={`${percentage} percent proficiency in ${name}`}
        className="w-full h-6 border border-border-primary flex items-center px-2 overflow-hidden"
      >
        <motion.div
          className="h-2"
          style={{
            background: `linear-gradient(90deg, ${startColor} 0%, ${endColor} 100%)`,
            WebkitMaskImage: encodedMask,
            WebkitMaskRepeat: "repeat",
            maskImage: encodedMask,
            maskRepeat: "repeat",
            boxShadow: `0 0 10px ${endColor}60`,
          }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{
            duration: 1.5,
            delay: delay / 1000,
            ease: [0.4, 0, 0.2, 1],
          }}
          aria-hidden="true"
        />
      </div>

      {/* Screen reader fallback */}
      <span className="sr-only">
        {name} skill level: {percentage} out of 100
      </span>
    </div>
  );
}
