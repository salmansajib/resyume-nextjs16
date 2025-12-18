import React from "react";
import PortfolioGallery from "./PortfolioGallery";

export default function PortfolioSection({ data }) {
  const { portfolio } = data;

  return (
    <section
      aria-labelledby="portfolio-headign"
      className="py-20 px-4 relative overflow-hidden"
    >
      <div className="w-full max-w-[1580px] mx-auto overflow-hidden relative z-10">
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

      {/* gradient background circles */}
      <div className="absolute -top-150 left-1/2 -translate-x-1/2 size-[1051px] bg-radial-[circle_at_center] from-[#975219]/30 from-0% via-[#995E2E]/5 via-55% to-transparent to-70% rounded-full"></div>
      <div className="absolute -right-100 -bottom-90 size-[1200px] bg-radial-[circle_at_center] from-[#12AFBF]/30 from-0% via-[#328F99]/5 via-55% to-transparent to-70% rounded-full"></div>
      <div className="absolute -left-100 -bottom-90 size-[1200px] bg-radial-[circle_at_center] from-[#12AFBF]/30 from-0% via-[#328F99]/5 via-55% to-transparent to-70% rounded-full"></div>
    </section>
  );
}
