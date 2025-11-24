import Image from "next/image";
import React from "react";

export default function PortfolioGrid({ portfolioData }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 min-h-[400px]">
      {portfolioData.length === 0 ? (
        <div className="col-span-full flex items-center justify-center py-20">
          <p className="text-xl text-text-secondary text-center">
            No projects found in this category.
          </p>
        </div>
      ) : (
        portfolioData.map((portfolio) => (
          <div key={portfolio.id}>
            <Image
              src={portfolio.image}
              alt="portfolio image"
              width={500}
              height={500}
              className="w-[300] h-auto"
            />
          </div>
        ))
      )}
    </div>
  );
}
