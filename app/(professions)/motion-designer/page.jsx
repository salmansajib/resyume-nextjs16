import React from "react";
import motionDesingerData from "@/data/motion-designer.json";
import HeaderSection from "@/components/motion-designer/header/HeaderSection";
import PortfolioSection from "@/components/motion-designer/portfolio/PortfolioSection";
import CareerPathSection from "@/components/motion-designer/career-path/CareerPathSection";
import ServicesSection from "@/components/motion-designer/services/ServicesSection";
import ReferralsSkillsSection from "@/components/motion-designer/referrals-skills/ReferralsSkillsSection";
import HobbiesSection from "@/components/motion-designer/hobbies/HobbiesSection";
import FooterScetion from "@/components/motion-designer/footer/FooterSection";

export const metadata = {
  title: "Motion Designer Resume | Rezyume",
  description:
    "A creative motion designer resume template showcasing portfolio, services, and career path.",
};

export default function MotionDesignerHome() {
  const data = motionDesingerData;

  return (
    <div
      data-theme={data.theme}
      className="min-h-screen bg-background-primary font-exo text-text-primary overflow-hidden"
    >
      <HeaderSection data={data} />
      <PortfolioSection data={data} />
      <CareerPathSection data={data} />
      <ServicesSection data={data} />
      <ReferralsSkillsSection data={data} />
      <HobbiesSection data={data} />
      <FooterScetion />
    </div>
  );
}
