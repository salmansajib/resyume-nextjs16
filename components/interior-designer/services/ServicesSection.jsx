"use client";
import React from "react";
import ServiceCard from "./ServiceCard";

export default function ServicesSection({ data }) {
  const { services } = data;

  return (
    <section
      aria-labelledby="services-heading"
      className="bg-background-secondary bg-[url(/assets/interior-designer/images/bg-image-services.png)] bg-no-repeat bg-cover"
    >
      <div className="w-full max-w-7xl mx-auto px-4 py-20">
        {/* title and subtitle */}
        <div className="space-y-3">
          <h2
            id="services-heading"
            className="capitalize font-medium flex items-center justify-center gap-2"
          >
            <span
              aria-hidden
              className="bg-primary w-0.5 h-5 flex flex-col items-center justify-between"
            >
              <span className="bg-primary w-1.5 h-0.5"></span>
              <span className="bg-primary w-1.5 h-0.5"></span>
            </span>
            {services.title}
          </h2>
          <h3 className="text-center text-[40px] font-playfairDisplay leading-none capitalize">
            {services.subtitle}
          </h3>
        </div>

        {/* services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-15">
          {services.items.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
