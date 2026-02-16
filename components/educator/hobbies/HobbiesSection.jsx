"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import InViewAnimator from "@/components/InViewAnimator";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function HobbiesSection({ data }) {
  const { hobbies } = data;

  return (
    <section aria-labelledby="hobbies-heading" className="bg-[#000109]">
      <InViewAnimator
        variants={staggerContainer}
        className="w-full max-w-7xl mx-auto flex flex-col xl:flex-row xl:items-center gap-10 xl:gap-20 px-4 py-20"
      >
        {/* title and subtitle */}
        <div className="flex gap-3 flex-col items-center xl:items-start justify-center">
          <h2 id="hobbies-heading" className="uppercase text-text-secondary">
            {hobbies.title}
          </h2>
          <h3 className="text-[clamp(2rem,4vw,3rem)] font-poppins font-medium capitalize leading-none">
            {hobbies.subtitle}
          </h3>
        </div>

        {/* hobbies */}
        <ul className="flex flex-wrap xl:flex-nowrap items-center justify-center gap-7 xl:gap-15">
          {hobbies.items.map((item) => (
            <motion.li
              key={item.id}
              whileHover={{
                scale: 1.05,
              }}
              variants={fadeInUp}
              className="size-[165px] bg-linear-to-br from-[#74708A]/20 to-[#373543]/10 backdrop-blur-sm rounded-2xl ring-1 ring-text-primary/10 flex flex-col gap-3 items-center justify-center xl:even:mb-20"
            >
              <Image
                src={item.icon}
                alt=""
                width={100}
                height={100}
                className="w-[70px] h-auto object-cover"
              />
              <p className="text-lg font-medium uppercase">{item.name}</p>
            </motion.li>
          ))}
        </ul>
      </InViewAnimator>
    </section>
  );
}
