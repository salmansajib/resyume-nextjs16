import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export default function CircularText({
  text = "CIRCULAR TEXT • ",
  radius = 50,
  fontSize = 12,
  className,
  textClassName,
  viewBoxSize = 120,
  children,
  duration = 14, // rotation speed (seconds)
}) {
  const center = viewBoxSize / 2;

  const circlePath = `
    M ${center},${center}
    m -${radius},0
    a ${radius},${radius} 0 1,1 ${radius * 2},0
    a ${radius},${radius} 0 1,1 -${radius * 2},0
  `;

  return (
    <div className={cn("relative w-32 h-32", className)}>
      {/* Rotating text */}
      <motion.svg
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        className="w-full h-full"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
        }}
      >
        <defs>
          <path id="circlePath" d={circlePath} />
        </defs>

        <text
          className={cn("fill-current uppercase tracking-wider", textClassName)}
          fontSize={fontSize}
          fontWeight="500"
        >
          <textPath href="#circlePath">{text}</textPath>
        </text>
      </motion.svg>

      {/* Static center icon */}
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}
