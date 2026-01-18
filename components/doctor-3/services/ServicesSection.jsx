"use client";
import React, { useState } from "react";
import Image from "next/image";
import ServiceCard from "./ServiceCard";

export default function ServicesSection({ data }) {
  const { services } = data;
  const [activeId, setActiveId] = useState("hypertention");

  return (
    <section aria-labelledby="services-heading" className="px-4 py-20">
      <div className="w-full max-w-7xl mx-auto">
        {/* title and subtitle */}
        <div className="space-y-4">
          <h2
            id="services-heading"
            className="flex items-center justify-center gap-2 text-lg font-medium text-primary uppercase"
          >
            <Image
              src="/assets/doctor-3/icons/section-title-icon.svg"
              alt=""
              width={100}
              height={50}
              className="w-[94px] h-auto object-cover"
            />
            <span>{services.title}</span>
          </h2>
          <h3 className="text-[clamp(2.2rem,4vw,2.5rem)] font-bold uppercase max-w-[20ch] mx-auto text-center leading-11">
            {services.subtitle}
          </h3>
        </div>

        {/* services */}
        <div className="mt-10">
          <ul className="flex flex-wrap gap-8 items-start justify-center">
            {services.items.map((item) => (
              <ServiceCard
                key={item.id}
                item={item}
                isActive={activeId === item.id}
                onHover={() => setActiveId(item.id)}
                onLeave={() => {}}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
