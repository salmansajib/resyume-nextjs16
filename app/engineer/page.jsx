import React from "react";
import engineerData from "@/data/engineer.json";
import HeaderSection from "@/components/engineer/header/HeaderSection";
import FooterSection from "@/components/engineer/footer/FooterSection";

export default function EngineerHome() {
  const data = engineerData;

  return (
    <div
      data-theme="engineer"
      className="relative bg-background-primary w-full min-h-screen text-text-primary font-mulish overflow-hidden"
    >
      <HeaderSection data={data} />
      <FooterSection data={data} />
    </div>
  );
}
