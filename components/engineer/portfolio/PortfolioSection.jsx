import React from "react";
import PortfolioGallery from "./PortfolioGallery";

export default function PortfolioSection({ data }) {
  const { portfolio } = data;

  return (
    <section aria-labelledby="portfolio-heading" className="py-20">
      {/* title and subtitle */}
      <div className="space-y-4 px-4">
        <h2
          id="portfolio-heading"
          className="relative font-semibold capitalize max-w-max mx-auto"
        >
          <div className="relative z-10">{portfolio.title}</div>
          <div
            aria-hidden="true"
            className="bg-primary w-[37px] h-[33px] absolute top-1/2 -translate-y-1/2 -left-6"
          ></div>
        </h2>
        <h3 className="font-chakraPetch text-[40px] font-semibold uppercase max-w-max mx-auto text-center">
          {portfolio.subtitle}
        </h3>
      </div>

      {/* portfolio */}
      <PortfolioGallery portfolioData={portfolio} />
    </section>
  );
}
