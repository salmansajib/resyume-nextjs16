"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Arrows slide up continuously
  const arrowVariants = {
    animate: (i) => ({
      y: [0, -3, 0], // subtle slide up
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        delay: i * 0.15, // staggered
        ease: "easeInOut",
      },
    }),
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          whileHover={{
            scale: 1.12,
            transition: {
              type: "spring",
              duration: 0.2,
              stiffness: 400,
              damping: 15,
            },
          }}
          whileTap={{
            scale: 0.9,
            transition: {
              type: "spring",
              duration: 0.2,
              stiffness: 600,
              damping: 20,
            },
          }}
          className="fixed bottom-8 right-8 z-50 size-10 rounded-full flex items-center justify-center backdrop-blur-md bg-neutral-900/90 text-white ring-2 ring-white shadow-[0_0_20px_rgba(255,255,255,0.25)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevrons-up-icon lucide-chevrons-up"
          >
            <path d="m17 11-5-5-5 5" />
            <path d="m17 18-5-5-5 5" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
