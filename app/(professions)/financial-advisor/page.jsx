import React from "react";
import financialAdvisorData from "@/data/financial-advisor.json";
import HeaderSection from "@/components/financial-advisor/header/HeaderSection";

export default function FinancialAdvisorHome() {
  const data = financialAdvisorData;

  return (
    <div
      data-theme="financial-advisor"
      className="bg-background-primary w-full min-h-screen text-text-primary font-outfit overflow-hidden"
    >
      <div>
        <HeaderSection data={data} />
      </div>
    </div>
  );
}
