"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import PortfolioItem from "./PortfolioItem";
import Lightbox from "@/components/Lightbox";

export default function PortfolioGallery({ portfolioData }) {
  const { categories, items } = portfolioData;

  const [active, setActive] = useState("html-css");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  // filter items
  const filtered =
    active === "html-css"
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
            <motion.button
              key={category.id}
              onClick={() => setActive(category.id)}
              whileHover={{
                scale: 1.05,
                transition: {
                  duration: 0.01,
                },
              }}
              whileTap={{
                scale: 0.9,
                transition: {
                  duration: 0.01,
                },
              }}
              aria-pressed={isActive}
              aria-label={`Filter by ${category.label}`}
              className={`px-12 py-3 rounded-lg font-rajdhani text-xl font-bold capitalize transition-all duration-200 ease-in-out cursor-pointer ${
                isActive
                  ? "bg-linear-to-r from-gradient-primary-start to-gradient-primary-end text-text-primary"
                  : "bg-background-secondary text-text-secondary ring-1 ring-primary/30"
              }`}
            >
              {category.label}
            </motion.button>
          );
        })}
      </nav>

      {/* portfolio images */}
      <Link href="/">
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
          className="mt-10 grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-5"
          key={active}
        >
          {filtered.map((item, index) => (
            <motion.div
              key={item.id}
              className=""
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
      </Link>

      {/* Empty state message */}
      {filtered.length === 0 && (
        <div className="mt-10 text-center">
          <p className="text-lg text-text-primary">
            There are no items in this category.
          </p>
        </div>
      )}

      {/* Empty state message */}
      {filtered.length === 0 && (
        <div className="mt-10 text-center">
          <p className="text-lg text-text-primary">
            There are no items in this category.
          </p>
        </div>
      )}
    </div>
  );
}
