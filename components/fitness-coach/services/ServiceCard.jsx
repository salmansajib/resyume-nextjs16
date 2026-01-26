import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function ServiceCard({ item }) {
  return (
    <motion.article
      whileHover={{
        scale: 1.04,
      }}
      className="relative"
    >
      <div
        aria-hidden
        className="relative z-10 size-25 rounded-full bg-background-primary flex items-center justify-center border-10 border-background-secondary ml-10 -mb-10"
      >
        <Image
          src={item.icon}
          alt=""
          width={50}
          height={50}
          className="w-[33px] h-auto object-cover"
        />
      </div>
      <div className="bg-background-primary pl-12 pr-7 py-15 relative">
        <div className="space-y-3">
          <h3 className="font-teko font-medium text-2xl">{item.name}</h3>
          <p className="max-w-[30ch] text-text-secondary leading-9">
            {item.description}
          </p>
        </div>
        {/* left line */}
        <div className="bg-[#353535] w-4 h-[80%] absolute top-0 left-0"></div>
        {/* top line */}
        <div className="bg-[#353535] w-[15%] h-4 absolute top-0 left-0"></div>
      </div>
    </motion.article>
  );
}
