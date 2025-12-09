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

      {/* portfolio image and video grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10">
        {filtered.map((item, index) => (
          <PortfolioItem
            key={item.id}
            item={item}
            onClick={() => {
              setLightboxOpen(true);
              setStartIndex(index);
            }}
          />
        ))}
      </div>

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
