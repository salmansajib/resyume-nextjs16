"use client";
import React from "react";
import ServiceCard from "./ServiceCard";

export default function ServicesSection({ data }) {
  const { services } = data;

  return (
    <section
      aria-labelledby="services-heading"
      className="bg-background-secondary"
    >
      <div className="px-4 py-20 w-full max-w-[1440px] mx-auto">
        {/* title and subtitle */}
        <div className="space-y-4">
          <h2
            id="services-heading"
            className="relative font-semibold capitalize max-w-max mx-auto"
          >
            <div className="relative z-10">{services.title}</div>
            <div
              aria-hidden="true"
              className="bg-primary w-[37px] h-[33px] absolute top-1/2 -translate-y-1/2 -left-6"
            ></div>
          </h2>
          <h3 className="font-chakraPetch text-[40px] font-semibold uppercase max-w-max mx-auto text-center">
            {services.subtitle}
          </h3>
        </div>

        {/* services */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10">
          {services.items.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
