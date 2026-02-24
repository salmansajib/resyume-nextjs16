import React from "react";
import salesExecutiveOfficerData from "@/data/sales-executive-officer.json";
import HeaderSection from "@/components/sales-executive-officer/header/HeaderSection";
import ExperienceSection from "@/components/sales-executive-officer/experience/ExperienceSection";
import ServicesSection from "@/components/sales-executive-officer/services/ServicesSection";

export const metadata = {
  title: "Sales Executive Officer Resume | Rezyume",
  description:
    "A creative photographer resume template with career path, services, skills, and portfolio.",
};

export default function SalesExecutiveOfficerHome() {
  const data = salesExecutiveOfficerData;

  return (
    <div
      data-theme={data.theme}
      className="min-h-screen bg-background-primary font-poppins text-text-primary"
    >
      <HeaderSection data={data} />
      <ExperienceSection data={data} />
      <ServicesSection data={data} />
    </div>
  );
}
