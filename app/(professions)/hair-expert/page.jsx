import React from "react";
import hairExpertData from "@/data/hair-expert.json";
import HeaderSection from "@/components/hair-expert/header/HeaderSection";

export default function HairExpertHome() {
  const data = hairExpertData;

  return (
    <div
      data-theme="hair-expert"
      className="bg-background-primary w-full min-h-screen text-text-primary font-arimo overflow-hidden"
    >
      <HeaderSection data={data} />
    </div>
  );
}
