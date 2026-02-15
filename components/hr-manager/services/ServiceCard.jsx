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
      className="flex flex-col items-center gap-7 bg-linear-to-b from-[#989494]/15 to-[#000000]/15 px-10 py-15 rounded-3xl backdrop-blur-[9px] border border-primary/5"
    >
      <div aria-hidden>
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
      <ul className="space-y-2">
        {item.points.map((point, index) => (
          <li
            key={index}
            className="flex items-baseline gap-4 text-pretty text-secondary text-lg"
          >
            <span className="size-2.5 rounded-full bg-linear-to-b from-gradient-primary-start to-gradient-primary-end shrink-0"></span>
            {point}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
