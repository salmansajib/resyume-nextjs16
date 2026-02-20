"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function HobbiesSection({ data }) {
  const { hobbies } = data;

  return (
    <section
      aria-labelledby="hobbies-heading"
      className="bg-[url(/assets/motion-designer/images/bg-img-hobbies.png)] bg-no-repeat bg-center bg-cover"
    >
      <div className="w-full max-w-5xl mx-auto px-4 py-20">
        {/* title and subtitle */}
        <div className="flex flex-col gap-2 items-center justify-center">
          <h2
            id="hobbies-heading"
            className="font-exo2 font-bold capitalize text-text-primary text-[clamp(2.5rem,5vw,3.8rem)] leading-none"
          >
            {hobbies.title}
          </h2>
          <h3 className="leading-12 lg:leading-20 font-exo2 font-bold capitalize text-[clamp(2.5rem,5vw,3.8rem)] text-center max-w-max bg-linear-to-r from-gradient-primary-start to-gradient-primary-end bg-clip-text text-transparent">
            {hobbies.subtitle}
          </h3>
        </div>

        {/* hobbies */}
        <ul className="flex flex-wrap items-center gap-10 justify-center mt-10">
          {hobbies.items.map((item) => (
            <motion.li
              key={item.id}
              whileHover={{
                scale: 1.05,
              }}
              className="bg-background-secondary w-50 h-40 flex flex-col gap-6 items-center justify-center rounded-2xl ring-1 ring-primary/30"
            >
              <div>
                <Image
                  src={item.icon}
                  alt={`${item.name} icon`}
                  width={100}
                  height={100}
                  className="w-[70px] h-auto object-cover"
                />
              </div>
              <h3 className="leading-none uppercase font-medium">
                {item.name}
              </h3>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
