import React from "react";
import lawyerData from "@/data/lawyer.json";
import HeaderSection from "@/components/lawyer/header/HeaderSection";
import ServicesSection from "@/components/lawyer/services/ServicesSection";

export default function LawyerHome() {
  const data = lawyerData;

  return (
    <div
      data-theme="lawyer"
      className="w-full min-h-screen bg-background-primary text-text-primary font-inter"
    >
      <HeaderSection data={data} />
      <ServicesSection data={data} />
    </div>
  );
}
