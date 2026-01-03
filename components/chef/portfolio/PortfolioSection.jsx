import React from "react";
import PortfolioGallery from "./PortfolioGallery";

export default function PortfolioSection({ data }) {
  const { portfolio } = data;

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="bg-background-secondary py-20 px-4"
    >
      <div className="w-full max-w-[1580px] mx-auto">
        {/* title and subtitle */}
        <div className="space-y-2 text-center">
          <h2
            id="portfolio-heading"
            className="font-jost text-xl font-medium text-primary capitalize"
          >
            {portfolio.title}
          </h2>
          <h3 className="text-[clamp(2rem,6vw,3rem)] font-semibold leading-tight capitalize">
            {portfolio.subtitle}
          </h3>
        </div>

        {/* portfolio */}
        <PortfolioGallery portfolioData={portfolio} />
      </div>
    </section>
  );
}
