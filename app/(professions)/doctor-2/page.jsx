import React from "react";
import doctorTwoData from "@/data/doctor-2.json";
import HeaderSection from "@/components/doctor-2/header/HeaderSection";
import CareerPathSection from "@/components/doctor-2/career-path/CareerPathSection";
import SkillsSection from "@/components/doctor-2/skills/SkillsSection";
import ServicesSection from "@/components/doctor-2/services/ServicesSection";
import PortfolioSection from "@/components/doctor-2/portfolio/PortfolioSection";
import HobbiesSection from "@/components/doctor-2/hobbies/HobbiesSection";
import ReferralsSection from "@/components/doctor-2/referrals/ReferralsSection";
import FooterScetion from "@/components/doctor-2/footer/FooterSection";

export default function DoctorTwoHome() {
  const data = doctorTwoData;

  return (
    <div
      data-theme={data.theme}
      className="bg-background-primary w-full min-h-screen text-text-primary font-plusJakartaSans overflow-hidden"
    >
      <HeaderSection data={data} />
      <main>
        <CareerPathSection data={data} />
        <SkillsSection data={data} />
        <ServicesSection data={data} />
        <PortfolioSection data={data} />
        <HobbiesSection data={data} />
        <ReferralsSection data={data} />
      </main>
      <FooterScetion />
    </div>
  );
}
