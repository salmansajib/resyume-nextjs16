import React from "react";
import marketerData from "@/data/marketer.json";
import HeaderSection from "@/components/marketer/header/HeaderSection";

export default function MarketerHome() {
  const data = marketerData;

  return (
    <div
      data-theme={data.theme}
      className="min-h-screen bg-background-primary font-teko text-text-primary"
    >
      <HeaderSection data={data} />
    </div>
  );
}
