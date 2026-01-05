import React from "react";
import architectData from "@/data/architect.json";
import HeaderSection from "@/components/architect/header/HeaderSection";
import ServicesSection from "@/components/architect/services/ServicesSection";
import SkillsSection from "@/components/architect/skills/SkillsSection";

export default function ArchitectHome() {
  const data = architectData;

  return (
    <div
      data-theme="architect"
      className="bg-background-primary w-full min-h-screen text-text-primary font-dmSans overflow-hidden"
    >
      <HeaderSection data={data} />
      <ServicesSection data={data} />
      <SkillsSection data={data} />
    </div>
  );
}
