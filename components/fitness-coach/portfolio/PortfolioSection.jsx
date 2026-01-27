import React from "react";
import Image from "next/image";
import PortfolioGallery from "./PortfolioGallery";

export default function PortfolioSection({ data }) {
  const { portfolio } = data;

  return (
    <section
      aria-labelledby="portfolio-heading"
      className="bg-background-secondary"
    >
      <div className="py-20">
        {/* subtitle */}
        <div className="relative max-w-max mx-auto leading-none">
          <h3
            id="portfolio-heading"
            className="relative z-10 font-teko text-[clamp(3rem,4vw,4.375rem)] capitalize"
          >
            {portfolio.subtitle}
          </h3>
          <div aria-hidden className="absolute bottom-2 -right-8">
            <Image
              src="/assets/fitness-coach/images/decorative-dotted-grid-section-subtitle.png"
              alt=""
              width={100}
              height={50}
              className="w-[84px] h-8 object-cover"
            />
          </div>
        </div>

        {/* portfolio gallery */}
        <PortfolioGallery portfolioData={portfolio} />
      </div>
    </section>
  );
}
