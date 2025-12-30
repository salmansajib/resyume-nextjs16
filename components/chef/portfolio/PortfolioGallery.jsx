"use client";
import React, { act } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import PortfolioItem from "./PortfolioItem";
import Lightbox from "@/components/Lightbox";

export default function PortfolioGallery({ portfolioData }) {
  const { categories, items } = portfolioData;

  const [active, setActive] = useState("explorer");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  // filter items
  const filtered =
    active === "explorer"
      ? items
      : items.filter((item) => item.categories.includes(active));

  return (
    <div className="mt-15">
      {/* category */}
      <nav
        className="flex items-center flex-wrap justify-center gap-5"
        aria-label="Portfolio category filters"
      >
        {categories.map((category) => {
          const isActive = active === category.id;

          return (
            <button
              key={category.id}
              onClick={() => setActive(category.id)}
              aria-pressed={isActive}
              aria-label={`Filter by ${category.label}`}
              className={`px-12 py-3 border-[0.5px] border-[#E6E6E6] rounded-full text-xl font-jost uppercase transition-colors duration-200 ease-in-out cursor-pointer hover:scale-105 ${
                isActive
                  ? "bg-primary text-background-secondary border-transparent"
                  : "bg-transparent text-text-secondary"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </nav>

      {/* portfolio images */}
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
        className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7"
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
