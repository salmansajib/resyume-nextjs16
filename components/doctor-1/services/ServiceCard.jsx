import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function ServiceCard({ item, fadeInUp }) {
  return (
    <motion.article
      variants={fadeInUp}
      className="border border-border-primary w-full h-full min-h-[464px] flex flex-col gap-10 items-center justify-center px-10 py-10 rounded-[10px] md:nth-1:rounded-tl-[150px] md:nth-2:rounded-tr-[100px] lg:nth-2:rounded-t-[100px] lg:nth-3:rounded-tr-[150px] lg:nth-4:rounded-bl-[150px] md:nth-5:rounded-bl-[100px] lg:nth-5:rounded-b-[100px] md:nth-6:rounded-br-[150px] hover:border-primary transition-all duration-150"
    >
      {/* service name */}
      <h3 className="leading-none text-2xl font-medium font-ebGaramond max-w-[12ch] mx-auto text-center capitalize">
        {item.name}
      </h3>
      {/* services */}
      <ul className="space-y-5 list-disc marker:text-primary marker:text-2xl relative">
        {item.points.map((point, index) => (
          <li
            key={`${item.id}-point-${index}`}
            className="text-text-secondary max-w-[20ch] mx-auto"
          >
            {point}
          </li>
        ))}
        <div className="absolute top-[15px] bottom-[60px] -left-5 w-px bg-text-primary"></div>
      </ul>
      {/* service icon */}
      <div className="size-[76px] rounded-tr-3xl bg-primary flex items-center justify-center mx-auto">
        <Image
          src={item.icon}
          alt={`${item.name} icon`}
          width={70}
          height={70}
          className="w-[50px] h-auto object-cover"
        />
      </div>
    </motion.article>
  );
}
