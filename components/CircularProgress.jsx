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
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // SVG circle calculations
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const fullOffset = circumference; // 0% progress
  const targetOffset = circumference - (progress / 100) * circumference; // target progress

  return (
    <svg ref={ref} width={size} height={size} className="transform -rotate-90">
      {/* Background track */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={trackColor}
        strokeWidth={strokeWidth}
        fill="none"
      />

      {/* Progress circle - animates from 0 to progress */}
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={progressColor}
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeLinecap="round"
        initial={{ strokeDashoffset: fullOffset }}
        animate={{
          strokeDashoffset: isInView ? targetOffset : fullOffset,
        }}
        transition={{
          duration: duration,
          ease: "easeOut",
        }}
      />
    </svg>
  );
}
