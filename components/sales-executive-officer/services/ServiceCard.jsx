import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function ServiceCard({ item }) {
  return (
    <motion.article
      whileHover={{
        scale: 1.03,
      }}
      className="bg-background-primary w-full p-7 flex flex-col items-center gap-3 rounded-2xl"
    >
      <div aria-hidden>
        <Image
          src={item.image}
          alt=""
          width={500}
          height={500}
          className="w-[250px] h-[200px] object-cover"
        />
      </div>
      <h3 className="font-medium text-2xl capitalize self-start">
        {item.name}
      </h3>
      <p className="text-text-secondary self-start">{item.description}</p>
    </motion.article>
  );
}
