"use client";
import React from "react";
import { useState } from "react";
import PortfolioItem from "./PortfolioItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioGallery({ protfolioData }) {
  const { categories, entries } = protfolioData;

  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? entries
      : entries.filter((i) => i.categories.includes(active));

  // Animation variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each item
        delayChildren: 0.1, // Initial delay before first item
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1, // Reverse order on exit
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.3,
      },
    },
  };

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
              className={`bg-linear-to-b from-[#4F4F4F] to-[#1c1c1c] px-12 py-3 rounded-full text-xl font-medium font-taviraj uppercase transition-colors duration-200 cursor-pointer hover:scale-105 ${
                isActive
                  ? "bg-linear-to-b from-primary to-primary text-text-primary"
                  : "bg-background-neutral/23"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </nav>

      {/* portfolio image and video grid */}
      <div className="mt-10 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={active} // Key changes trigger re-animation
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={32}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              speed={1000}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 32,
                },
              }}
            >
              {filtered.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <motion.div variants={itemVariants}>
                    <PortfolioItem item={item} />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </AnimatePresence>

        {/* custom navigation buttons */}
        {/* prev button */}
        <button
          className="swiper-button-prev-custom p-1 rounded-sm text-2xl font-medium transition-colors duration-150 cursor-pointer absolute z-10 top-30 left-3 backdrop-blur-md hover:bg-primary hover:text-background-primary"
          aria-label="previous-slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
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
        {/* next button */}
        <button
          className="swiper-button-next-custom p-1 rounded-sm text-2xl font-medium transition-colors duration-150 cursor-pointer absolute z-10 top-30 right-3 backdrop-blur-md hover:bg-primary hover:text-background-primary"
          aria-label="next-slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
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
      </div>
    </div>
  );
}
