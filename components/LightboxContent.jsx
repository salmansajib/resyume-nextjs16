"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export default function LightboxContent({
  items = [],
  startIndex = 0,
  onClose = () => {},
}) {
  const [index, setIndex] = useState(startIndex);
  const [direction, setDirection] = useState(0);

  const videoRef = useRef(null);

  const current = items[index];
  const isFirst = index === 0;
  const isLast = index === items.length - 1;

  // ✅ Compute direction INSIDE state updater
  const goNext = useCallback(() => {
    setIndex((prev) => {
      if (prev >= items.length - 1) return prev;
      setDirection(1);
      return prev + 1;
    });
  }, [items.length]);

  const goPrev = useCallback(() => {
    setIndex((prev) => {
      if (prev <= 0) return prev;
      setDirection(-1);
      return prev - 1;
    });
  }, []);

  // Pause self-hosted video on slide change
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [index]);

  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && !isLast) goNext();
      if (e.key === "ArrowLeft" && !isFirst) goPrev();
    },
    [goNext, goPrev, onClose, isFirst, isLast],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  if (!current) return null;

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -200 : 200,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <AnimatePresence custom={direction}>
      <motion.div
        className="fixed inset-0 z-9999 flex items-center justify-center p-6 bg-black/60 backdrop-blur"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="max-w-5xl w-full h-full md:h-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-20 rounded-md bg-white/10 backdrop-blur size-10 flex items-center justify-center text-white hover:text-red-300 transition"
          >
            ✕
          </button>

          {/* Navigation */}
          {items.length > 1 && (
            <>
              <button
                onClick={goPrev}
                disabled={isFirst}
                className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/10 p-3 text-white ${
                  isFirst
                    ? "opacity-30 pointer-events-none"
                    : "hover:bg-white/20"
                }`}
              >
                ‹
              </button>

              <button
                onClick={goNext}
                disabled={isLast}
                className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/10 p-3 text-white ${
                  isLast
                    ? "opacity-30 pointer-events-none"
                    : "hover:bg-white/20"
                }`}
              >
                ›
              </button>
            </>
          )}

          {/* Media */}
          <div className="bg-background-secondary/60 backdrop-blur-sm rounded-md overflow-hidden w-full h-full flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35 }}
                className="w-full h-full flex items-center justify-center"
              >
                {current.type === "image" && (
                  <div className="relative w-full h-[70vh] md:h-[60vh]">
                    <Image
                      src={current.src}
                      alt={current.alt || ""}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}

                {current.type === "video" && (
                  <video
                    ref={videoRef}
                    src={current.src}
                    controls
                    autoPlay
                    className="w-full h-[70vh] md:h-[60vh] object-contain"
                  />
                )}

                {current.type === "youtube" && (
                  <iframe
                    src={`https://www.youtube.com/embed/${current.videoId}?autoplay=1&rel=0`}
                    className="w-full h-[70vh] md:h-[60vh]"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                )}

                {current.type === "vimeo" && (
                  <iframe
                    src={`https://player.vimeo.com/video/${current.videoId}?autoplay=1`}
                    className="w-full h-[70vh] md:h-[60vh]"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
