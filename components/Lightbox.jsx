"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export default function Lightbox({
  items = [],
  startIndex = 0,
  onClose = () => {},
}) {
  const [index, setIndex] = useState(startIndex);
  const current = items[index];

  // Keyboard Controls
  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight")
        setIndex((i) => Math.min(i + 1, items.length - 1));
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(i - 1, 0));
    },
    [items.length, onClose],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  if (!current) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="max-w-5xl w-full h-full md:h-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-3 top-3 z-20 rounded-md bg-white/10 backdrop-blur size-10 flex items-center justify-center text-text-primary cursor-pointer hover:text-red-200 transition-colors duration-150"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x-icon lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

          {/* Prev / Next */}
          {items.length > 1 && (
            <>
              <button
                onClick={() => setIndex((i) => Math.max(i - 1, 0))}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/10 p-2 text-white"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-left-icon lucide-chevron-left"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>

              <button
                onClick={() =>
                  setIndex((i) => Math.min(i + 1, items.length - 1))
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/10 p-2 text-white"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right-icon lucide-chevron-right"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </>
          )}

          {/* Image or Video */}
          <div className="bg-background-secondary/60 backdrop-blur-sm rounded-md overflow-hidden w-full h-full flex items-center justify-center">
            {current.type === "image" ? (
              <div className="relative w-full h-[70vh] md:h-[60vh]">
                <Image
                  src={current.src}
                  alt={current.alt || current.title}
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <video
                src={current.src}
                controls
                className="w-full h-[70vh] md:h-[60vh] object-contain"
              />
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
