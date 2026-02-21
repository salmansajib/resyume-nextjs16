"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import ServiceCard from "./ServiceCard";

export default function ServicesSection({ data }) {
  const { services } = data;
  const [currentSlidesPerView, setCurrentSlidesPerView] = useState(1);

  const shouldLoopAndShowControls =
    services.items.length > currentSlidesPerView;

  return (
    <section aria-labelledby="services-heading">
      <div className="w-full max-w-[1642px] mx-auto px-4 py-20">
        {/* title and subtitle */}
        <div className="flex flex-col gap-2 items-center justify-center">
          <h2
            id="services-heading"
            className="font-exo2 font-bold capitalize text-text-primary text-[clamp(2.5rem,5vw,3.8rem)] leading-none"
          >
            {services.title}
          </h2>
          <h3 className="leading-12 lg:leading-20 font-exo2 font-bold capitalize text-[clamp(2.5rem,5vw,3.8rem)] text-center max-w-max bg-linear-to-r from-gradient-primary-start to-gradient-primary-end bg-clip-text text-transparent">
            {services.subtitle}
          </h3>
        </div>

        {/* services swiper */}
        <div className="mt-10">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            onInit={(swiper) =>
              setCurrentSlidesPerView(swiper.params.slidesPerView)
            }
            onBreakpoint={(swiper) =>
              setCurrentSlidesPerView(swiper.params.slidesPerView)
            }
            loop={shouldLoopAndShowControls}
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
              450: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
              1280: { slidesPerView: 3, spaceBetween: 20 },
              1470: { slidesPerView: 4, spaceBetween: 20 },
            }}
          >
            {services.items.map((item) => (
              <SwiperSlide key={item.id}>
                <ServiceCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* custom navigation buttons — only render when useful */}
        <div className="flex items-center justify-center gap-5 mt-10 relative z-20">
          {/* prev button */}
          <button className="swiper-button-prev-custom size-[50px] rounded-full bg-background-secondary flex items-center justify-center ring-1 ring-primary/20 cursor-pointer hover:ring-primary">
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
          <button className="swiper-button-next-custom size-[50px] rounded-full bg-background-secondary flex items-center justify-center ring-1 ring-primary/20 cursor-pointer hover:ring-primary">
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
    </section>
  );
}
