import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

export default function ServiceCard({ item, fadeInUp }) {
  return (
    <motion.article
      variants={fadeInUp}
      className="bg-background-primary hover:bg-background-neutral group p-5 w-full h-auto min-h-[360px] flex gap-5 flex-col items-center justify-center rounded-2xl transition-all duration-150"
    >
      <div
        aria-hidden
        className="size-19.5 bg-[#FDE7D7] rounded-full flex items-center justify-center"
      >
        <Image
          src={item.icon}
          alt=""
          width={40}
          height={40}
          className="w-[35px] h-auto object-cover"
        />
      </div>
      <h3 className="font-medium text-lg uppercase text-center group-hover:text-background-primary">
        {item.name}
      </h3>
      <ul className="space-y-3 relative">
        {item.points.map((point, index) => (
          <li
            key={index}
            className="text-text-secondary relative group-hover:text-background-primary"
          >
            {point}
            <span className="size-2 bg-background-neutral group-hover:bg-background-primary rounded-full absolute top-1/2 -translate-y-1/2 -left-[23.5px]"></span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
