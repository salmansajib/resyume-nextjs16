"use client";
import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import PortfolioItem from "./PortfolioItem";
import Lightbox from "@/components/Lightbox";

export default function PortfolioGallery({ portfolioData }) {
  const { categories, entries } = portfolioData;

  const [active, setActive] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const filtered =
    active === "all"
      ? entries
      : entries.filter((i) => i.categories.includes(active));

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
              className="relative text-lg font-normal uppercase py-2 px-6 cursor-pointer transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-transparent"
              onClick={() => setActive(category.id)}
              aria-pressed={isActive}
              aria-label={`Filter by ${category.label}`}
            >
              {category.label}

              {/* Active state indicator borders */}
              <AnimatePresence>
                {isActive && (
                  <>
                    {/* top border */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "50%" }}
                      exit={{ width: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute top-0 left-0 h-px bg-primary"
                      aria-hidden="true"
                    />
                    {/* left border */}
                    <motion.div
                      className="absolute top-1/2 left-0 w-px bg-primary -translate-y-1/2"
                      initial={{ height: 0 }}
                      animate={{ height: "100%" }}
                      exit={{ height: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: 0.1,
                      }}
                      aria-hidden="true"
                    />
                    {/* bottom border */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "50%" }}
                      exit={{ width: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute bottom-0 left-0 h-px bg-primary"
                      aria-hidden="true"
                    />
                  </>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </nav>

      {/* portfolio image and video grid with stagger animation */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        key={active} // Re-trigger animation when filter changes
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
