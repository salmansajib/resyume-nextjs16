"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion } from "motion/react";

export default function PortfolioGrid({ portfolioData, activeCategory }) {
  const ref = useRef(null);
  const [hoveredId, setHoveredId] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      key={activeCategory}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 min-h-[400px]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      layout
    >
      {portfolioData.length === 0 ? (
        <motion.div
          className="col-span-full flex items-center justify-center py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-xl text-text-secondary text-center">
            No projects found in this category.
          </p>
        </motion.div>
      ) : (
        portfolioData.map((portfolio) => (
          <motion.div
            key={portfolio.id}
            variants={itemVariants}
            className="overflow-hidden"
          >
            <motion.a
              href="/"
              onMouseEnter={() => setHoveredId(portfolio.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="block overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Image
                src={portfolio.image}
                alt="portfolio image"
                width={500}
                height={500}
                className="w-[300] h-auto"
              />
            </motion.a>
          </motion.div>
        ))
      )}
    </motion.div>
  );
}
