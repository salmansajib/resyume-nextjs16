"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function About({ heroData }) {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <h2 className="font-semibold text-primary capitalize relative leading-none">
          <span className="relative z-10 ml-4">{heroData.about.title}</span>
          <span className="absolute -top-2 left-0 size-8 rounded-full bg-background-neutral/50"></span>
          <span className="absolute -top-5 left-0 size-2.5 rounded-full bg-primary/50"></span>
        </h2>
        <h3 className="text-[clamp(2rem,4vw,3rem)] font-semibold capitalize leading-none">
          {heroData.about.subtitle}
        </h3>
        <p className="text-text-secondary max-w-[55ch]">
          {heroData.about.description}
        </p>
      </div>
      <div className="space-y-5">
        <h4 className="text-2xl font-medium leading-none uppercase">
          {heroData.about.myOfferings.title}
        </h4>
        <ul className="space-y-3">
          {heroData.about.myOfferings.points.map((point, index) => (
            <li
              key={index}
              className="flex items-center gap-4 text-text-secondary capitalize"
            >
              <Image
                src="/assets/virtual-assistant/images/list-style-image-about.png"
                alt=""
                width={30}
                height={30}
                priority
                className="w-[22px] h-auto object-cover"
              />
              {point}
            </li>
          ))}
        </ul>
      </div>
      <motion.a
        whileHover={{
          scale: 1.03,
        }}
        href="#portfolio"
        className="w-[190px] h-[50px] bg-primary text-background-primary flex items-center justify-center rounded-md uppercase font-medium"
      >
        Check Portfolio
      </motion.a>
    </div>
  );
}
