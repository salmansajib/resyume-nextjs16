import React from "react";
import Image from "next/image";
import PortfolioGallery from "./PortfolioGallery";

export default function PortfolioSection({ data }) {
  const { portfolio } = data;

  return (
    <section aria-labelledby="portfolio-heading" className="relative">
      <div className="w-full max-w-7xl mx-auto px-4 py-20 relative z-10">
        {/* title and subtitle */}
        <div className="flex flex-col gap-2 items-center justify-center">
          <h2
            id="portfolio-heading"
            className="font-rajdhani font-bold text-lg capitalize text-text-primary leading-none"
          >
            {portfolio.title}
          </h2>
          <h3 className="leading-12 lg:leading-20 font-rajdhani font-bold capitalize text-[clamp(2.4rem,4vw,3rem)] text-center">
            {portfolio.subtitle}
          </h3>
        </div>

        {/* portfolio gallery */}
        <PortfolioGallery portfolioData={portfolio} />
      </div>

      {/* background gradient */}
      <div className="absolute top-80 -left-100 size-[1300px] rounded-full bg-radial-[circle_at_center] from-[#9E1586]/40 from-0% via-[#0E1724]/0 via-50% to-transparent to-70%"></div>
      <div className="absolute top-150 -right-100 size-[1300px] rounded-full bg-radial-[circle_at_center] from-[#9E1586]/40 from-0% via-[#0E1724]/0 via-50% to-transparent to-70%"></div>
    </section>
  );
}
