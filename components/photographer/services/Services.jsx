"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import InViewAnimator from "@/components/InViewAnimator";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ServicesCard({ servicesData }) {
  return (
    <InViewAnimator
      variants={staggerContainer}
      className="mt-15 flex flex-wrap items-center justify-center gap-7"
    >
      {servicesData.map((service) => (
        <motion.article
          variants={fadeInUp}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.1 },
          }}
          key={service.id}
          className="bg-background-neutral p-4 md:p-10 space-y-7 w-full md:w-[400px]"
        >
          <div>
            <Image
              width={50}
              height={50}
              src={service.icon}
              alt=""
              className="w-[30px] h-auto object-cover"
            />
          </div>
          <h3 className="text-xl font-medium text-text-primary">
            {service.name}
          </h3>
          <ul className="space-y-3 list-disc list-inside">
            {service.description.map((desc) => (
              <li
                key={desc}
                className="text-base font-normal text-text-secondary font-poppins"
              >
                {desc}
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </InViewAnimator>
  );
}
