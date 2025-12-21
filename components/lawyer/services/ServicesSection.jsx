import React from "react";
import ServiceCard from "./ServiceCard";

export default function ServicesSection({ data }) {
  const { services } = data;

  return (
    <section
      aria-labelledby="services-heading"
      className="bg-background-secondary px-4 py-20"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* title and subtitle */}
        <div className="text-center space-y-5">
          <h2
            id="services-heading"
            className="relative max-w-max mx-auto py-1 border-b border-primary"
          >
            <span className="text-lg font-bold uppercase text-primary">
              {services.title}
            </span>
            <span className="absolute -bottom-1 right-0 size-2 bg-primary rounded-full"></span>
          </h2>
          <h3 className="text-[clamp(2rem,6vw,2.5rem)] font-taviraj font-medium uppercase leading-none">
            {services.subtitle}
          </h3>
        </div>

        {/* services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-15">
          {services.items.map((item) => (
            <div key={item.id}>
              <ServiceCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
