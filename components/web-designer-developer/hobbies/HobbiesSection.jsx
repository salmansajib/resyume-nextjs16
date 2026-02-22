"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import InViewAnimator from "@/components/InViewAnimator";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function HobbiesSection({ data }) {
  const { hobbies } = data;

  return (
    <section aria-labelledby="hobbies-heading" className="relative">
      <InViewAnimator
        variants={staggerContainer}
        className="w-full max-w-5xl mx-auto px-4 py-20 relative z-10"
      >
        {/* title and subtitle */}
        <div className="flex flex-col gap-2 items-center justify-center">
          <h2
            id="hobbies-heading"
            className="font-rajdhani font-bold text-lg capitalize text-text-primary leading-none"
          >
            {hobbies.title}
          </h2>
          <h3 className="leading-12 lg:leading-20 font-rajdhani font-bold capitalize text-[clamp(2.4rem,4vw,3rem)] text-center">
            {hobbies.subtitle}
          </h3>
        </div>

        {/* hobbies */}
        <ul className="flex flex-wrap items-center gap-10 justify-center mt-10">
          {hobbies.items.map((item) => (
            <motion.li
              key={item.id}
              whileHover={{
                scale: 1.05,
              }}
              variants={fadeInUp}
              className="bg-linear-to-br from-[#FFFEFE]/5 to-[#B49696]/0 w-50 h-40 flex flex-col gap-6 items-center justify-center rounded-2xl ring-1 ring-[#E8E8E8]/10 backdrop-blur-sm"
            >
              <div>
                <Image
                  src={item.icon}
                  alt={`${item.name} icon`}
                  width={100}
                  height={100}
                  className="w-[70px] h-auto object-cover"
                />
              </div>
              <h3 className="leading-none uppercase font-bold font-rajdhani">
                {item.name}
              </h3>
            </motion.li>
          ))}
        </ul>
      </InViewAnimator>

      {/* background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[1200px] rounded-full bg-radial-[circle_at_center] from-[#E80567]/30 from-0% via-[#0E1724]/0 via-50% to-transparent to-70%"></div>
    </section>
  );
}
