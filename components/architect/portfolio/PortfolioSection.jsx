import React from "react";
import PortfolioGallery from "./PortfolioGallery";

export default function PortfolioSection({ data }) {
  const { portfolio } = data;

  return (
    <section
      aria-labelledby="portfolio-heading"
      className="w-full overflow-hidden bg-background-primary py-20 bg-[url('/assets/architect/images/portfolio/portfolio-bg.png')] bg-cover bg-top bg-no-repeat"
    >
      {/* title and subtitle */}
      <div className="space-y-5 text-center">
        <h2
          id="portfolio-heading"
          className="relative text-base font-medium text-primary capitalize max-w-max mx-auto"
        >
          {portfolio.title}
          {/* bottom line */}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-[calc(100%+10px)] h-px bg-primary flex items-center justify-between">
            <div className="w-px h-2 bg-primary"></div>
            <div className="w-px h-2 bg-primary"></div>
          </div>
        </h2>
        <h3 className="font-lora font-semibold text-[clamp(2.5rem,5vw,3.8rem)] capitalize max-w-[20ch] mx-auto leading-none">
          {portfolio.subtitle}
        </h3>
      </div>

      {/* portfolio */}
      <PortfolioGallery portfolioData={portfolio} />
    </section>
  );
}
