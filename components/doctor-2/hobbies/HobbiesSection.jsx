"use client";
import React from "react";
import Image from "next/image";
import InViewAnimator from "@/components/InViewAnimator";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "motion/react";

export default function HobbiesSection({ data }) {
  const { hobbies } = data;

  return (
    <section aria-labelledby="hobbies-heading" className="px-4 py-20">
      <div className="w-full max-w-7xl mx-auto">
        {/* title and subtitle */}
        <div className="space-y-3">
          <h2
            id="hobbies-heading"
            className="relative z-10 text-lg font-semibold text-primary uppercase px-3 py-1 rounded-xl max-w-max mx-auto before:absolute before:inset-0 before:bg-background-neutral before:rounded-xl before:z-0 after:absolute after:inset-0 after:w-5 after:-left-1 after:bg-accent after:rounded-sm after:-z-10"
          >
            <span className="relative z-10">{hobbies.title}</span>
          </h2>
          <h3 className="text-center font-ebGaramond font-medium text-[clamp(2.5rem,6vw,3.75rem)] capitalize leading-none max-w-[20ch] mx-auto">
            {hobbies.subtitle}
          </h3>
        </div>

        {/* hobbies */}
        <InViewAnimator
          variants={staggerContainer}
          className="flex flex-wrap items-center justify-center gap-10 mt-10"
        >
          {hobbies.items.map((item) => (
            <motion.article
              variants={fadeInUp}
              key={item.id}
              className="size-50 rounded-full bg-[#E5F6F4] flex items-center justify-center"
              whileHover={{
                scale: 1.05,
              }}
            >
              <Image
                src={item.icon}
                alt={`${item.name} icon`}
                width={150}
                height={150}
                className="w-20 h-auto object-cover"
              />
            </motion.article>
          ))}
        </InViewAnimator>
      </div>
    </section>
  );
}
