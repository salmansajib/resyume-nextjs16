import React from "react";
import photographerData from "@/data/photographer.json";
import HeaderSection from "@/components/photographer/header/HeaderSection";

export default function PhotographerHome() {
  const data = photographerData;

  return (
    <div
      data-theme={data.theme}
      className="min-h-screen bg-background-primary font-roboto text-text-primary"
    >
      <HeaderSection data={data} />
    </div>
  );
}
