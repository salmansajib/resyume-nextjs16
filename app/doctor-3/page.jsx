import React from "react";
import doctorthreeData from "@/data/doctor-3.json";
import HeaderSection from "@/components/doctor-3/header/HeaderSection";

export default function DoctorThreeHome() {
  const data = doctorthreeData;

  return (
    <div
      data-theme="doctor-3"
      className="bg-background-primary w-full min-h-screen text-text-primary font-poppins overflow-hidden"
    >
      <HeaderSection data={data} />
    </div>
  );
}
