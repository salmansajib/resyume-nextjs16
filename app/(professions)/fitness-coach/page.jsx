import React from "react";
import fitnessCoachData from "@/data/fitness-coach.json";
import HeaderSection from "@/components/fitness-coach/header/HeaderSection";

export default function FitnessCoachHome() {
  const data = fitnessCoachData;

  return (
    <div
      data-theme="fitness-coach"
      className="bg-background-primary w-full min-h-screen text-text-primary font-arimo overflow-hidden"
    >
      <HeaderSection data={data} />
    </div>
  );
}
