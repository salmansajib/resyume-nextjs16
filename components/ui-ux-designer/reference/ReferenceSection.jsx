"use client";

import React from "react";
import ReferenceCard from "./ReferenceCard";
import InViewAnimator from "@/components/InViewAnimator";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ReferenceSection({ data }) {
  const { references } = data;

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
        <InViewAnimator
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {references.entries.map((reference) => (
            <ReferenceCard
              key={reference.id}
              reference={reference}
              itemVariants={fadeInUp}
            />
          ))}
        </InViewAnimator>
      </div>
    </section>
  );
}
