"use client";
import React from "react";
import Image from "next/image";
import PortfolioGallery from "./PortfolioGallery";

export default function PortfolioSection({ data }) {
  const { portfolio } = data;

  return (
    <section aria-labelledby="portfolio-heading" className="px-4 py-20">
      <div className="w-full max-w-7xl mx-auto">
        {/* title and subtitle */}
        <div className="space-y-4">
          <h2
            id="portfolio-heading"
            className="flex items-center justify-center gap-2 text-lg font-medium text-primary uppercase"
          >
            <Image
              src="/assets/doctor-3/icons/section-title-icon.svg"
              alt=""
              width={100}
              height={50}
              className="w-[94px] h-auto object-cover"
            />
            <span>{portfolio.title}</span>
          </h2>
          <h3 className="text-[clamp(2.2rem,4vw,2.5rem)] font-bold uppercase max-w-[20ch] mx-auto text-center leading-11">
            {portfolio.subtitle}
          </h3>
        </div>

        {/* portfolio gallery */}
        <div className="mt-10 border border-background-secondary p-5 md:p-10 rounded-[47px] bg-background-secondary/10">
          <PortfolioGallery images={portfolio.images} />
        </div>
      </div>
    </section>
  );
}
