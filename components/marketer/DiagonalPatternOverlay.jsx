import React from "react";
import { cn } from "@/lib/utils";

export default function DiagonalPatternOverlay({
  stripeColor = "rgba(255, 255, 255, 0.08)",
  stripeWidth = "5px",
  lineCount = null, // New prop: number of lines to display
  stripeSpacing = "20px", // Fallback if lineCount is not provided
  angle = "-45deg",
  zIndex = 0,
  className = "",
}) {
  // Calculate pattern size based on lineCount or use stripeSpacing
  let patternSize;

  if (lineCount) {
    // Calculate the diagonal length of the container
    // Using a large enough value to cover typical screen sizes
    const containerDiagonal = "200vmax"; // Covers any screen size
    patternSize = `calc(${containerDiagonal} / ${lineCount})`;
  } else {
    patternSize = `calc(${stripeWidth} + ${stripeSpacing})`;
  }

  const gradientStyle = {
    backgroundImage: `repeating-linear-gradient(
      ${angle},
      ${stripeColor},
      ${stripeColor} ${stripeWidth},
      transparent ${stripeWidth},
      transparent ${patternSize}
    )`,
    zIndex: zIndex,
  };

  const baseClasses = `
    absolute inset-0 
    pointer-events-none 
  `;

  const mergedClasses = cn(baseClasses, className);

  return (
    <div className={mergedClasses} style={gradientStyle} aria-hidden="true" />
  );
}
