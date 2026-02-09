import React from "react";
import Image from "next/image";
import PortfolioGallery from "./PortfolioGallery";

export default function PortfolioSection({ data }) {
  const { portfolio } = data;

  return (
    <section id="portfolio" aria-labelledby="portfolio-heading" className="">
      <div className="py-20">
        {/* title and subtitle */}
        <div className="flex gap-3 flex-col items-center justify-center">
          <h2
            id="portfolio-heading"
            className="flex items-center gap-1 text-primary font-medium capitalize"
          >
            <Image
              src="/assets/financial-advisor/images/section-title-decorative-line.png"
              aria-hidden
              alt=""
              width={5}
              height={20}
              priority
              className="w-[3px] h-auto object-cover"
            />
            {portfolio.title}
          </h2>
          <h3 className="text-[clamp(2rem,3vw,2.9rem)] font-medium text-center capitalize leading-none">
            {portfolio.subtitle}
          </h3>
        </div>

        {/* portfolio */}
        <PortfolioGallery portfolioData={portfolio} />
      </div>
    </section>
  );
}
