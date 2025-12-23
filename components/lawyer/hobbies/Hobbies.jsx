import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

export default function Hobbies({ item, fadeInUp }) {
  return (
    <motion.ul
      variants={fadeInUp}
      className="relative bg-linear-to-b from-[#4f4f4f]/69 to-[#1c1c1c]/86 size-[127px] flex items-center justify-center rounded-full"
    >
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
    </motion.ul>
  );
}
