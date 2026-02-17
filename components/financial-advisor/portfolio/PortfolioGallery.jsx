"use client";
import React, { useState } from "react";
import { motion } from "framer-motion"; // corrected import (was "motion/react")
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
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

  const shouldEnableLoopAndControls = filtered.length > currentSlidesPerView;

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
                  ? "bg-primary text-background-primary"
                  : "bg-background-secondary text-text-primary"
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
      <div className="mt-10 financial-advisor-portfolio-slider">
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
            modules={[Navigation, Autoplay, Pagination]}
            slidesPerView={1}
            // Update currentSlidesPerView on init and breakpoint changes
            onInit={(swiper) => {
              setCurrentSlidesPerView(swiper.params.slidesPerView);
            }}
            onBreakpoint={(swiper) => {
              setCurrentSlidesPerView(swiper.params.slidesPerView);
            }}
            // Conditional features to avoid "not enough slides" warning
            loop={shouldEnableLoopAndControls}
            navigation={
              shouldEnableLoopAndControls
                ? {
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                  }
                : false
            }
            pagination={
              shouldEnableLoopAndControls
                ? {
                    el: ".swiper-pagination-custom",
                    clickable: true,
                    type: "bullets",
                  }
                : false
            }
            speed={1000}
            spaceBetween={20}
            autoplay={
              shouldEnableLoopAndControls
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
                slidesPerView: 5,
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

        {/* custom navigation + pagination — only shown when useful */}
        {shouldEnableLoopAndControls && (
          <div className="flex items-center justify-center gap-7 mt-10">
            {/* prev button */}
            <button
              className="swiper-button-prev-custom p-2 text-2xl font-medium transition-colors duration-150 cursor-pointer bg-background-secondary hover:bg-primary hover:text-background-primary"
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

            {/* Pagination dots */}
            <div className="swiper-pagination-custom flex items-center gap-[7px] max-w-max" />

            {/* next button */}
            <button
              className="swiper-button-next-custom p-2 text-2xl font-medium transition-colors duration-150 cursor-pointer bg-background-secondary hover:bg-primary hover:text-background-primary"
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
