"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function HobbiesSection({ data }) {
  const { hobbies } = data;

  return (
    <section aria-labelledby="hobbies-heading">
      <div className="w-full max-w-7xl mx-auto px-4 py-20">
        {/* subtitle */}
        <div className="relative max-w-max mx-auto leading-none">
          <h3
            id="hobbies-heading"
            className="relative z-10 font-teko text-[clamp(3rem,4vw,4.375rem)] capitalize"
          >
            {hobbies.subtitle}
          </h3>
          <div aria-hidden className="absolute bottom-2 -right-8">
            <Image
              src="/assets/fitness-coach/images/decorative-dotted-grid-section-subtitle.png"
              alt=""
              width={100}
              height={50}
              className="w-[84px] h-8 object-cover"
            />
          </div>
        </div>

        {/* hobbies */}
        <ul
          role="list"
          className="flex items-center justify-center gap-10 flex-wrap mt-10"
        >
          {hobbies.items.map((item) => (
            <motion.li
              whileHover={{
                scale: 1.05,
              }}
              key={item.id}
            >
              <article className="relative">
                <div className="size-44 flex items-center justify-center bg-background-secondary">
                  <Image
                    src={item.icon}
                    alt=""
                    width={100}
                    height={100}
                    className="w-[55px] h-auto object-cover"
                  />
                </div>

                {/* left line */}
                <div className="w-4 h-[85%] absolute top-0 left-0 bg-[#3E3E3E]"></div>
                {/* top line */}
                <div className="w-[30%] h-4 absolute top-0 left-0 bg-[#3E3E3E]"></div>

                {/* Accessible label */}
                <h3 className="sr-only">{item.name.replace("-", " ")}</h3>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
