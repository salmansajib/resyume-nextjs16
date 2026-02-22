import React from "react";
import webDesignerDeveloperData from "@/data/web-designer-developer.json";
import HeaderSection from "@/components/web-designer-developer/header/HeaderSection";
import ServicesSection from "@/components/web-designer-developer/services/ServicesSection";
import ExperienceSection from "@/components/web-designer-developer/experience/ExperienceSection";
import SkillsSection from "@/components/web-designer-developer/skills/SkillsSection";
import PortfolioSection from "@/components/web-designer-developer/portfolio/PortfolioSection";
import ReferralsSection from "@/components/web-designer-developer/referrals/ReferralsSection";
import HobbiesSection from "@/components/web-designer-developer/hobbies/HobbiesSection";
import FooterSection from "@/components/web-designer-developer/footer/FooterSection";

export default function WebDesignerDeveloperHome() {
  const data = webDesignerDeveloperData;

  return (
    <div
      data-theme={data.theme}
      className="bg-background-primary w-full min-h-screen text-text-primary font-plusJakartaSans overflow-hidden"
    >
      <HeaderSection data={data} />
      <main>
        <ServicesSection data={data} />
        <ExperienceSection data={data} />
        <SkillsSection data={data} />
        <PortfolioSection data={data} />
        <div className="bg-[url(/assets/web-designer-developer/images/bg-img-ref-hob-foot.png)] bg-no-repeat bg-cover">
          <ReferralsSection data={data} />
          <HobbiesSection data={data} />
        </div>
      </main>
      <FooterSection data={data} />
    </div>
  );
}
