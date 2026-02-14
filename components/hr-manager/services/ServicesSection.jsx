"use client";
import React from "react";
import ServiceCard from "./ServiceCard";

export default function ServicesSection({ data }) {
  const { services } = data;

  return (
    <section
      aria-labelledby="services-heading"
      className="bg-[url(/assets/hr-manager/images/bg-image-services.svg)] bg-no-repeat bg-cover text-primary"
    >
      <div className="w-full max-w-7xl mx-auto px-4 py-20">
        {/* title and subtitle */}
        <div className="flex gap-3 flex-col items-center justify-center">
          <h2
            id="services-heading"
            className="text-lg font-medium capitalize bg-linear-to-b from-gradient-primary-start to-gradient-primary-end bg-clip-text text-transparent"
          >
            {services.title}
          </h2>
          <h3 className="text-[clamp(2rem,3vw,2.9rem)] font-poppins font-medium text-center capitalize leading-none">
            {services.subtitle}
          </h3>
        </div>

        {/* services */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.items.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
