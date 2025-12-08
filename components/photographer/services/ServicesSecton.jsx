import React from "react";
import BracketedHeading from "../BracketedHeading";
import Services from "./Services";

export default function ServicesSecton({ data }) {
  const { services } = data;
  const servicesData = services.entries;

  return (
    <section
      aria-labelledby="services-heading"
      className="bg-background-primary px-4 py-20"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* title and subtitle */}
        <header className="space-y-3 flex flex-col items-center justify-center">
          <div className="relative">
            <h2
              id="services-heading"
              className="font-medium text-[50px] md:text-[80px] text-text-dimmed"
            >
              SERVICES
            </h2>
            <div className="absolute top-7 md:top-13 left-1/2 -translate-x-1/2">
              <BracketedHeading className="uppercase">
                {services.title}
              </BracketedHeading>
            </div>
          </div>
          <h3 className="text-[30px] md:text-[40px] font-medium text-text-primary">
            {services.subtitle}
          </h3>
        </header>

        {/* services */}
        <Services servicesData={servicesData} />
      </div>
    </section>
  );
}
