import React from "react";
import travelAgentData from "@/data/travel-agent.json";
import HeaderSection from "@/components/travel-agent/header/HeaderSection";
import ServicesSection from "@/components/travel-agent/services/ServicesSection";
import PortfolioSection from "@/components/travel-agent/portfolio/PortfolioSection";
import SkillsSection from "@/components/travel-agent/skills/SkillsSection";
import ExperienceSection from "@/components/travel-agent/experience/ExperienceSection";
import ReferralsSection from "@/components/travel-agent/referrals/ReferralsSection";
import HobbiesSection from "@/components/travel-agent/hobbies/HobbiesSection";
import FooterSection from "@/components/travel-agent/footer/FooterSection";

export default function page() {
  const data = travelAgentData;

  return (
    <div
      data-theme="travel-agent"
      className="bg-background-primary w-full min-h-screen text-text-primary font-outfit overflow-hidden"
    >
      <HeaderSection data={data} />
      <main>
        <ServicesSection data={data} />
        <PortfolioSection data={data} />
        <SkillsSection data={data} />
        <ExperienceSection data={data} />
        <ReferralsSection data={data} />
        <HobbiesSection data={data} />
      </main>
      <FooterSection />
    </div>
  );
}
