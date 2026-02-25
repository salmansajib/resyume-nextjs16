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

  // filter items
  const filtered =
    active === "all"
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
              aria-pressed={isActive}
              aria-label={`Filter by ${category.label}`}
              className={`relative px-12 py-3 font-teko text-[20px] uppercase cursor-pointer ${
                isActive
                  ? "bg-primary text-text-primary"
                  : "bg-text-secondary/20 text-text-primary backdrop-blur-xs"
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
        <Swiper
          modules={[Navigation, Autoplay]}
          centeredSlides
          initialSlide={1}
          slidesPerView="auto"
          spaceBetween={20}
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
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: false,
            },
            768: {
              slidesPerView: "auto",
              centeredSlides: true,
            },
          }}
          className="overflow-visible! py-20"
        >
          {filtered.map((item, index) => (
            <SwiperSlide
              key={item.id}
              className="w-[300px] md:w-[600px]! lg:w-[934px]! h-[550px] transition-all duration-500 ease-out scale-[0.85] opacity-40 [&.swiper-slide-active]:scale-100 [&.swiper-slide-active]:opacity-100"
            >
              <PortfolioItem
                item={item}
                onClick={() => {
                  setLightboxOpen(true);
                  setStartIndex(index);
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* custom navigation buttons */}
        {/* prev button */}
        <button
          className="swiper-button-prev-custom p-1 rounded-sm text-2xl font-medium transition-colors duration-150 cursor-pointer absolute z-10 top-1/2 -translate-y-1/2 left-[22vw] backdrop-blur-md bg-background-primary/50 hover:bg-primary hover:text-background-primary"
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
          className="swiper-button-next-custom p-1 rounded-sm text-2xl font-medium transition-colors duration-150 cursor-pointer absolute z-10 top-1/2 -translate-y-1/2 right-[22vw] backdrop-blur-md bg-background-primary/50 hover:bg-primary hover:text-background-primary"
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
