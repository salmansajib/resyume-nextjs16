"use client";

import React from "react";
import ReferenceCard from "./ReferenceCard";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function ReferenceSection({ data }) {
  const { references } = data;
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
    <section
      aria-labelledby="references-heading"
      className="px-4 py-32 bg-background-primary"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col xl:flex-row items-center xl:items-start justify-between gap-10">
        {/* title and subtitle */}
        <header className="space-y-3 text-center xl:text-left">
          <h2
            id="references-heading"
            className="text-lg font-medium text-primary uppercase"
          >
            {references.title}
          </h2>
          <h3 className="text-3xl md:text-4xl font-medium text-text-primary leading-11 xl:max-w-[10ch]">
            {references.subtitle}
          </h3>
        </header>

        {/* references card */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {references.entries.map((reference) => (
            <ReferenceCard
              key={reference.id}
              reference={reference}
              itemVariants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
