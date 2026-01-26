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
      className="bg-background-secondary px-4 py-20"
    >
      <InViewAnimator
        variants={staggerContainer}
        className="w-full max-w-7xl mx-auto"
      >
        {/* title and subtitle */}
        <div className="space-y-4">
          <h2
            id="services-heading"
            className="text-lg font-syne font-medium text-primary capitalize flex items-center justify-center gap-3"
          >
            <span aria-hidden className="w-[50px] h-px bg-primary"></span>
            {services.title}
          </h2>
          <h3 className="text-center text-[clamp(2.5rem,4vw,3.125rem)] font-bold font-syne leading-none capitalize">
            {services.subtitle}
          </h3>
        </div>

        {/* services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {services.items.map((item) => (
            <ServiceCard key={item.id} item={item} fadeInUp={fadeInUp} />
          ))}
        </div>
      </InViewAnimator>
    </section>
  );
}
