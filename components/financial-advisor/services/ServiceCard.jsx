import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export default function ServiceCard({ item, isOpen, onToggle, fadeInUp }) {
  return (
    <motion.article
      variants={fadeInUp}
      className="bg-background-secondary p-3 md:p-7 max-w-5xl"
    >
      <motion.button
        onClick={() => onToggle(item.id)}
        animate={{ marginBottom: isOpen ? 20 : 0 }}
        transition={{
          marginBottom: {
            duration: 0.4,
            ease: "easeInOut",
            delay: isOpen ? 0 : 0.2,
          },
        }}
        className="w-full flex items-center justify-between gap-5 md:gap-15"
      >
        <div className="flex items-center gap-4 md:gap-7">
          <div
            aria-hidden
            className="size-[50px] md:size-[72px] bg-primary md:rounded-full flex items-center justify-center shrink-0"
          >
            <Image
              src={item.icon}
              alt=""
              width={50}
              height={50}
              className="w-6 md:w-[33px] h-auto object-cover"
            />
          </div>
          <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-medium capitalize">
            {item.name}
          </h3>
        </div>
        <div
          className={`size-10 md:size-[60px] border flex items-center justify-center cursor-pointer hover:border-border-primary group shrink-0 ${isOpen ? "border-border-primary" : "border-border-primary/40"}`}
        >
          <Image
            src="/assets/financial-advisor/icons/services/arrow-down-icon.svg"
            alt="arrow icon"
            width={30}
            height={30}
            className={`w-[18px] h-auto object-cover group-hover:rotate-90 transition-all duration-200 ${isOpen ? "rotate-90" : "rotate-0"}`}
          />
        </div>
      </motion.button>
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
    </motion.article>
  );
}
