import React from "react";
import ServiceCard from "./ServiceCard";

export default function ServicesSection({ data }) {
  const { services } = data;

  return (
    <section
      aria-labelledby="services-heading"
      className="bg-background-secondary bg-[url('/assets/virtual-assistant/images/bg-image-services.png')] bg-no-repeat bg-cover"
    >
      <div className="w-full max-w-7xl mx-auto px-4 py-20">
        {/* title and subtitle */}
        <div className="flex flex-col gap-4 items-center justify-center">
          <h2
            id="services-heading"
            className="font-semibold text-primary capitalize relative leading-none"
          >
            <span className="relative z-10 ml-4">{services.title}</span>
            <span className="absolute -top-2 left-0 size-8 rounded-full bg-background-neutral/50"></span>
            <span className="absolute -top-5 left-0 size-2.5 rounded-full bg-primary/50"></span>
          </h2>
          <h3 className="text-[clamp(2rem,4vw,3rem)] font-semibold capitalize leading-none">
            {services.subtitle}
          </h3>
        </div>

        {/* services */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.items.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
