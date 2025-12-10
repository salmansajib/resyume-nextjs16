import React from "react";
import BracketedHeading from "../BracketedHeading";
import PortfolioGallery from "./PortfolioGallery";

export default function PortfolioSection({ data }) {
  const { portfolio } = data;

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-header"
      className="w-full px-4 py-20 bg-background-primary"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* title and subtitle */}
        <header className="space-y-3 flex flex-col items-center justify-center">
          <div className="relative">
            <h2
              id="portfolio-header"
              className="font-medium text-[50px] md:text-[80px] text-text-dimmed"
            >
              PORTFOLIO
            </h2>
            <div className="absolute top-7 md:top-13 left-1/2 -translate-x-1/2">
              <BracketedHeading className="uppercase">
                {portfolio.title}
              </BracketedHeading>
            </div>
          </div>
          <h3 className="text-[30px] md:text-[40px] font-medium text-text-primary">
            {portfolio.subtitle}
          </h3>
        </header>

        {/* portfolio */}
        <PortfolioGallery portfolioData={portfolio} />
      </div>
    </section>
  );
}
