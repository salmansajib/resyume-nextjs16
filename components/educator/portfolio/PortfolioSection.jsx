import React from "react";
import PortfolioGallery from "./PortfolioGallery";

export default function PortfolioSection({ data }) {
  const { portfolio } = data;

  return (
    <section
      aria-labelledby="portfolio-heading"
      className="bg-background-secondary"
    >
      <div className="w-full max-w-7xl mx-auto px-4 py-20">
        {/* title and subtitle */}
        <div className="flex flex-col gap-5 items-center justify-center">
          <h2 id="portfolio-heading" className="uppercase text-text-secondary">
            {portfolio.title}
          </h2>
          <h3 className="leading-none capitalize text-[clamp(2rem,4vw,3rem)] font-leagueSpartan font-medium text-center max-w-[20ch]">
            {portfolio.subtitle}
          </h3>
        </div>

        {/* portfolio gallery */}
        <PortfolioGallery portfolioData={portfolio} />
      </div>
    </section>
  );
}
