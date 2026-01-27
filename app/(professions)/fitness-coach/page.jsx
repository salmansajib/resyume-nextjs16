import React from "react";
import fitnessCoachData from "@/data/fitness-coach.json";
import HeaderSection from "@/components/fitness-coach/header/HeaderSection";
import ExperienceSection from "@/components/fitness-coach/experience/ExperienceSection";
import ServicesSection from "@/components/fitness-coach/services/ServicesSection";
import SkillsSection from "@/components/fitness-coach/skills/SkillsSection";

export default function FitnessCoachHome() {
  const data = fitnessCoachData;

  return (
    <div
      data-theme="fitness-coach"
      className="bg-background-primary w-full min-h-screen text-text-primary font-arimo overflow-hidden"
    >
      <HeaderSection data={data} />
      <ExperienceSection data={data} />
      <ServicesSection data={data} />
      <SkillsSection data={data} />
    </div>
  );
}
