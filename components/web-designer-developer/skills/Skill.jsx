"use client";
import React from "react";
import { useRef } from "react";
import { useInView } from "motion/react";
import CircularProgress from "@/components/CircularProgress";
import AnimatedCounter from "@/components/AnimatedCounter";
import Image from "next/image";

export default function Skill({ item }) {
  // Observe whole section
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center gap-6 -ml-12"
      aria-label={`${item.name} skill proficiency`}
    >
      <div
        className="relative max-w-max"
        role="img"
        aria-label={`${item.name}: ${item.proficiency} percent proficiency`}
      >
        <CircularProgress
          progress={item.proficiency}
          size={285}
          strokeWidth={3}
          progressColor="#FFFFFF"
          trackColor="#223249"
          lineCap="square"
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex flex-col gap-3 items-center justify-center">
          <div aria-hidden className="size-20 flex items-center justify-center">
            <Image
              src={item.icon}
              alt=""
              width={80}
              height={80}
              className="w-[60px] h-auto object-cover"
            />
          </div>
          <p className="text-3xl font-bold text-white font-rajdhani">
            <AnimatedCounter
              value={item.proficiency}
              isInView={isInView}
              duration={2}
              from={10}
            />
            %
          </p>
        </div>
      </div>
      <h3 className="font-bold font-rajdhani text-2xl capitalize text-center">
        {item.name}
      </h3>
      {/* Screen reader only text for context */}
      <span className="sr-only">
        Proficiency level: {item.proficiency} percent
      </span>
    </div>
  );
}
