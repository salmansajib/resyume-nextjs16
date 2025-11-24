"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function InterestsSection({ data }) {
  const { interests } = data;
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
      aria-labelledby="interest-heading"
      className="px-4 py-32 bg-background-secondary"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* title and subtitle */}
        <header className="space-y-3 text-center">
          <h2
            id="interest-heading"
            className="text-lg font-medium text-primary uppercase"
          >
            {interests.title}
          </h2>
          <h3 className="text-3xl md:text-4xl font-medium text-text-primary leading-11 max-w-[15ch] mx-auto">
            {interests.subtitle}
          </h3>
        </header>

        {/* Interests */}
        <motion.ul
          ref={ref}
          className="flex flex-wrap items-center justify-center gap-6 mt-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {interests.entries.map((interest) => (
            <motion.li
              key={interest.id}
              role="listitem"
              className="flex flex-col items-center gap-3"
              variants={itemVariants}
            >
              <figure className="w-full max-w-32 sm:max-w-40 lg:max-w-48 overflow-hidden rounded-4xl">
                <Image
                  src={interest.image}
                  alt={`${interest.name} image`}
                  width={250}
                  height={250}
                  className="w-60 h-auto"
                />
              </figure>
              <figcaption className="text-xl font-medium text-text-secondary">
                {interest.name}
              </figcaption>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
