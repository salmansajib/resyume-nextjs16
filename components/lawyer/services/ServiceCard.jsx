"use client";
import React from "react";
import { motion } from "motion/react";
import { serviceIcons } from "./ServiceIcons";

export default function ServiceCard({ item, fadeInUp }) {
  return (
    <motion.article
      variants={fadeInUp}
      className="group bg-linear-to-br from-[#4F4F4F]/52 to-[#1C1C1C]/52 w-full xl:w-[300px] h-[300px] rounded-lg flex flex-col gap-6 items-center justify-center hover:border-transparent hover:bg-primary"
    >
      <div
        aria-hidden="true"
        className="text-text-secondary group-hover:text-text-primary transition-all duration-300 ease-in-out"
      >
        {serviceIcons[item.id]}
      </div>
      <h4 className="font-taviraj text-xl font-medium uppercase text-primary leading-none group-hover:text-text-primary transition-all duration-300 ease-in-out">
        {item.name}
      </h4>
      <p className="text-lg max-w-[25ch] text-center max-h-24 md:opacity-0 md:max-h-0 md:group-hover:opacity-100 md:group-hover:max-h-24 transition-all duration-300 ease-in-out">
        {item.description}
      </p>
    </motion.article>
  );
}
