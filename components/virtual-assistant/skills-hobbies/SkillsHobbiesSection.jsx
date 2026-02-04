"use client";
import React from "react";
import Image from "next/image";
import { useRef } from "react";
import { useInView } from "motion/react";
import { motion } from "motion/react";
import Skill from "./Skill";

export default function SkillsHobbiesSection({ data }) {
  const { skills, hobbies } = data;

  // Observe whole section
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <div className="bg-background-secondary">
      <div className="w-full max-w-5xl mx-auto px-4 py-20">
        {/* skills */}
        <section ref={sectionRef} aria-labelledby="skills-heading">
          {/* title and subtitle */}
          <div className="flex flex-col gap-4 items-center justify-center">
            <h2
              id="skills-heading"
              className="font-semibold text-primary capitalize relative leading-none"
            >
              <span className="relative z-10 ml-4">{skills.title}</span>
              <span className="absolute -top-2 left-0 size-8 rounded-full bg-background-neutral/50"></span>
              <span className="absolute -top-5 left-0 size-2.5 rounded-full bg-primary/50"></span>
            </h2>
            <h3 className="text-[clamp(2rem,4vw,3rem)] font-semibold capitalize leading-none text-center">
              {skills.subtitle}
            </h3>
          </div>

          {/* skill bar */}
          <div className="mt-15 space-y-10">
            {skills.items.map((item) => (
              <Skill key={item.id} item={item} isInView={isInView} />
            ))}
          </div>
        </section>

        {/* hobbies */}
        <section aria-labelledby="hobbies-heading" className="mt-25">
          {/* title and subtitle */}
          <div className="flex flex-col gap-4 items-center justify-center">
            <h2
              id="hobbies-heading"
              className="font-semibold text-primary capitalize relative leading-none"
            >
              <span className="relative z-10 ml-4">{hobbies.title}</span>
              <span className="absolute -top-2 left-0 size-8 rounded-full bg-background-neutral/50"></span>
              <span className="absolute -top-5 left-0 size-2.5 rounded-full bg-primary/50"></span>
            </h2>
            <h3 className="text-[clamp(2rem,4vw,3rem)] font-semibold capitalize leading-none max-w-[15ch]">
              {hobbies.subtitle}
            </h3>
          </div>

          {/* hobbies */}
          <ul className="mt-15 flex flex-wrap items-center justify-center gap-5 md:gap-10">
            {hobbies.items.map((item) => (
              <motion.li
                whileHover={{
                  scale: 1.05,
                }}
                key={item.id}
                className=""
              >
                <article>
                  <div className="size-[167px] bg-background-primary rounded-3xl flex flex-col gap-5 items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={`${item.name} icon`}
                      width={100}
                      height={100}
                      className="w-[73px] h-auto object-cover"
                    />
                    <p className="font-medium uppercase">{item.name}</p>
                  </div>
                </article>
              </motion.li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
