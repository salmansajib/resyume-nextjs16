import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function ServiceCard({ item, fadeInUp }) {
  return (
    <motion.article
      variants={fadeInUp}
      className="border border-[#F9DAFF] flex flex-col items-center gap-4 px-3 py-15 rounded-xl group hover:bg-background-primary transition-all duration-150"
    >
      <div className="size-20 border border-[#F9DAFF] group-hover:border-transparent group-hover:bg-[#F2E5FF] rounded-full flex items-center justify-center mb-5 transition-all duration-150">
        <Image
          src={item.icon}
          alt={`${item.name} icon`}
          width={50}
          height={50}
          className="w-[37px] h-10 object-cover"
        />
      </div>
      <h3 className="text-2xl font-syne font-bold capitalize">{item.name}</h3>
      <ul className="space-y-5">
        {item.points.map((point, index) => (
          <li key={index} className="flex items-center gap-4">
            <Image
              src="/assets/hair-expert/images/services-list-marker-image.png"
              alt=""
              width={20}
              height={20}
              className="w-[19px] h-auto object-cover"
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
