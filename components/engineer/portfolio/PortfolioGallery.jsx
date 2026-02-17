"use client";
import React, { useState } from "react";
import { motion } from "framer-motion"; // fixed import (was "motion/react" which is incorrect)
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

  const shouldLoopAndShowControls = filtered.length > currentSlidesPerView;

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
              className={`px-12 py-3 text-base uppercase ease-in-out cursor-pointer ${
                isActive
                  ? "bg-primary text-text-primary"
                  : "bg-primary/10 text-text-primary backdrop-blur-xs"
              }`}
              whileTap={{
                scale: 0.9,
              }}
              whileHover={{
                scale: 1.05,
              }}
            >
              {category.label}
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
            // Capture actual slidesPerView used after init and breakpoint changes
            onInit={(swiper) => {
              setCurrentSlidesPerView(swiper.params.slidesPerView);
            }}
            onBreakpoint={(swiper) => {
              setCurrentSlidesPerView(swiper.params.slidesPerView);
            }}
            // Only enable when we have enough items
            loop={shouldLoopAndShowControls}
            navigation={
              shouldLoopAndShowControls
                ? {
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                  }
                : false
            }
            speed={1000}
            autoplay={
              shouldLoopAndShowControls
                ? {
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
                : false
            }
            breakpoints={{
              450: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
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

        {/* custom navigation buttons — only shown when useful */}
        {shouldLoopAndShowControls && (
          <>
            {/* prev button */}
            <button
              className="swiper-button-prev-custom p-1 text-2xl font-medium transition-colors duration-150 cursor-pointer absolute z-10 top-1/2 -translate-y-1/2 left-3 border border-text-primary rounded-full hover:bg-primary hover:border-transparent"
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
              className="swiper-button-next-custom p-1 text-2xl font-medium transition-colors duration-150 cursor-pointer absolute z-10 top-1/2 -translate-y-1/2 right-3 border border-text-primary rounded-full hover:bg-primary hover:border-transparent"
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
          </>
        )}
      </div>

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
