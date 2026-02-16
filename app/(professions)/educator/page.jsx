import React from "react";
import educatorData from "@/data/educator.json";
import HeaderSection from "@/components/educator/header/HeaderSection";
import ServicesSection from "@/components/educator/services/ServicesSection";

export default function EducatorHome() {
  const data = educatorData;

  return (
    <div
      data-theme="educator"
      className="relative bg-background-primary w-full min-h-screen text-text-primary font-poppins overflow-hidden"
    >
      <HeaderSection data={data} />
      <ServicesSection data={data} />
    </div>
  );
}
