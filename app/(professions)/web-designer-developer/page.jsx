import React from "react";
import webDesignerDeveloperData from "@/data/web-designer-developer.json";
import HeaderSection from "@/components/web-designer-developer/header/HeaderSection";

export default function WebDesignerDeveloperHome() {
  const data = webDesignerDeveloperData;

  return (
    <div
      data-theme={data.theme}
      className="bg-background-primary w-full min-h-screen text-text-primary font-plusJakartaSans overflow-hidden"
    >
      <HeaderSection data={data} />
    </div>
  );
}
