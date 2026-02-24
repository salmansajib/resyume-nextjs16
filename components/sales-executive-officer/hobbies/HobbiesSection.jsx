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
        className="w-full max-w-7xl mx-auto px-4 pt-10 pb-20"
      >
        {/* title and subtitle */}
        <div className="flex flex-col gap-5 items-center justify-center">
          <h2
            id="hobbies-heading"
            className="bg-text-primary px-5 py-3 capitalize text-background-primary leading-none"
          >
            {hobbies.title}
          </h2>
          <h3 className="leading-none font-medium capitalize text-[clamp(2.2rem,3vw,2.6rem)] text-center">
            {hobbies.subtitle}
          </h3>
        </div>

        {/* hobbies */}
        <ul className="flex flex-wrap items-center justify-center gap-7 mt-10">
          {hobbies.items.map((item) => (
            <motion.li
              variants={fadeInUp}
              whileHover={{
                scale: 1.03,
              }}
              key={item.id}
              className="flex flex-col items-center justify-center gap-5"
            >
              <div
                aria-hidden
                className="size-40 flex items-center justify-center border border-text-dimmed/30 rounded-3xl "
              >
                <div className="p-1 size-[125px] rounded-full border border-text-dimmed/20 flex items-center justify-center">
                  <div className="w-full h-full bg-background-secondary rounded-full flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={`${item.name} icon`}
                      width={100}
                      height={100}
                      className="w-[55px] h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-medium capitalize">{item.name}</h3>
            </motion.li>
          ))}
        </ul>
      </InViewAnimator>
    </section>
  );
}
