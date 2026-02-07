import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function ServiceCard({ item, fadeInUp }) {
  return (
    <motion.article
      variants={fadeInUp}
      className="w-full sm:w-auto border border-[#333333] p-3 rounded-xl hover:border-primary transition-all duration-150"
    >
      <div className="bg-black w-full sm:min-w-[370px] min-h-[395px] p-7 flex flex-col gap-7 items-start justify-center rounded-lg">
        <div
          aria-hidden
          className="size-[84px] bg-background-secondary rounded-full flex items-center justify-center"
        >
          <Image
            src={item.icon}
            alt=""
            width={50}
            height={50}
            className="w-10 h-auto object-cover"
          />
        </div>
        <h3 className="leading-none font-poppins text-xl font-semibold max-w-[20ch]">
          {item.name}
        </h3>
        <ul className="space-y-3">
          {item.points.map((point, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-text-secondary"
            >
              <Image
                src="/assets/travel-agent/images/services/services-list-style-image.png"
                alt=""
                width={25}
                height={25}
                aria-hidden
                className="w-6 h-auto object-cover"
              />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
