import React from "react";
import Image from "next/image";
import PortfolioGallery from "./PortfolioGallery";

export default function PortfolioSection({ data }) {
  const { portfolio } = data;

  return (
    <section
      aria-labelledby="portfolio-heading"
      className="bg-background-neutral"
    >
      <div className="w-full max-w-7xl mx-auto px-4 py-20">
        {/* title and subtitle */}
        <div className="flex flex-col items-center justify-center gap-3">
          <h2
            id="portfolio-heading"
            className="text-primary font-medium capitalize flex items-center gap-3 leading-none"
          >
            <Image
              src="/assets/travel-agent/icons/title-decorative-icon.svg"
              alt=""
              aria-hidden
              width={25}
              height={25}
              priority
              className="w-[20] h-auto object-cover aria-hidden:"
            />
            {portfolio.title}
          </h2>
          <h3 className="font-poppins font-semibold text-[clamp(2rem,4vw,2.82rem)] text-text-primary leading-none">
            {portfolio.subtitle}
          </h3>
        </div>

        {/* portfolio */}
        <PortfolioGallery portfolioData={portfolio} />
      </div>
    </section>
  );
}
