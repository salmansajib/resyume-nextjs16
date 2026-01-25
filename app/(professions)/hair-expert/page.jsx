import React from "react";
import hairExpertData from "@/data/hair-expert.json";
import HeaderSection from "@/components/hair-expert/header/HeaderSection";
import ExperienceSection from "@/components/hair-expert/experience/ExperienceSection";
import ServicesSection from "@/components/hair-expert/services/ServicesSection";
import SkillsSection from "@/components/hair-expert/skills/SkillsSection";

export default function HairExpertHome() {
  const data = hairExpertData;

  return (
    <div
      data-theme="hair-expert"
      className="bg-background-primary w-full min-h-screen text-text-primary font-arimo overflow-hidden"
    >
      <HeaderSection data={data} />
      <ExperienceSection data={data} />
      <ServicesSection data={data} />
      <SkillsSection data={data} />
    </div>
  );
}
