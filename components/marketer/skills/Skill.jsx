"use client";
import React from "react";
import { motion } from "motion/react";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Skill({ item, isInView }) {
  return (
    <article className="space-y-4">
      {/* name of the skill */}
      <h3 className="leading-none font-rubik text-base text-text-secondary">
        {item.name}
      </h3>

      {/* progress bar */}
      <div
        role="progressbar"
        aria-valuenow={item.percentage}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label={`${item.name} proficiency`}
        className="w-full h-[18px] border border-[#B8DBFF]/20 rounded-full flex items-center justify-start px-1"
      >
        <motion.div
          className="h-2 bg-primary rounded-full relative"
          initial={{ width: "0%" }}
          animate={{
            width: isInView ? `${item.percentage}%` : "0%",
          }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <p className="font-rubik text-base bg-[#b1b1b1] max-w-max px-4 rounded-full absolute z-20 -top-12 -right-5.5">
            <AnimatedCounter
              value={item.percentage}
              isInView={isInView}
              duration={2}
              from={10}
            />
            %
          </p>
          <div
            className="absolute -top-8.5 right-0"
            style={{
              width: 0,
              height: 0,
              borderLeft: "10px solid transparent", // Left side is transparent
              borderRight: "10px solid transparent", // Right side is transparent
              borderBottom: "20px solid #b1b1b1", // The base of the triangle (color)
              transform: "rotate(180deg)",
            }}
          ></div>
        </motion.div>
      </div>
    </article>
  );
}
