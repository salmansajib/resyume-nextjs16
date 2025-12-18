import React from "react";
import PortfolioGallery from "./PortfolioGallery";

export default function PortfolioSection({ data }) {
  const { portfolio } = data;

  return (
    <section aria-labelledby="portfolio-headign" className="pb-20 px-4">
      <div className="w-full max-w-[1580px] mx-auto overflow-hidden">
        {/* title and subtitle */}
        <header className="text-center space-y-4">
          <h2
            id="services-heading"
            className="text-2xl font-normal text-primary leading-none uppercase"
          >
            {portfolio.title}
          </h2>
          <h3 className="text-[clamp(3rem,6vw,4rem)] font-medium leading-none capitalize">
            {portfolio.subtitle}
          </h3>
        </header>
        {/* portfolio */}
        <PortfolioGallery protfolioData={portfolio} />
      </div>
    </section>
  );
}
