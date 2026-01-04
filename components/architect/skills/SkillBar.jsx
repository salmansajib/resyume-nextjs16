"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function SkillBar({ name, percentage, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Configuration variables - adjust these to customize
  const barWidth = 3; // Width of each bar in pixels
  const gapWidth = 4; // Width of gap between bars in pixels
  const borderRadius = 0; // Border radius for bar corners in pixels
  const startColor = "#4A3B31"; // Starting gradient color (left side)
  const endColor = "#B49077"; // Ending gradient color (right side)

  const totalSegment = barWidth + gapWidth;

  return (
    <div ref={ref} className="mb-8">
      <div className="flex justify-between items-center mb-5">
        <span className="text-2xl font-medium font-lora text-white capitalize">
          {name}
        </span>
        <span className="text-base font-medium text-primary border border-border-primary border-dashed size-[47px] flex items-center justify-center">
          <AnimatedCounter
            value={percentage}
            isInView={isInView}
            duration={1.5}
            from={0}
          />
          %
        </span>
      </div>

      <div className="w-full h-6 border border-border-primary flex items-center px-2 overflow-hidden">
        <motion.div
          className="h-2"
          style={{
            background: `linear-gradient(90deg, ${startColor} 0%, ${endColor} 100%)`,
            WebkitMaskImage: `repeating-linear-gradient(
              90deg,
              black 0px,
              black ${barWidth}px,
              transparent ${barWidth}px,
              transparent ${totalSegment}px
            )`,
            maskImage: `repeating-linear-gradient(
              90deg,
              black 0px,
              black ${barWidth}px,
              transparent ${barWidth}px,
              transparent ${totalSegment}px
            )`,
            boxShadow: `0 0 10px ${endColor}60`,
            borderRadius: `${borderRadius}px`,
          }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{
            duration: 1.5,
            delay: delay / 1000,
            ease: [0.4, 0, 0.2, 1],
          }}
        />
      </div>
    </div>
  );
}
