import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function ServiceCard({ item }) {
  return (
    <motion.article
      whileHover={{
        scale: 1.03,
      }}
      className="space-y-4 bg-background-primary/50 px-10 py-15"
      style={{
        clipPath:
          "polygon(0% 0%,calc(100% - 50px) 0%,100% 50px,100% 100%,50px 100%,0% calc(100% - 50px))",
      }}
    >
      <div className="size-[65px] bg-linear-to-br from-[#D45B2D]/50 via-[#D45B2D]/0 to-[#D45B2D]/50 rounded-full flex items-center justify-center">
        <Image
          src={item.icon}
          alt={`${item.name} icon`}
          width={50}
          height={50}
          className={`${item.id === "thermal-systems-design" ? "w-[25px]" : "w-10"} h-auto object-cover`}
        />
      </div>
      <h3 className="font-chakraPetch text-2xl capitalize">{item.name}</h3>
      <ul className="space-y-3 list-disc marker:text-text-secondary marker:text-2xl max-w-[30ch] relative ml-6">
        {item.points.map((point, index) => (
          <li
            key={`${item.id}-point-${index}`}
            className="text-text-secondary mx-auto relative z-10"
          >
            {point}
          </li>
        ))}
        {/* left line */}
        <div
          aria-hidden
          className="hidden md:block absolute top-[15px] bottom-10 -left-5 w-px bg-text-secondary/30"
        ></div>
      </ul>
    </motion.article>
  );
}
