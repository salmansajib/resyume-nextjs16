import React from "react";

export default function GridBackground({
  children,
  className = "",
  gridColor = "rgba(255, 255, 255, 0.15)",
  gridSize = "80px",
  zIndex = 0,
  masked = true, // enables radial mask
}) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex,
          "--grid-color": gridColor,
          "--grid-size": gridSize,
          backgroundImage: `
            linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
          `,
          backgroundSize: "var(--grid-size) var(--grid-size)",
          maskImage: masked
            ? "radial-gradient(circle, black 40%, transparent 95%)"
            : "none",
          WebkitMaskImage: masked
            ? "radial-gradient(circle, black 40%, transparent 95%)"
            : "none",
        }}
      />

      {/* Foreground Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
