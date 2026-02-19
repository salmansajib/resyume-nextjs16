import React from "react";
import hairExpertData from "@/data/hair-expert.json";
import HeaderSection from "@/components/hair-expert/header/HeaderSection";
import ExperienceSection from "@/components/hair-expert/experience/ExperienceSection";
import ServicesSection from "@/components/hair-expert/services/ServicesSection";
import SkillsSection from "@/components/hair-expert/skills/SkillsSection";
import PortfolioSection from "@/components/hair-expert/portfolio/PortfolioSection";
import ReferralsSection from "@/components/hair-expert/referrals/ReferralsSection";
import FooterScetion from "@/components/hair-expert/footer/FooterSection";

export default function HairExpertHome() {
  const data = hairExpertData;

  return (
    <div
      data-theme={data.theme}
      className="bg-background-primary w-full min-h-screen text-text-primary font-arimo overflow-hidden"
    >
      <HeaderSection data={data} />
      <main>
        <ExperienceSection data={data} />
        <ServicesSection data={data} />
        <SkillsSection data={data} />
        <PortfolioSection data={data} />
        <ReferralsSection data={data} />
      </main>
      <FooterScetion />
    </div>
  );
}
