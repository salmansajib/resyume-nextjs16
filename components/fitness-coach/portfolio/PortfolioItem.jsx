import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export default function PortfolioItem({ item, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full h-[550px] group cursor-pointer overflow-hidden flex flex-col items-center sm:block"
    >
      <div className="w-full h-full relative">
        {/* image */}
        <div className="relative z-20 w-full h-full">
          <Image
            src={item.src}
            alt=""
            width={500}
            height={500}
            priority
            quality={100}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title & Description - positioned absolutely over the image */}
        <div className="hidden absolute w-full h-full z-30 top-0 left-0 group-hover:flex flex-col justify-end p-10 bg-linear-to-t from-black/70 to-transparent to-60% transition-all duration-300">
          <h3 className="font-teko text-2xl font-medium capitalize text-left">
            {item.title}
          </h3>
          <p className="text-text-secondary mt-2 max-w-[70ch] text-left">
            {item.description}
          </p>
        </div>
      </div>
    </button>
  );
}
