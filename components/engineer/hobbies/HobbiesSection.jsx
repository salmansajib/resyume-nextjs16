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
        className="px-4 pt-10 pb-20 w-full max-w-[1440px] mx-auto"
      >
        {/* title and subtitle */}
        <div className="space-y-4">
          <h2
            id="hobbies-heading"
            className="relative font-semibold capitalize max-w-max mx-auto"
          >
            <div className="relative z-10">{hobbies.title}</div>
            <div
              aria-hidden="true"
              className="bg-primary w-[37px] h-[33px] absolute top-1/2 -translate-y-1/2 -left-6"
            ></div>
          </h2>
          <h3 className="font-chakraPetch text-[40px] font-semibold uppercase max-w-max mx-auto text-center">
            {hobbies.subtitle}
          </h3>
        </div>

        {/* hobbies */}
        <ul className="flex items-center justify-center flex-wrap gap-20 mt-10">
          {hobbies.items.map((item) => (
            <motion.li
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
              }}
              key={item.id}
              className="size-[187px] rounded-full border border-text-secondary/30 flex items-center justify-center"
            >
              <div className="size-[160px] bg-linear-to-br from-[#D45B2D]/50 via-[#D45B2D]/0 to-[#D45B2D]/50 rounded-full flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={`${item.name} icon`}
                  width={100}
                  height={100}
                  className={`${item.id === "bike-riding" ? "w-[82px]" : "w-[50px]"} h-auto object-cover`}
                />
              </div>
            </motion.li>
          ))}
        </ul>
      </InViewAnimator>
    </section>
  );
}
