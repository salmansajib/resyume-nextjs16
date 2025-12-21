import React from "react";
import lawyerData from "@/data/lawyer.json";
import HeaderSection from "@/components/lawyer/header/HeaderSection";

export default function LawyerHome() {
  const data = lawyerData;

  return (
    <div
      data-theme="lawyer"
      className="w-full min-h-screen bg-background-primary text-text-primary font-inter"
    >
      <HeaderSection data={data} />
    </div>
  );
}
