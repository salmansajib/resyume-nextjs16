import React from "react";
import interiorDesignerData from "@/data/interior-designer.json";
import HeaderSection from "@/components/interior-designer/header/HeaderSection";
import ServicesSection from "@/components/interior-designer/services/ServicesSection";
import ExperienceSection from "@/components/interior-designer/Experience/ExperienceSection";
import SkillsSection from "@/components/interior-designer/skills/SkillsSection";
import PortfolioSection from "@/components/interior-designer/portfolio/PortfolioSection";
import HobbiesSection from "@/components/interior-designer/hobbies/HobbiesSection";
import ReferralsSection from "@/components/interior-designer/referrals/ReferralsSection";
import FooterSection from "@/components/interior-designer/footer/FooterSection";

export default function InteriorDesignerHome() {
  const data = interiorDesignerData;

  return (
    <div
      data-theme="interior-designer"
      className="bg-background-primary w-full min-h-screen text-text-primary font-barlow overflow-hidden"
    >
      <HeaderSection data={data} />
      <main>
        <ServicesSection data={data} />
        <ExperienceSection data={data} />
        <SkillsSection data={data} />
        <PortfolioSection data={data} />
        <HobbiesSection data={data} />
        <ReferralsSection data={data} />
      </main>
      <FooterSection />
    </div>
  );
}
