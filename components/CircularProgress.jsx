"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function CircularProgress({
  progress = 95,
  size = 120,
  strokeWidth = 8,
  progressColor = "#D4AF37",
  trackColor = "#374151",
  duration = 2,
  lineCap = "round", // "round" | "butt" | "square"
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const fullOffset = circumference;
  const targetOffset = circumference - (progress / 100) * circumference;

  return (
    <svg ref={ref} width={size} height={size} className="transform -rotate-90">
      {/* Track */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={trackColor}
        strokeWidth={strokeWidth}
        fill="none"
      />

      {/* Progress */}
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={progressColor}
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={fullOffset}
        strokeLinecap={lineCap}
        initial={{ strokeDashoffset: fullOffset }}
        animate={{
          strokeDashoffset: isInView ? targetOffset : fullOffset,
        }}
        transition={{
          duration,
          ease: "easeOut",
        }}
      />
    </svg>
  );
}
