import React from "react";
import engineerData from "@/data/engineer.json";
import HeaderSection from "@/components/engineer/header/HeaderSection";
import FooterSection from "@/components/engineer/footer/FooterSection";
import SkillsSection from "@/components/engineer/skills/SkillsSection";
import ExperienceSection from "@/components/engineer/experience/ExperienceSection";
import ServicesSection from "@/components/engineer/services/ServicesSection";
import PortfolioSection from "@/components/engineer/portfolio/PortfolioSection";
import HobbiesSection from "@/components/engineer/hobbies/HobbiesSection";

export default function EngineerHome() {
  const data = engineerData;

  return (
    <div
      data-theme="engineer"
      className="relative bg-background-primary w-full min-h-screen text-text-primary font-mulish overflow-hidden"
    >
      <HeaderSection data={data} />
      <main>
        <SkillsSection data={data} />
        <ExperienceSection data={data} />
        <ServicesSection data={data} />
        <PortfolioSection data={data} />
        <HobbiesSection data={data} />
      </main>
      <FooterSection data={data} />
    </div>
  );
}
