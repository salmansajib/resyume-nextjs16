import React from "react";
import SectionTitleIcon from "../SectionTitleIcon";
import ServiceCard from "./ServiceCard";

export default function ServicesSection({ data }) {
  const { services } = data;

  return (
    <section aria-labelledby="services-heading" className="px-4 py-20">
      <div className="w-full max-w-7xl mx-auto">
        {/* title */}
        <div className="max-w-max mx-auto">
          <h2
            id="services-heading"
            className="font-ebGaramond text-[clamp(2rem,4vw,2.5rem)] capitalize text-center px-4 leading-none"
          >
            {services.title}
          </h2>
          {/* bottom line and icon */}
          <SectionTitleIcon />
        </div>

        {/* services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {services.items.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
