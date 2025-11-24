"use client";

import React from "react";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function ServicesSection({ data }) {
  const { services } = data;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Individual interest item variants
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      aria-labelledby="services-heading"
      className="px-4 py-32 bg-background-secondary"
    >
      <div
        id="services-heading"
        className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-20 lg:gap-30"
      >
        {/* title and subtitle */}
        <div className="space-y-3 text-center lg:text-left">
          <h2 className="text-lg font-medium text-primary uppercase">
            {services.title}
          </h2>
          <h3 className="text-3xl md:text-4xl font-medium text-text-primary leading-11 lg:max-w-[15ch]">
            {services.subtitle}
          </h3>
        </div>

        {/* services */}
        <motion.div
          role="list"
          aria-label="Available services"
          className="grid grid-cols-1 sm:grid-cols-2 gap-15 lg:gap-x-30"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.entries.map((service) => (
            <motion.article
              variants={itemVariants}
              key={service.id}
              role="listitem"
              className="space-y-3 lg:relative"
            >
              {/* Icon with accessible name */}
              <div className="size-12 flex items-center justify-center bg-background-primary rounded-md lg:absolute -top-2 -left-17">
                <Image
                  src={service.icon}
                  alt={`${service.name} icon`}
                  width={30}
                  height={30}
                  className="w-[30px] h-auto"
                />
              </div>

              {/* service heading */}
              <h3 className="font-medium text-primary text-2xl">
                {service.name}
              </h3>

              {/* service description */}
              <p className="text-base font-normal text-text-dimmed max-w-[40ch] sm:max-w-[30ch]">
                {service.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
