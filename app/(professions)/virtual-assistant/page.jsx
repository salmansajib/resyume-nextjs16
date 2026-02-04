import React from "react";
import virtualAssistantData from "@/data/virtual-assistant.json";
import HeaderSection from "@/components/virtual-assistant/header/HeaderSection";
import ExperienceSection from "@/components/virtual-assistant/experience/ExperienceSection";
import ServicesSection from "@/components/virtual-assistant/services/ServicesSection";
import PortfolioSection from "@/components/virtual-assistant/portfolio/PortfolioSection";
import SkillsHobbiesSection from "@/components/virtual-assistant/skills-hobbies/SkillsHobbiesSection";

export default function VirtualAssistantHome() {
  const data = virtualAssistantData;

  return (
    <div
      data-theme="virtual-assistant"
      className="bg-background-primary w-full min-h-screen text-text-primary font-inter overflow-hidden"
    >
      <HeaderSection data={data} />
      <ExperienceSection data={data} />
      <ServicesSection data={data} />
      <PortfolioSection data={data} />
      <SkillsHobbiesSection data={data} />
    </div>
  );
}
