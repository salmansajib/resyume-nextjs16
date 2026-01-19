import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function PortfolioGallery({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full">
      {/* Main Swiper */}
      <Swiper
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Thumbs]}
        className="mb-4 rounded-3xl"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="relative aspect-video bg-transparent rounded-3xl overflow-hidden">
              <Image
                src={image.imageSrc}
                alt={image.id}
                fill
                className="object-cover"
                priority={image.id === images[0].id}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper with Navigation */}
      <div className="relative group">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={20}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="px-10"
          breakpoints={{
            640: {
              slidesPerView: 5,
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={image.id}>
              <div className="relative aspect-video bg-transparent rounded-xl overflow-hidden cursor-pointer hover:opacity-75 transition-opacity">
                <Image
                  src={image.imageSrc}
                  alt={image.id}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 25vw, 20vw"
                />
                {/* Active Overlay */}
                <div
                  className={`absolute inset-0 bg-black/40 rounded-xl transition-opacity ${
                    activeIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button
          className="hidden md:block swiper-button-prev-custom absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
          aria-label="Previous"
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

        <button
          className="hidden md:block swiper-button-next-custom absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
          aria-label="Next"
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
