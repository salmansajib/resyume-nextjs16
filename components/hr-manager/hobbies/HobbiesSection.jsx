"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import InViewAnimator from "@/components/InViewAnimator";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function HobbiesSection({ data }) {
  const { hobbies } = data;

  return (
    <section aria-labelledby="hobbies-heading">
      <InViewAnimator
        variants={staggerContainer}
        className="w-full max-w-7xl mx-auto flex flex-col xl:flex-row xl:items-start gap-10 xl:gap-20 px-4 py-20"
      >
        {/* title and subtitle */}
        <div className="flex gap-3 flex-col items-center xl:items-start justify-center">
          <h2
            id="hobbies-heading"
            className="text-lg font-medium capitalize bg-linear-to-b from-gradient-primary-start via-gradient-primary-middle to-gradient-primary-end bg-clip-text text-transparent"
          >
            {hobbies.title}
          </h2>
          <h3 className="text-[clamp(2rem,3vw,2.9rem)] font-poppins font-medium capitalize leading-none">
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
              className="size-[165px] bg-linear-to-b from-[#EBEBEB]/15 to-[#858585]/15 rounded-2xl ring-1 ring-primary/20 flex flex-col gap-3 items-center justify-center"
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
