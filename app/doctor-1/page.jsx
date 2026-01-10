import React from "react";
import doctorOneData from "@/data/doctor-1.json";
import HeaderSection from "@/components/doctor-1/header/HeaderSection";
import CarrerPathSection from "@/components/doctor-1/career-path/CarrerPathSection";
import SkillsSection from "@/components/doctor-1/skills/SkillsSection";

export default function DoctorOneHome() {
  const data = doctorOneData;

  return (
    <div
      data-theme="doctor-1"
      className="bg-background-primary w-full min-h-screen text-text-primary font-plusJakartaSans overflow-hidden"
    >
      <HeaderSection data={data} />
      <CarrerPathSection data={data} />
      <SkillsSection data={data} />
    </div>
  );
}
