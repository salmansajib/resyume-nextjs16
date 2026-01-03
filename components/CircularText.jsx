import React from "react";
import { cn } from "@/lib/utils";

export default function CircularText({
  text = "CIRCULAR TEXT • ",
  radius = 50,
  fontSize = 12,
  className,
  textClassName,
  viewBoxSize = 120,
  children,
}) {
  const center = viewBoxSize / 2;

  // SVG path for the circle
  const circlePath = `M ${center},${center} m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`;

  return (
    <div className={cn("relative w-32 h-32", className)}>
      <svg
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        className="w-full h-full"
      >
        {/* Define the circular path */}
        <defs>
          <path id="circlePath" d={circlePath} />
        </defs>

        {/* Text on path */}
        <text
          className={cn(
            "fill-current uppercase tracking-wider text-base",
            textClassName,
          )}
          fontSize={fontSize}
          fontWeight="500"
        >
          <textPath href="#circlePath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Optional center content */}
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}
