"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { cn } from "@/lib/utils";

export default function AnimatedCounter({
  value,
  from = 0,
  duration = 2,
  isInView = true,
  className,
}) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: duration,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, value, from, duration, count]);

  return (
    <motion.span
      // Use cn to merge 'tabular-nums' (defaults) with custom 'className'
      className={cn("tabular-nums", className)}
    >
      {rounded}
    </motion.span>
  );
}
