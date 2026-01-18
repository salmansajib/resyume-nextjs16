import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function PortfolioGallery({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="w-full">
      {/* Main Swiper  */}
      <Swiper
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Thumbs]}
        className="mb-4 rounded-lg"
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

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={20}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        navigation={true}
        modules={[FreeMode, Thumbs]}
        className=""
        breakpoints={{
          640: {
            slidesPerView: 5,
          },
        }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="relative aspect-video bg-transparent rounded-xl overflow-hidden cursor-pointer hover:opacity-75 transition-opacity">
              <Image
                src={image.imageSrc}
                alt={image.id}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 25vw, 20vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
