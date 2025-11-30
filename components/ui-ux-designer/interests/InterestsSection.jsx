"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import InViewAnimator from "@/components/InViewAnimator";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function InterestsSection({ data }) {
  const { interests } = data;

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
        <InViewAnimator
          as="ul"
          className="flex flex-wrap items-center justify-center gap-6 mt-10"
          variants={staggerContainer}
        >
          {interests.entries.map((interest) => (
            <motion.li
              key={interest.id}
              role="listitem"
              className="flex flex-col items-center gap-3"
              variants={fadeInUp}
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
        </InViewAnimator>
      </div>
    </section>
  );
}
