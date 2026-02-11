import React from "react";
import hrManagerData from "@/data/hr-manager.json";
import HeaderSection from "@/components/hr-manager/header/HeaderSection";

export default function HrManagerHome() {
  const data = hrManagerData;

  return (
    <div
      data-theme="hr-manager"
      className="bg-background-primary w-full min-h-screen text-text-primary font-roboto overflow-hidden"
    >
      <HeaderSection data={data} />
    </div>
  );
}
