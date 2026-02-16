import React from "react";
import educatorData from "@/data/educator.json";
import HeaderSection from "@/components/educator/header/HeaderSection";
import ServicesSection from "@/components/educator/services/ServicesSection";
import ExperienceSection from "@/components/educator/experience/ExperienceSection";
import SkillsSection from "@/components/educator/skills/SkillsSection";
import PortfolioSection from "@/components/educator/portfolio/PortfolioSection";
import ReferralsSection from "@/components/educator/referrals/ReferralsSection";
import HobbiesSection from "@/components/educator/hobbies/HobbiesSection";
import FooterSection from "@/components/educator/footer/FooterSection";

export default function EducatorHome() {
  const data = educatorData;

  return (
    <div
      data-theme="educator"
      className="relative bg-background-primary w-full min-h-screen text-text-primary font-poppins overflow-hidden"
    >
      <HeaderSection data={data} />
      <ServicesSection data={data} />
      <ExperienceSection data={data} />
      <SkillsSection data={data} />
      <PortfolioSection data={data} />
      <ReferralsSection data={data} />
      <HobbiesSection data={data} />
      <FooterSection data={data} />
    </div>
  );
}
