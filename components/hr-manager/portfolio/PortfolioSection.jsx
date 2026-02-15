import React from "react";
import PortfolioGallery from "./PortfolioGallery";

export default function PortfolioSection({ data }) {
  const { portfolio } = data;

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="bg-[url(/assets/hr-manager/images/bg-image-services.svg)] bg-no-repeat bg-cover"
    >
      <div className="w-full max-w-7xl mx-auto px-4 py-20">
        {/* title and subtitle */}
        <div className="flex gap-3 flex-col items-center justify-center">
          <h2
            id="portfolio-heading"
            className="text-lg font-medium capitalize bg-linear-to-b from-gradient-primary-start via-gradient-primary-middle to-gradient-primary-end bg-clip-text text-transparent"
          >
            {portfolio.title}
          </h2>
          <h3 className="text-[clamp(2rem,3vw,2.9rem)] text-primary font-poppins font-medium text-center capitalize leading-none">
            {portfolio.subtitle}
          </h3>
        </div>

        {/* achievements */}
        <PortfolioGallery portfolioData={portfolio} />
      </div>
    </section>
  );
}
