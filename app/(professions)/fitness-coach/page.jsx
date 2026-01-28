import React from "react";
import fitnessCoachData from "@/data/fitness-coach.json";
import HeaderSection from "@/components/fitness-coach/header/HeaderSection";
import ExperienceSection from "@/components/fitness-coach/experience/ExperienceSection";
import ServicesSection from "@/components/fitness-coach/services/ServicesSection";
import SkillsSection from "@/components/fitness-coach/skills/SkillsSection";
import PortfolioSection from "@/components/fitness-coach/portfolio/PortfolioSection";
import HobbiesSection from "@/components/fitness-coach/hobbies/HobbiesSection";
import ReferralsSection from "@/components/fitness-coach/referrals/ReferralsSection";
import FooterScetion from "@/components/fitness-coach/footer/FooterSection";

export default function FitnessCoachHome() {
  const data = fitnessCoachData;

  return (
    <div
      data-theme="fitness-coach"
      className="bg-background-primary w-full min-h-screen text-text-primary font-arimo overflow-hidden"
    >
      <HeaderSection data={data} />
      <main>
        <ExperienceSection data={data} />
        <ServicesSection data={data} />
        <SkillsSection data={data} />
        <PortfolioSection data={data} />
        <HobbiesSection data={data} />
        <ReferralsSection data={data} />
      </main>
      <FooterScetion />
    </div>
  );
}
