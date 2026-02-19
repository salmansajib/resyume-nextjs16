import React from "react";
import PortfolioGallery from "./PortfolioGallery";

export default function PortfolioSection({ data }) {
  const { portfolio } = data;

  return (
    <section aria-labelledby="portfolio-heading" className="">
      <div className="w-full max-w-[1642px] mx-auto px-4 py-20">
        {/* title and subtitle */}
        <div className="flex flex-col gap-2 items-center justify-center">
          <h2
            id="portfolio-heading"
            className="font-exo2 font-bold capitalize text-text-primary text-[clamp(2.5rem,5vw,3.8rem)] leading-none"
          >
            {portfolio.title}
          </h2>
          <h3 className="leading-12 lg:leading-20 font-exo2 font-bold capitalize text-[clamp(2.5rem,5vw,3.8rem)] text-center max-w-max bg-linear-to-r from-gradient-primary-start to-gradient-primary-end bg-clip-text text-transparent">
            {portfolio.subtitle}
          </h3>
        </div>

        {/* portfolio gallery */}
        <PortfolioGallery portfolioData={portfolio} />
      </div>
    </section>
  );
}
