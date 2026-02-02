"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import InViewAnimator from "@/components/InViewAnimator";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function HobbiesSection({ data }) {
  const { hobbies } = data;

  return (
    <section aria-labelledby="hobbies-heading">
      <InViewAnimator
        variants={staggerContainer}
        className="w-full max-w-7xl mx-auto px-4 pt-0 pb-20"
      >
        {/* title and subtitle */}
        <div className="space-y-3">
          <h2
            id="hobbies-heading"
            className="capitalize font-medium flex items-center justify-center gap-2"
          >
            <span
              aria-hidden
              className="bg-primary w-0.5 h-5 flex flex-col items-center justify-between"
            >
              <span className="bg-primary w-1.5 h-0.5"></span>
              <span className="bg-primary w-1.5 h-0.5"></span>
            </span>
            {hobbies.title}
          </h2>
          <h3 className="text-center text-[40px] font-playfairDisplay leading-none capitalize">
            {hobbies.subtitle}
          </h3>
        </div>

        {/* hobbies */}
        <ul className="flex items-center justify-center flex-wrap gap-10 mt-10">
          {hobbies.items.map((item) => (
            <motion.li
              key={item.id}
              whileHover={{
                scale: 1.05,
              }}
              variants={fadeInUp}
              className="flex flex-col items-center gap-3"
            >
              <div className="size-40 bg-background-secondary rounded-full flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={`${item.name} icon`}
                  width={100}
                  height={100}
                  className="w-[78px] h-auto object-cover"
                />
              </div>
              <p className="text-xl font-medium capitalize">{item.name}</p>
            </motion.li>
          ))}
        </ul>
      </InViewAnimator>
    </section>
  );
}
