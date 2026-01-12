import React from "react";
import doctorTwoData from "@/data/doctor-2.json";
import HeaderSection from "@/components/doctor-2/header/HeaderSection";
import CareerPathSection from "@/components/doctor-2/career-path/CareerPathSection";
import SkillsSection from "@/components/doctor-2/skills/SkillsSection";
import ServicesSection from "@/components/doctor-2/services/ServicesSection";

export default function DoctorTwoHome() {
  const data = doctorTwoData;

  return (
    <div
      data-theme="doctor-2"
      className="bg-background-primary w-full min-h-screen text-text-primary font-plusJakartaSans overflow-hidden"
    >
      <HeaderSection data={data} />
      <CareerPathSection data={data} />
      <SkillsSection data={data} />
      <ServicesSection data={data} />
    </div>
  );
}
