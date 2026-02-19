import React from "react";
import motionDesingerData from "@/data/motion-designer.json";
import HeaderSection from "@/components/motion-designer/header/HeaderSection";
import PortfolioSection from "@/components/motion-designer/portfolio/PortfolioSection";

export default function MotionDesignerHome() {
  const data = motionDesingerData;

  return (
    <div
      data-theme={data.theme}
      className="min-h-screen bg-background-primary font-exo text-text-primary"
    >
      <HeaderSection data={data} />
      <PortfolioSection data={data} />
    </div>
  );
}
