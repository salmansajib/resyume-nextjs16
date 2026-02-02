import React from "react";
import PortfolioGallery from "./PortfolioGallery";

export default function PortfolioSection({ data }) {
  const { portfolio } = data;

  return (
    <section aria-labelledby="portfolio-heading">
      <div className="w-full max-w-7xl mx-auto px-4 py-20">
        {/* title and subtitle */}
        <div className="space-y-3">
          <h2
            id="portfolio-heading"
            className="capitalize font-medium flex items-center justify-center gap-2"
          >
            <span
              aria-hidden
              className="bg-primary w-0.5 h-5 flex flex-col items-center justify-between"
            >
              <span className="bg-primary w-1.5 h-0.5"></span>
              <span className="bg-primary w-1.5 h-0.5"></span>
            </span>
            {portfolio.title}
          </h2>
          <h3 className="text-center text-[40px] font-playfairDisplay leading-none capitalize">
            {portfolio.subtitle}
          </h3>
        </div>

        {/* portfolio gallery */}
        <PortfolioGallery portfolioData={portfolio} />
      </div>
    </section>
  );
}
