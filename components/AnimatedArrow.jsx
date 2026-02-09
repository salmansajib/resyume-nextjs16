"use client";
import { motion } from "motion/react";

export default function AnimatedIcon({ size = 33, bg = "#176F4E", children }) {
  const iconOutVariants = {
    initial: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
    hover: {
      y: 12,
      scale: 0.7,
      opacity: 0,
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  const iconInVariants = {
    initial: {
      y: -12,
      scale: 0.7,
      opacity: 0,
    },
    hover: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      aria-hidden
      className="relative overflow-hidden flex items-center justify-center"
      style={{
        width: size,
        height: size,
        backgroundColor: bg,
      }}
    >
      {/* exiting icon */}
      <motion.div variants={iconOutVariants} className="absolute">
        {children}
      </motion.div>

      {/* entering icon */}
      <motion.div variants={iconInVariants} className="absolute">
        {children}
      </motion.div>
    </div>
  );
}
