import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export default function ServiceCard({ item, isOpen, onToggle }) {
  return (
    <article className="bg-background-secondary p-3 md:p-7 max-w-5xl">
      <motion.div
        animate={{ marginBottom: isOpen ? 20 : 0 }}
        transition={{
          marginBottom: {
            duration: 0.4,
            ease: "easeInOut",
            delay: isOpen ? 0 : 0.2,
          },
        }}
        className="flex items-center justify-between gap-5 md:gap-15"
      >
        <div className="flex items-center gap-4 md:gap-7">
          <div
            aria-hidden
            className="size-[50px] md:size-[72px] bg-primary md:rounded-full flex items-center justify-center"
          >
            <Image
              src={item.icon}
              alt=""
              width={50}
              height={50}
              className="w-5 md:w-[33px] h-auto object-cover"
            />
          </div>
          <h3 className="text-[clamp(0.95rem,2vw,1.5rem)] font-medium capitalize break-all">
            {item.name}
          </h3>
        </div>
        <button
          onClick={() => onToggle(item.id)}
          className="size-10 md:size-[60px] border border-border-primary/40 flex items-center justify-center cursor-pointer hover:border-border-primary group"
        >
          <Image
            src="/assets/financial-advisor/icons/services/arrow-down-icon.svg"
            alt="arrow icon"
            width={30}
            height={30}
            className={`w-[18px] h-auto object-cover group-hover:rotate-90 transition-all duration-200 ${isOpen ? "rotate-90" : "rotate-0"}`}
          />
        </button>
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{
              height: { duration: 0.4, ease: "easeInOut", delay: 0.2 },
            }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 0.2 },
              }}
              className="text-text-secondary max-w-[60ch]"
            >
              {item.description}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
