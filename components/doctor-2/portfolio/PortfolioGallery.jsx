"use client";
import React from "react";
import { useState } from "react";
import { motion } from "motion/react";
import Lightbox from "@/components/Lightbox";
import PortfolioItem from "./PortfolioItem";

export default function PortfolioGallery({ portfolioData }) {
  const { categories, items } = portfolioData;

  const [active, setActive] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  // filter items
  const filtered =
    active === "all"
      ? items
      : items.filter((item) => item.categories.includes(active));

  return (
    <div className="mt-10">
      {/* category */}
      <nav
        className="flex items-center flex-wrap justify-center gap-5"
        aria-label="Portfolio category filters"
      >
        {categories.map((category) => {
          const isActive = active === category.id;

          return (
            <motion.button
              key={category.id}
              onClick={() => setActive(category.id)}
              aria-pressed={isActive}
              aria-label={`Filter by ${category.label}`}
              className={`relative px-12 py-3 rounded-md text-base uppercase ease-in-out cursor-pointer font-semibold ${
                isActive
                  ? "bg-accent text-background-primary"
                  : "bg-[#E5F6F4] text-primary"
              }`}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              {category.label}
            </motion.button>
          );
        })}
      </nav>

      {/* achievement image and video */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="w-full mt-10 grid min-[760px]:grid-cols-2 min-[1200px]:grid-cols-3 gap-5"
        key={active}
      >
        {filtered.map((item, index) => (
          <motion.div
            key={item.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: "easeOut",
                },
              },
            }}
          >
            <PortfolioItem
              item={item}
              onClick={() => {
                setLightboxOpen(true);
                setStartIndex(index);
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Empty state message */}
      {filtered.length === 0 && (
        <div className="mt-10 text-center">
          <p className="text-lg text-text-primary">
            There are no items in this category.
          </p>
        </div>
      )}

      {/* Lightbox  */}
      {lightboxOpen && (
        <Lightbox
          items={filtered}
          startIndex={startIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
}
