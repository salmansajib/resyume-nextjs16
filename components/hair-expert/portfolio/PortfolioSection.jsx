import React from "react";
import PortfolioGallery from "./PortfolioGallery";

export default function PortfolioSection({ data }) {
  const { portfolio } = data;

  return (
    <section
      aria-labelledby="portfolio-heading"
      className="bg-linear-to-b from-[#B9BDCB] to-[#FCF8FF] to-81%"
    >
      <div className="w-full max-w-7xl mx-auto px-4 py-20">
        {/* title and subtitle */}
        <div className="space-y-4">
          <h2
            id="portfolio-heading"
            className="text-lg font-syne font-medium text-primary capitalize flex items-center justify-center gap-3"
          >
            <span aria-hidden className="w-[50px] h-px bg-primary"></span>
            {portfolio.title}
          </h2>
          <h3 className="text-center text-[clamp(2.5rem,4vw,3.125rem)] font-bold font-syne leading-none capitalize">
            {portfolio.subtitle}
          </h3>
        </div>

        {/* achievements */}
        <PortfolioGallery portfolioData={portfolio} />
      </div>
    </section>
  );
}
