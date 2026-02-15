import React from "react";
import hrManagerData from "@/data/hr-manager.json";
import HeaderSection from "@/components/hr-manager/header/HeaderSection";
import ExperienceSection from "@/components/hr-manager/experience/ExperienceSection";
import ServicesSection from "@/components/hr-manager/services/ServicesSection";
import SkillsSection from "@/components/hr-manager/skills/SkillsSection";
import PortfolioSection from "@/components/hr-manager/portfolio/PortfolioSection";
import ReferralsSection from "@/components/hr-manager/referrals/ReferralsSection";

export default function HrManagerHome() {
  const data = hrManagerData;

  return (
    <div
      data-theme="hr-manager"
      className="bg-background-primary w-full min-h-screen text-text-primary font-roboto overflow-hidden"
    >
      <HeaderSection data={data} />
      <ExperienceSection data={data} />
      <ServicesSection data={data} />
      <SkillsSection data={data} />
      <PortfolioSection data={data} />
      <ReferralsSection data={data} />
    </div>
  );
}
