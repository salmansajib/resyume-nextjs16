"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function SkillsSection({ skills, className }) {
  // Observe whole section
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      aria-labelledby="skills-heading"
      className={cn("", className)}
    >
      {/* title and subtitle */}
      <div className="flex flex-col gap-3 items-center lg:items-start justify-center">
        <h2
          id="skills-heading"
          className="flex items-center gap-1 text-primary font-medium capitalize"
        >
          <Image
            src="/assets/financial-advisor/images/section-title-decorative-line.png"
            aria-hidden
            alt=""
            width={5}
            height={20}
            priority
            className="w-[3px] h-auto object-cover"
          />
          {skills.title}
        </h2>

        <h3 className="text-[clamp(2rem,3vw,2.9rem)] font-medium capitalize leading-none text-center lg:text-left">
          {skills.subtitle}
        </h3>
      </div>

      {/* skills */}
      <div className="space-y-7 pt-10">
        {skills.items.map((item) => (
          <div
            role="progressbar"
            aria-valuenow={item.proficiency}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${item.name} proficiency`}
            key={item.id}
            className="w-full h-[67px] bg-background-primary flex items-center px-2"
          >
            <motion.div
              initial={{ width: "40%" }}
              animate={{
                width: isInView ? `${item.proficiency}%` : "40%",
              }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="h-[50px] bg-primary flex items-center justify-between px-2"
              style={{
                width: `${item.proficiency}%`,
              }}
            >
              <p className="text-background-primary capitalize bg-[#176F4E] h-[34px] max-w-max flex items-center justify-center px-3">
                {item.name}
              </p>
              <p className="text-background-primary capitalize bg-[#176F4E] h-[34px] max-w-max flex items-center justify-center px-3">
                <AnimatedCounter
                  value={item.proficiency}
                  isInView={isInView}
                  duration={2}
                  from={10}
                />
                %
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
