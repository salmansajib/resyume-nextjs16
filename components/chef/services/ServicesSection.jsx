import React from "react";
import ServiceCard from "./ServiceCard";

export default function ServicesSection({ data }) {
  const { services } = data;

  return (
    <section
      aria-labelledby="services-heading"
      className="px-4 py-20 bg-background-secondary"
    >
      <div className="w-full max-w-[1580px] mx-auto">
        <div className="space-y-2">
          <h2
            id="services-heading"
            className="font-jost text-xl font-medium text-primary"
          >
            {services.title}
          </h2>
          <h3 className="text-[clamp(2rem,6vw,3rem)] font-semibold leading-tight max-w-[20ch]">
            {services.subtitle}
          </h3>
        </div>

        {/* services */}
        <div className="mt-15 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {services.items.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
