"use client";
import React from "react";
import Image from "next/image";
import ServiceCard from "./ServiceCard";
import InViewAnimator from "@/components/InViewAnimator";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ServicesSection({ data }) {
  const { services } = data;

  return (
    <section
      aria-labelledby="services-heading"
      className="bg-background-secondary"
    >
      <InViewAnimator
        variants={staggerContainer}
        className="w-full max-w-7xl mx-auto px-4 py-20"
      >
        {/* subtitle */}
        <div className="relative max-w-max mx-auto leading-none">
          <h3
            id="services-heading"
            className="relative z-10 font-teko text-[clamp(3rem,4vw,4.375rem)] capitalize"
          >
            {services.subtitle}
          </h3>
          <div aria-hidden className="absolute bottom-2 -right-8">
            <Image
              src="/assets/fitness-coach/images/decorative-dotted-grid-section-subtitle.png"
              alt=""
              width={100}
              height={50}
              className="w-[84px] h-8 object-cover"
            />
          </div>
        </div>

        {/* services */}
        <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-5 mt-10">
          {services.items.map((item) => (
            <ServiceCard key={item.id} item={item} fadeInUp={fadeInUp} />
          ))}
        </div>
      </InViewAnimator>
    </section>
  );
}
