"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import SectionTitleIcon from "../SectionTitleIcon";
import InViewAnimator from "@/components/InViewAnimator";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function HobbiesSection({ data }) {
  const { hobbies } = data;

  return (
    <section aria-labelledby="hobbies-heading" className="px-4 py-20">
      <div className="w-full max-w-7xl mx-auto">
        {/* title */}
        <div className="max-w-max mx-auto">
          <h2
            id="hobbies-heading"
            className="font-ebGaramond text-[clamp(2rem,4vw,2.5rem)] capitalize text-center px-4 leading-none"
          >
            {hobbies.title}
          </h2>
          {/* bottom line and icon */}
          <SectionTitleIcon />
        </div>

        {/* hobbies */}
        <InViewAnimator
          variants={staggerContainer}
          className="flex flex-wrap items-center justify-center gap-10 mt-10"
        >
          {hobbies.items.map((item) => (
            <motion.article
              key={item.id}
              className="size-50 rounded-full bg-background-secondary flex items-center justify-center"
              variants={fadeInUp}
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
