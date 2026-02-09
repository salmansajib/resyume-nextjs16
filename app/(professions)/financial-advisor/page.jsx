import React from "react";
import financialAdvisorData from "@/data/financial-advisor.json";
import HeaderSection from "@/components/financial-advisor/header/HeaderSection";
import ExperienceSection from "@/components/financial-advisor/experience/ExperienceSection";
import ServicesSection from "@/components/financial-advisor/services/ServicesSection";
import HobbiesSkills from "@/components/financial-advisor/hoddies-skills/HobbiesSkills";

export default function FinancialAdvisorHome() {
  const data = financialAdvisorData;

  return (
    <div
      data-theme="financial-advisor"
      className="bg-background-primary w-full min-h-screen text-text-primary font-outfit overflow-hidden"
    >
      <div>
        <HeaderSection data={data} />
        <ExperienceSection data={data} />
        <ServicesSection data={data} />
        <HobbiesSkills data={data} />
      </div>
    </div>
  );
}
