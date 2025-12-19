"use client";
import React from "react";
import { useState } from "react";
import PortfolioItem from "./PortfolioItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

export default function PortfolioGallery({ protfolioData }) {
  const { categories, entries } = protfolioData;

  const [active, setActive] = useState("all");

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
              onClick={() => setActive(category.id)}
              aria-pressed={isActive}
              aria-label={`Filter by ${category.label}`}
              className={`border border-primary/25 px-12 py-3 rounded-full text-2xl font-medium shadow-[inset_1px_1px_16px_0px_rgba(169,241,113,0.2)] hover:border-primary transition-colors duration-150 cursor-pointer ${
                isActive
                  ? "bg-primary text-background-primary"
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
              <PortfolioItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* custom navigation buttons */}
        {/* prev button */}
        <button
          className="swiper-button-prev-custom bg-background-neutral/23 border border-primary/25 p-1 rounded-sm text-2xl font-medium shadow-[inset_1px_1px_16px_0px_rgba(169,241,113,0.3)] hover:border-primary transition-colors duration-150 cursor-pointer absolute z-10 top-30 left-3 backdrop-blur-md hover:bg-primary hover:text-background-primary"
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
          className="swiper-button-next-custom bg-background-neutral/23 border border-primary/25 p-1 rounded-sm text-2xl font-medium shadow-[inset_1px_1px_16px_0px_rgba(169,241,113,0.3)] hover:border-primary transition-colors duration-150 cursor-pointer absolute z-10 top-30 right-3 backdrop-blur-md hover:bg-primary hover:text-background-primary"
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
            className="lucide lucide-chevron-right-icon lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
