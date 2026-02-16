import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function ServiceCard({ item, fadeInUp }) {
  return (
    <motion.article
      whileHover={{
        scale: 1.03,
      }}
      variants={fadeInUp}
      className="flex flex-col items-center gap-7 bg-linear-to-b from-[#74708A]/41 to-[373543]/22 px-10 py-15 rounded-xl backdrop-blur-[9px] group ring-1 ring-text-primary/10"
    >
      <div aria-hidden className="size-25 flex items-center justify-center">
        <Image
          src={item.icon}
          alt=""
          width={100}
          height={100}
          className="w-[55px] h-auto object-cover"
        />
      </div>
      <h3 className="text-2xl font-poppins font-medium text-center leading-none">
        {item.name}
      </h3>
      <ul className="space-y-3">
        {item.points.map((point, index) => (
          <li
            key={index}
            className="flex items-baseline gap-4 text-pretty text-text-secondary group-hover:text-text-primary transition-all duration-200"
          >
            <span className="size-2.5 rounded-full bg-text-secondary group-hover:bg-text-primary transition-all duration-200 shrink-0"></span>
            {point}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
