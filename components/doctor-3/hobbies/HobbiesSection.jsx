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
        <div className="space-y-4">
          <h2
            id="hobbies-heading"
            className="flex items-center justify-center gap-2 text-lg font-medium text-primary uppercase"
          >
            <Image
              src="/assets/doctor-3/icons/section-title-icon.svg"
              alt=""
              width={100}
              height={50}
              className="w-[94px] h-auto object-cover"
            />
            <span>{hobbies.title}</span>
          </h2>
          <h3 className="text-[clamp(2.2rem,4vw,2.5rem)] font-bold uppercase max-w-[20ch] mx-auto text-center leading-11">
            {hobbies.subtitle}
          </h3>
        </div>

        {/* hobbies */}
        <InViewAnimator
          variants={staggerContainer}
          className="flex flex-wrap items-center justify-center gap-x-20 gap-y-10 mt-10"
        >
          {hobbies.items.map((item) => (
            <motion.div
              variants={fadeInUp}
              whileHover={{
                scale: 1.1,
              }}
              key={item.id}
            >
              <Image
                src={item.icon}
                alt={`${item.name} icon`}
                width={100}
                height={100}
                className="w-[75px] h-auto object-cover"
              />
            </motion.div>
          ))}
        </InViewAnimator>
      </div>
    </section>
  );
}
