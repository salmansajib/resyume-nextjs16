import React from "react";
import marketerData from "@/data/marketer.json";
import HeaderSection from "@/components/marketer/header/HeaderSection";
import ServicesSection from "@/components/marketer/services/ServicesSection";
import SkillsSection from "@/components/marketer/skills/SkillsSection";
import CarrerPathSection from "@/components/marketer/carrer-path/CarrerPathSection";
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
      <ServicesSection data={data} />
      <SkillsSection data={data} />
      <CarrerPathSection data={data} />
      <PortfolioSection data={data} />
      <FooterSection data={data} />
    </div>
  );
}
