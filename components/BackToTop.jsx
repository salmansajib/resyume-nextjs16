"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const hideTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 100) {
        setIsVisible(false);
        return;
      }

      setIsVisible(true);

      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }

      hideTimeoutRef.current = setTimeout(() => {
        // 👇 Prevent hiding while hovering
        if (!isHovered) {
          setIsVisible(false);
        }
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, [isHovered]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          onMouseEnter={() => {
            setIsHovered(true);
            if (hideTimeoutRef.current) {
              clearTimeout(hideTimeoutRef.current);
            }
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 z-50 size-10 rounded-full flex items-center justify-center backdrop-blur-md bg-neutral-900/90 text-white ring-2 ring-white shadow-lg"
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
