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
      className="bg-background-secondary"
    >
      <InViewAnimator
        variants={staggerContainer}
        className="w-full max-w-7xl mx-auto px-4 py-20"
      >
        {/* title and subtitle */}
        <div className="flex flex-col gap-5 items-center justify-center">
          <h2
            id="services-heading"
            className="bg-text-primary px-5 py-3 capitalize text-background-primary leading-none"
          >
            {services.title}
          </h2>
          <h3 className="leading-none font-medium capitalize text-[clamp(2.2rem,3vw,2.6rem)] text-center">
            {services.subtitle}
          </h3>
        </div>

        {/* services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
          {services.items.map((item) => (
            <ServiceCard key={item.id} item={item} fadeInUp={fadeInUp} />
          ))}
        </div>
      </InViewAnimator>
    </section>
  );
}
