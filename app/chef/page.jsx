import React from "react";
import chefData from "@/data/chef.json";
import HeaderSection from "@/components/chef/header/HeaderSection";
import ServicesSection from "@/components/chef/services/ServicesSection";
import SkillsSection from "@/components/chef/skills/SkillsSection";
import CarrerPathSection from "@/components/chef/carrer-path/CarrerPathSection";
import PortfolioSection from "@/components/chef/portfolio/PortfolioSection";
import ReferralSection from "@/components/chef/referrals/ReferralSection";

export default function ChefHome() {
  const data = chefData;

  return (
    <div
      data-theme="chef"
      className="bg-background-primary w-full min-h-screen text-text-primary font-playfairDisplay"
    >
      <HeaderSection data={data} />
      <ServicesSection data={data} />
      <SkillsSection data={data} />
      <CarrerPathSection data={data} />
      <PortfolioSection data={data} />
      <ReferralSection data={data} />
    </div>
  );
}
