import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function ServiceCard({ item, fadeInUp }) {
  return (
    <motion.article
      variants={fadeInUp}
      className="w-full h-full p-4 border border-primary relative"
    >
      <div className="bg-background-secondary px-10 flex gap-4 flex-col justify-center items-start shadow-[0_0_8px_rgba(237,67,48,29%)] h-[600px] rounded-4xl relative z-10">
        <div>
          <Image
            width={300}
            height={300}
            src={item.image_url}
            alt={`${item.name} image`}
            className="w-[200px] object-cover"
          />
        </div>
        <h3 className="text-[34px] text-primary font-semibold">{item.name}</h3>
        <p className="font-jost text-xl text-text-secondary">
          {item.description}
        </p>
      </div>

      {/* decorative elements */}
      <div className="absolute top-0 left-0 w-[67px] h-[148px] bg-primary"></div>
      <div className="absolute bottom-0 right-0 w-[67px] h-[148px] bg-primary"></div>
    </motion.article>
  );
}
