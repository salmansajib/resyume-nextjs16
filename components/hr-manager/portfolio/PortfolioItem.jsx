import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export default function PortfolioItem({ item, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-linear-to-br from-[#FFDDDD]/6 to-[#E0BEBE]/20 w-full h-[450px] p-6 rounded-lg group cursor-pointer overflow-hidden group flex flex-col items-center sm:block"
    >
      {/* image */}
      <div className="relative w-full h-full group-hover:h-[75%] rounded-md overflow-hidden transition-all duration-300">
        <Image
          src={item.src}
          alt=""
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
        {/* open image icon */}
        {item.type === "image" && (
          <div className="absolute sm:opacity-0 group-hover:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[57px] rounded-full bg-[#d9d9d9]/38 flex items-center justify-center transition-all duration-300">
            <Image
              src={item.icon}
              alt="icon"
              width={50}
              height={50}
              className="w-[41px] h-auto"
            />
          </div>
        )}
        {/* open video icon */}
        {(item.type === "video" ||
          item.type === "youtube" ||
          item.type === "vimeo") && (
          <div className="sm:opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/assets/hr-manager/icons/video-play-icon.svg"
              alt="video play icon"
              width={50}
              height={50}
              className="w-10 h-auto"
            />
          </div>
        )}
      </div>

      {/* Title & Description with EXIT animation */}
      <AnimatePresence>
        <motion.div
          key="content"
          className="mt-5 space-y-1 text-left"
          variants={{
            rest: { opacity: 0, y: 20 },
            hover: { opacity: 1, y: 0 },
          }}
          initial="rest"
          animate="hover"
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
        >
          <h3 className="font-poppins text-2xl font-medium text-primary">
            {item.title}
          </h3>
          <p className="text-secondary">{item.description}</p>
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
