import React from "react";
import architectData from "@/data/architect.json";
import HeaderSection from "@/components/architect/header/HeaderSection";
import ServicesSection from "@/components/architect/services/ServicesSection";
import ExperienceSection from "@/components/architect/experience/ExperienceSection";
import SkillsSection from "@/components/architect/skills/SkillsSection";
import PortfolioSection from "@/components/architect/portfolio/PortfolioSection";
import ReferralsSection from "@/components/architect/referrals/ReferralsSection";
import HobbiesSection from "@/components/architect/hobbies/HobbiesSection";
import FooterSection from "@/components/architect/footer/FooterSection";

export const metadata = {
  title: "Architect Resume | Rezyume",
  description:
    "A professional architect resume template showcasing services, experience, skills, portfolio, and more.",
};

export default function ArchitectHome() {
  const data = architectData;

  return (
    <div
      data-theme={data.theme}
      className="bg-background-primary w-full min-h-screen text-text-primary font-dmSans overflow-hidden"
    >
      <HeaderSection data={data} />
      <main>
        <ServicesSection data={data} />
        <ExperienceSection data={data} />
        <SkillsSection data={data} />
        <PortfolioSection data={data} />
        <ReferralsSection data={data} />
        <HobbiesSection data={data} />
      </main>
      <FooterSection data={data} />
    </div>
  );
}
