import React from "react";
import PortfolioGallery from "./PortfolioGallery";

export default function PortfolioSection({ data }) {
  const { portfolio } = data;

  return (
    <section
      aria-labelledby="portfolio-heading"
      className="relative overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
        {/* title and subtitle */}
        <div className="flex flex-col gap-4 items-center justify-center">
          <h2
            id="portfolio-heading"
            className="font-semibold text-primary capitalize relative leading-none"
          >
            <span className="relative z-10 ml-4">{portfolio.title}</span>
            <span className="absolute -top-2 left-0 size-8 rounded-full bg-background-neutral/50"></span>
            <span className="absolute -top-5 left-0 size-2.5 rounded-full bg-primary/50"></span>
          </h2>
          <h3 className="text-[clamp(2rem,4vw,3rem)] font-semibold capitalize leading-none text-center">
            {portfolio.subtitle}
          </h3>
        </div>

        {/* portfolio */}
        <PortfolioGallery portfolioData={portfolio} />
      </div>

      {/* decorative circles */}
      <div className="hidden md:block absolute -bottom-30 -right-70 size-[550px] rounded-full border-80 border-[#9BDEE4]"></div>
      <div className="hidden md:block absolute -top-20 -left-50 size-[420px] rounded-full border-80 border-[#ECB386]"></div>
    </section>
  );
}
