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
      className="bg-background-primary px-8 py-20"
    >
      <div className="w-full max-w-7xl mx-auto space-y-10">
        {/* title and subtitle */}
        <header className="text-center space-y-4">
          <h2
            id="services-heading"
            className="text-2xl font-normal text-primary leading-none"
          >
            {services.title}
          </h2>
          <h3 className="text-[clamp(3rem,6vw,4rem)] font-medium leading-none">
            {services.subtitle}
          </h3>
        </header>

        {/* services */}
        <InViewAnimator
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"
        >
          {services.entries.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              fadeInUp={fadeInUp}
            />
          ))}
        </InViewAnimator>
      </div>
    </section>
  );
}
