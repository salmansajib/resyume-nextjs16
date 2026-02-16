"use client";
import React from "react";
import ServiceCard from "./ServiceCard";
import InViewAnimator from "@/components/InViewAnimator";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ServicesSection({ data }) {
  const { services } = data;

  return (
    <section
      aria-labelledby="services-heading"
      className="bg-[url(/assets/educator/images/bg-img-services.svg)] bg-no-repeat bg-cover"
    >
      <InViewAnimator
        variants={staggerContainer}
        className="w-full max-w-7xl mx-auto px-4 pt-50 pb-20"
      >
        {/* title and subtitle */}
        <div className="flex flex-col gap-5 items-center justify-center">
          <h2 id="services-heading" className="uppercase text-text-secondary">
            {services.title}
          </h2>
          <h3 className="leading-none text-[clamp(2rem,4vw,3rem)] font-leagueSpartan font-medium text-center max-w-[20ch]">
            {services.subtitle}
          </h3>
        </div>

        {/* services */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.items.map((item) => (
            <ServiceCard key={item.id} item={item} fadeInUp={fadeInUp} />
          ))}
        </div>
      </InViewAnimator>
    </section>
  );
}
