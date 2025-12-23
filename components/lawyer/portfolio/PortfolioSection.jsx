import React from "react";
import PortfolioGallery from "./PortfolioGallery";

export default function PortfolioSection({ data }) {
  const { portfolio } = data;

  return (
    <section
      aria-labelledby="portfolio-heading"
      className="bg-background-primary px-4 py-20"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* title and subtle */}
        <div className="flex gap-5 flex-col items-center justify-center">
          <h2
            id="portfolio-heading"
            className="relative max-w-max py-1 border-b border-primary"
          >
            <span className="text-lg font-bold uppercase text-primary">
              {portfolio.title}
            </span>
            <span className="absolute -bottom-1 right-0 size-2 bg-primary rounded-full"></span>
          </h2>
          <h3 className="text-[clamp(2rem,6vw,2.5rem)] font-taviraj font-medium uppercase leading-none text-center">
            {portfolio.subtitle}
          </h3>
        </div>

        {/* portfolio */}
        <PortfolioGallery protfolioData={portfolio} />
      </div>
    </section>
  );
}
