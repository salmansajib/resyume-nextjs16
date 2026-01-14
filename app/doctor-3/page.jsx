import React from "react";
import doctorthreeData from "@/data/doctor-3.json";
import HeaderSection from "@/components/doctor-3/header/HeaderSection";
import SkillsSection from "@/components/doctor-3/skills/SkillsSection";
import CareerPathSection from "@/components/doctor-3/career-path/CareerPathSection";

export default function DoctorThreeHome() {
  const data = doctorthreeData;

  return (
    <div
      data-theme="doctor-3"
      className="bg-background-primary w-full min-h-screen text-text-primary font-poppins overflow-hidden"
    >
      <HeaderSection data={data} />
      <SkillsSection data={data} />
      <CareerPathSection data={data} />
    </div>
  );
}
