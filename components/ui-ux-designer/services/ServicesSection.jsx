import React from "react";
import Image from "next/image";

export default function ServicesSection({ data }) {
  const { services } = data;

  return (
    <section
      aria-labelledby="services-heading"
      className="px-4 py-32 bg-background-secondary"
    >
      <div
        id="services-heading"
        className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-20 lg:gap-30"
      >
        {/* title and subtitle */}
        <div className="space-y-3 text-center lg:text-left">
          <h2 className="text-lg font-medium text-primary uppercase">
            {services.title}
          </h2>
          <h3 className="text-3xl md:text-4xl font-medium text-text-primary leading-11 lg:max-w-[15ch]">
            {services.subtitle}
          </h3>
        </div>

        {/* services */}
        <div
          role="list"
          aria-label="Available services"
          className="grid grid-cols-1 sm:grid-cols-2 gap-15 lg:gap-x-30"
        >
          {services.entries.map((service) => (
            <article
              key={service.id}
              role="listitem"
              className="space-y-3 lg:relative"
            >
              {/* Icon with accessible name */}
              <div className="size-12 flex items-center justify-center bg-background-primary rounded-md lg:absolute -top-2 -left-17">
                <Image
                  src={service.icon}
                  alt={`${service.name} icon`}
                  width={30}
                  height={30}
                  className="w-[30px] h-auto"
                />
              </div>

              {/* service heading */}
              <h3 className="font-medium text-primary text-2xl">
                {service.name}
              </h3>

              {/* service description */}
              <p className="text-base font-normal text-text-dimmed max-w-[40ch] sm:max-w-[30ch]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
