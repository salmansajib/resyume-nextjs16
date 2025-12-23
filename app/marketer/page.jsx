import React from "react";
import marketerData from "@/data/marketer.json";
import HeaderSection from "@/components/marketer/header/HeaderSection";
import ServicesSection from "@/components/marketer/services/ServicesSection";
import SkillsSection from "@/components/marketer/skills/SkillsSection";
import CareerPathSection from "@/components/marketer/career-path/CareerPathSection";
import PortfolioSection from "@/components/marketer/portfolio/PortfolioSection";
import FooterSection from "@/components/marketer/footer/FooterSection";

export default function MarketerHome() {
  const data = marketerData;

  return (
    <div
      data-theme={data.theme}
      className="min-h-screen bg-background-primary font-teko text-text-primary"
    >
      <HeaderSection data={data} />
      <main>
        <ServicesSection data={data} />
        <SkillsSection data={data} />
        <CareerPathSection data={data} />
        <PortfolioSection data={data} />
      </main>
      <FooterSection data={data} />
    </div>
  );
}
