"use client";

import React from "react";
import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import PortfolioGrid from "./PortfolioGrid";

export default function PortfolioSection({ data }) {
  const { portfolio } = data;
  const [activeCategory, setActiveCategory] = useState("All Categories");

  // Filter entries based on active category
  const filteredEntries =
    activeCategory === "All Categories"
      ? portfolio.entries
      : portfolio.entries.filter((entry) =>
          entry.category.includes(activeCategory),
        );

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="px-4 py-32 bg-background-primary"
    >
      <div className="w-full max-w-7xl mx-auto space-y-20">
        {/* title and subtitle */}
        <header className="space-y-3 text-center lg:text-left">
          <h2
            id="services-heading"
            className="text-lg font-medium text-primary uppercase"
          >
            {portfolio.title}
          </h2>
          <h3 className="text-3xl md:text-4xl font-medium text-text-primary leading-11">
            {portfolio.subtitle}
          </h3>
        </header>

        {/* category filter and portfolio grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-25 justify-items-center lg:justify-items-start lg:items-start">
          <CategoryFilter
            categoryData={portfolio.categories}
            activeCategory={activeCategory}
            onCategorySelect={setActiveCategory}
          />
          <PortfolioGrid
            portfolioData={filteredEntries}
            activeCategory={activeCategory}
          />
        </div>
      </div>
    </section>
  );
}
