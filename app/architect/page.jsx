import React from "react";
import architectData from "@/data/architect.json";
import HeaderSection from "@/components/architect/header/HeaderSection";

export default function ArchitectHome() {
  const data = architectData;

  return (
    <div
      data-theme="architect"
      className="bg-background-primary w-full min-h-screen text-text-primary font-dmSans"
    >
      <HeaderSection data={data} />
    </div>
  );
}
