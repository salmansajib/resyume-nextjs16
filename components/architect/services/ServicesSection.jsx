import React from "react";
import ServiceCard from "./ServiceCard";

export default function ServicesSection({ data }) {
  const { services } = data;

  return (
    <section
      aria-labelledby="services-heading"
      className="bg-background-secondary px-4 py-20"
    >
      <div className="w-full max-w-[1580px] mx-auto">
        {/* title and subtitle */}
        <div className="text-center space-y-5">
          <h2
            id="services-heading"
            className="relative text-base font-medium text-primary capitalize max-w-max mx-auto"
          >
            {services.title}
            {/* bottom line */}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-[calc(100%+10px)] h-px bg-primary flex items-center justify-between">
              <div className="w-px h-2 bg-primary"></div>
              <div className="w-px h-2 bg-primary"></div>
            </div>
          </h2>
          <h3 className="font-lora font-semibold text-[clamp(2.5rem,5vw,3.8rem)] capitalize max-w-[20ch] mx-auto leading-none">
            {services.subtitle}
          </h3>
        </div>

        {/* services */}
        <div className="mt-15 flex items-center justify-center gap-10 flex-wrap">
          {services.items.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
