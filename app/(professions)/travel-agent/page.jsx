import React from "react";
import travelAgentData from "@/data/travel-agent.json";
import HeaderSection from "@/components/travel-agent/header/HeaderSection";
import ServicesSection from "@/components/travel-agent/services/ServicesSection";
import PortfolioSection from "@/components/travel-agent/portfolio/PortfolioSection";

export default function page() {
  const data = travelAgentData;

  return (
    <div
      data-theme="travel-agent"
      className="bg-background-primary w-full min-h-screen text-text-primary font-outfit overflow-hidden"
    >
      <HeaderSection data={data} />
      <ServicesSection data={data} />
      <PortfolioSection data={data} />
    </div>
  );
}
