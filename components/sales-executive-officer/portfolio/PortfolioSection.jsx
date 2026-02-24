import React from "react";
import Image from "next/image";
import PortfolioGallery from "./PortfolioGallery";

export default function PortfolioSection({ data }) {
  const { portfolio } = data;

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="bg-background-secondary"
    >
      <div className="py-20">
        {/* title and subtitle */}
        <div className="flex flex-col gap-5 items-center justify-center">
          <h2
            id="portfolio-heading"
            className="bg-text-primary px-5 py-3 capitalize text-background-primary leading-none"
          >
            {portfolio.title}
          </h2>
          <h3 className="leading-none font-medium capitalize text-[clamp(2.2rem,3vw,2.6rem)] text-center">
            {portfolio.subtitle}
          </h3>
        </div>

        {/* portfolio */}
        <PortfolioGallery portfolioData={portfolio} />
      </div>
    </section>
  );
}
