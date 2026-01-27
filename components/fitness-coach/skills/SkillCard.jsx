"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function SkillCard({ item }) {
  // Observe whole section
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <motion.article
      whileHover={{
        scale: 1.03,
      }}
      role="listitem"
      ref={sectionRef}
      className="w-full sm:max-w-[300px] flex flex-col gap-5 items-center border border-text-secondary/30 px-7 py-10"
    >
      {/* icon */}
      <div className="size-[70px] bg-background-secondary flex items-center justify-center">
        <Image
          src={item.icon}
          alt=""
          width={40}
          height={40}
          className="w-[38px] h-auto object-cover"
        />
      </div>

      {/* name */}
      <h3 className="text-2xl font-medium font-teko capitalize">{item.name}</h3>

      {/* progress bar and percentage */}
      <div className="w-full space-y-3">
        {/* progress bar */}
        <div
          role="progressbar"
          aria-valuenow={item.proficiency}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${item.name} proficiency`}
          className="w-full h-7 border border-text-secondary/30 px-0.5 flex items-center"
        >
          <motion.div
            initial={{ width: "0%" }}
            animate={{
              width: isInView ? `${item.proficiency}%` : "0%",
            }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="bg-primary h-[22px]"
            aria-hidden="true"
          ></motion.div>
        </div>
        {/* percentage */}
        <p className="text-2xl font-medium font-teko max-w-max mx-auto">
          <AnimatedCounter
            value={item.proficiency}
            isInView={isInView}
            duration={2}
            from={10}
          />
          %
        </p>
      </div>
    </motion.article>
  );
}
