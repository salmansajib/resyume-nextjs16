import React from "react";
import { cn } from "@/lib/utils";

export default function BracketedHeading({
  children,
  className,
  bracketClassName,
  bracketColor = "bg-primary",
}) {
  return (
    <div className="relative px-2 py-4 max-w-max">
      {/* Top-left corner bracket */}
      <div className={cn("absolute top-0 -left-4 w-12 h-12", bracketClassName)}>
        <div
          className={cn("absolute top-4 left-4 w-4 h-px", bracketColor)}
        ></div>
        <div
          className={cn("absolute top-4 left-4 w-px h-4", bracketColor)}
        ></div>
      </div>

      {/* Bottom-right corner bracket */}
      <div
        className={cn("absolute bottom-0 -right-4 w-12 h-12", bracketClassName)}
      >
        <div
          className={cn("absolute bottom-4 right-4 w-4 h-px", bracketColor)}
        ></div>
        <div
          className={cn("absolute bottom-4 right-4 w-px h-4", bracketColor)}
        ></div>
      </div>

      <h2
        className={cn(
          "text-lg font-normal text-primary relative whitespace-nowrap",
          className,
        )}
      >
        {children}
      </h2>
    </div>
  );
}
