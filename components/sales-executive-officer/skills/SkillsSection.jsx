"use client";
import React, { useRef } from "react";
import Skills from "./Skills";
import { useInView } from "motion/react";
import Image from "next/image";

export default function SkillsSection({ data }) {
  const { skills } = data;
  // Observe whole section
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} aria-labelledby="skills-heading">
      <div className="w-full max-w-7xl mx-auto px-4 py-20">
        {/* title and subtitle */}
        <div className="flex flex-col gap-5 items-center justify-center">
          <h2
            id="skills-heading"
            className="bg-text-primary px-5 py-3 capitalize text-background-primary leading-none"
          >
            {skills.title}
          </h2>
          <h3 className="leading-none font-medium capitalize text-[clamp(2.2rem,3vw,2.6rem)] text-center">
            {skills.subtitle}
          </h3>
        </div>

        {/* skills */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div className="mt-10 space-y-10 order-2 lg:order-1">
            {skills.items.map((item) => (
              <Skills key={item.id} item={item} isInView={isInView} />
            ))}
          </div>
          <div aria-hidden className="order-1 lg:order-2">
            <Image
              src="/assets/sales-executive-officer/images/img-skills.png"
              alt=""
              width={800}
              height={800}
              className="w-[720px] h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
