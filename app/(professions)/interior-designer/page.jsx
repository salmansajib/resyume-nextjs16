import React from "react";
import interiorDesignerData from "@/data/interior-designer.json";
import HeaderSection from "@/components/interior-designer/header/HeaderSection";

export default function InteriorDesignerHome() {
  const data = interiorDesignerData;

  return (
    <div
      data-theme="interior-designer"
      className="bg-background-primary w-full min-h-screen text-text-primary font-barlow overflow-hidden"
    >
      <HeaderSection data={data} />
    </div>
  );
}
