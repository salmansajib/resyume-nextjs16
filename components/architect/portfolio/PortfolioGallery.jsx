"use client";
import React, { act } from "react";
import { useState } from "react";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import PortfolioItem from "./PortfolioItem";
import Lightbox from "@/components/Lightbox";

export default function PortfolioGallery({ portfolioData }) {
  const { categories, items } = portfolioData;

  const [active, setActive] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [currentSlidesPerView, setCurrentSlidesPerView] = useState(1);

  // filter items
  const filtered =
    active === "all"
      ? items
      : items.filter((item) => item.categories.includes(active));

  const shouldLoop = filtered.length > currentSlidesPerView;

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
              aria-pressed={isActive}
              aria-label={`Filter by ${category.label}`}
              className={`relative px-12 py-3 rounded-md text-base uppercase ease-in-out cursor-pointer ${
                isActive
                  ? "bg-transparent text-text-primary"
                  : "bg-transparent text-text-primary backdrop-blur-xs"
              }`}
              whileTap={{
                scale: 0.9,
              }}
              whileHover={{
                scale: 1.05,
              }}
            >
              {isActive && (
                <>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute inset-0 rounded-md border-[0.5px] border-primary"
                  />
                  <motion.span
                    initial={{ opacity: 0, scale: 0.9, x: 0, y: 0 }}
                    animate={{ opacity: 1, scale: 1, x: 4, y: 4 }}
                    exit={{ opacity: 0, scale: 0.9, x: 0, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                    className="absolute inset-0 rounded-md border-[0.5px] border-primary"
                  />
                </>
              )}
              <span className="relative z-10">{category.label}</span>
            </motion.button>
          );
        })}
      </nav>

      {/* portfolio images and video */}
      <div className="mt-10 relative">
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
          className=""
          key={active}
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            breakpoints={{
              450: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            onBreakpoint={(swiper) => {
              const spv = swiper.params.slidesPerView;
              setCurrentSlidesPerView(spv);
            }}
            onInit={(swiper) => {
              const spv = swiper.params.slidesPerView;
              setCurrentSlidesPerView(spv);
            }}
            loop={shouldLoop}
            navigation={
              shouldLoop
                ? {
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                  }
                : false
            }
            autoplay={
              shouldLoop
                ? {
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
                : false
            }
            speed={1000}
          >
            {filtered.map((item, index) => (
              <SwiperSlide key={item.id}>
                <motion.div
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
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* custom navigation buttons */}
        {/* prev button */}
        <button
          className="swiper-button-prev-custom p-1 rounded-sm text-2xl font-medium transition-colors duration-150 cursor-pointer absolute z-10 top-1/2 -translate-y-1/2 left-3 backdrop-blur-md bg-background-primary/50 hover:bg-primary hover:text-background-primary"
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
          className="swiper-button-next-custom p-1 rounded-sm text-2xl font-medium transition-colors duration-150 cursor-pointer absolute z-10 top-1/2 -translate-y-1/2 right-3 backdrop-blur-md bg-background-primary/50 hover:bg-primary hover:text-background-primary"
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
