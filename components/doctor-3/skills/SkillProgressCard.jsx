import React from "react";
import { motion } from "motion/react";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function SkillProgressCard({
  item,
  isInView,
  prefersReducedMotion,
}) {
  const { id, name, proficiency } = item;

  return (
    <motion.figure
      whileHover={{
        scale: 1.05,
      }}
      className="flex flex-col gap-7 items-center border border-background-secondary bg-background-secondary/25 px-8 py-15 rounded-4xl"
    >
      {/* Screen-reader value */}
      <output aria-live="polite" className="text-4xl font-bold">
        <AnimatedCounter
          value={proficiency}
          isInView={isInView}
          duration={1.5}
          from={0}
        />
        %
      </output>

      {/* Native semantic progress (SR only) */}
      <progress
        value={proficiency}
        max={100}
        aria-describedby={`${id}-title`}
        className="sr-only"
      >
        {proficiency}%
      </progress>

      {/* Visual progress bar */}
      <div
        aria-hidden="true"
        className="h-5 w-full overflow-hidden rounded-full border border-text-primary/50 flex items-center px-1"
      >
        <motion.div
          className="h-3 rounded-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${proficiency}%` : "0%" }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 1.5, ease: "easeOut" }
          }
        />
      </div>

      <figcaption
        id={`${id}-title`}
        className="text-2xl font-medium uppercase text-text-primary max-w-[15ch] text-center"
      >
        {name}
      </figcaption>
    </motion.figure>
  );
}
