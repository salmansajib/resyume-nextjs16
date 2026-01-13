import React from "react";
import PortfolioGallery from "./PortfolioGallery";

export default function PortfolioSection({ data }) {
  const { portfolio } = data;

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="bg-background-secondary px-4 py-20"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* title and subtitle */}
        <div className="space-y-3">
          <h2
            id="portfolio-heading"
            className="relative z-10 text-lg font-semibold text-primary uppercase px-3 py-1 rounded-xl max-w-max mx-auto before:absolute before:inset-0 before:bg-background-neutral before:rounded-xl before:z-0 after:absolute after:inset-0 after:w-5 after:-left-1 after:bg-accent after:rounded-sm after:-z-10"
          >
            <span className="relative z-10">{portfolio.title}</span>
          </h2>
          <h3 className="text-center font-ebGaramond font-medium text-[clamp(2.5rem,6vw,3.75rem)] capitalize leading-none max-w-[20ch] mx-auto">
            {portfolio.subtitle}
          </h3>
        </div>

        {/* portfolio */}
        <PortfolioGallery portfolioData={portfolio} />
      </div>
    </section>
  );
}
