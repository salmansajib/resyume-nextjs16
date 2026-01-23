import React from "react";
import photographerData from "@/data/photographer.json";
import HeaderSection from "@/components/photographer/header/HeaderSection";
import CareerPathSection from "@/components/photographer/career-path/CareerPathSection";
import ServicesSecton from "@/components/photographer/services/ServicesSecton";
import SkillsSection from "@/components/photographer/skills/SkillsSection";
import PortfolioSection from "@/components/photographer/portfolio/PortfolioSection";
import FooterSection from "@/components/photographer/footer/FooterSection";

export default function PhotographerHome() {
  const data = photographerData;

  return (
    <div
      data-theme={data.theme}
      className="min-h-screen bg-background-primary font-roboto text-text-primary"
    >
      <HeaderSection data={data} />
      <main>
        <CareerPathSection data={data} />
        <ServicesSecton data={data} />
        <SkillsSection data={data} />
        <PortfolioSection data={data} />
      </main>
      <FooterSection data={data} />
    </div>
  );
}
