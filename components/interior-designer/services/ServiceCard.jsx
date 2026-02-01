import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

export default function ServiceCard({ item }) {
  return (
    <motion.article
      whileHover={{
        scale: 1.03,
      }}
      className="relative"
    >
      <div className="bg-background-primary w-[86px] h-[92px] flex items-center justify-center rounded-xl shadow-[0_0_13px_rgba(0,0,0,0.11)] ml-15 -mb-10 relative z-10">
        <Image
          src={item.icon}
          alt={`${item.name} icon`}
          width={50}
          height={50}
          className="w-[45px] h-[45px] object-cover"
        />
      </div>
      <div className="bg-background-primary px-10 py-10 h-auto min-h-[400px] flex gap-7 flex-col justify-center rounded-2xl">
        <h3 className="font-playfairDisplay font-medium text-xl text-primary capitalize">
          {item.name}
        </h3>
        <ul className="space-y-3">
          {item.points.map((point, index) => (
            <li
              key={index}
              className="text-text-secondary flex items-center gap-4"
            >
              <Image
                src="/assets/interior-designer/images/services-list-marker-image.png"
                alt=""
                width={20}
                height={20}
                className="w-[19px] h-auto object-cover"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
