import React from "react";
import interiorDesignerData from "@/data/interior-designer.json";
import HeaderSection from "@/components/interior-designer/header/HeaderSection";
import ServicesSection from "@/components/interior-designer/services/ServicesSection";
import ExperienceSection from "@/components/interior-designer/Experience/ExperienceSection";
import SkillsSection from "@/components/interior-designer/skills/SkillsSection";

export default function InteriorDesignerHome() {
  const data = interiorDesignerData;

  return (
    <div
      data-theme="interior-designer"
      className="bg-background-primary w-full min-h-screen text-text-primary font-barlow overflow-hidden"
    >
      <HeaderSection data={data} />
      <ServicesSection data={data} />
      <ExperienceSection data={data} />
      <SkillsSection data={data} />
    </div>
  );
}
