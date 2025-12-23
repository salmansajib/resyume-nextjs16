import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

export default function Hobbies({ item, fadeInUp }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="relative p-px bg-linear-to-br from-[#6C6C6C]/69 to-[#4C4C4C]/86 rounded-full"
    >
      <ul className="relative z-10 bg-linear-to-b from-[#4f4f4f]/69 to-[#1c1c1c]/86 bg-background-primary size-[127px] flex items-center justify-center rounded-full">
        <li>
          <article>
            <Image
              src={item.icon}
              alt={`${item.name} icon`}
              width={100}
              height={100}
              className="w-[50px] h-auto"
            />
          </article>
        </li>
      </ul>
    </motion.div>
  );
}
