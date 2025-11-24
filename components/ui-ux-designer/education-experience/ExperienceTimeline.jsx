"use client";

import React from "react";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function ExperienceTimeline({ experience }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Individual interest item variants
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative sm:ml-[120px]">
      {/* vertical line */}
      <div
        aria-hidden="true"
        className="absolute -top-10 -left-25 -bottom-10 bg-primary w-0.5"
      />

      <motion.ul
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-15"
      >
        {experience.entries.map((item) => (
          <li key={item.id}>
            <article className="relative">
              {/* horizontal connector line */}
              <div
                aria-hidden="true"
                className="absolute top-[5px] -left-25 w-10 h-0.5 bg-primary"
              />

              {/* timeline dot */}
              <div
                aria-hidden="true"
                className="absolute top-0 -left-15 size-3 rounded-full bg-primary flex items-center justify-center"
              >
                <div className="size-1.5 rounded-full bg-background-primary"></div>
              </div>

              {/* content card */}
              <motion.div
                variants={itemVariants}
                className="space-y-3 bg-background-primary p-10"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-3">
                    <time className="block text-base font-medium uppercase">
                      {item.date}
                    </time>
                    <h3 className="text-xl font-medium text-text-primary">
                      {item.company}
                    </h3>
                  </div>
                </div>
                <p className="text-base font-medium text-primary uppercase">
                  {item.location}
                </p>
                <p className="text-base font-normal max-w-[50ch]">
                  {item.description}
                </p>
              </motion.div>
            </article>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
