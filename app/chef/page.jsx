import React from "react";
import chefData from "@/data/chef.json";
import HeaderSection from "@/components/chef/header/HeaderSection";
import ServicesSection from "@/components/chef/services/ServicesSection";
import SkillsSection from "@/components/chef/skills/SkillsSection";

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
    </div>
  );
}
