import React from "react";
import webDesignerDeveloperData from "@/data/web-designer-developer.json";
import HeaderSection from "@/components/web-designer-developer/header/HeaderSection";
import ServicesSection from "@/components/web-designer-developer/services/ServicesSection";
import ExperienceSection from "@/components/web-designer-developer/experience/ExperienceSection";
import SkillsSection from "@/components/web-designer-developer/skills/SkillsSection";

export default function WebDesignerDeveloperHome() {
  const data = webDesignerDeveloperData;

  return (
    <div
      data-theme={data.theme}
      className="bg-background-primary w-full min-h-screen text-text-primary font-plusJakartaSans overflow-hidden"
    >
      <HeaderSection data={data} />
      <ServicesSection data={data} />
      <ExperienceSection data={data} />
      <SkillsSection data={data} />
    </div>
  );
}
