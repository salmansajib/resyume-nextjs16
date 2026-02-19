import React from "react";
import doctorOneData from "@/data/doctor-1.json";
import HeaderSection from "@/components/doctor-1/header/HeaderSection";
import CarrerPathSection from "@/components/doctor-1/career-path/CarrerPathSection";
import SkillsSection from "@/components/doctor-1/skills/SkillsSection";
import ServicesSection from "@/components/doctor-1/services/ServicesSection";
import AchievementsSection from "@/components/doctor-1/achievements/AchievementsSection";
import HobbiesSection from "@/components/doctor-1/hobbies/HobbiesSection";
import ReferralsSection from "@/components/doctor-1/referrals/ReferralsSection";
import FooterScetion from "@/components/doctor-1/footer/FooterSection";

export const metadata = {
  title: "Doctor Resume | Rezyume",
  description:
    "A clean and elegant doctor resume template with career path, skills, services, achievements, and referrals.",
};

export default function DoctorOneHome() {
  const data = doctorOneData;

  return (
    <div
      data-theme={data.theme}
      className="bg-background-primary w-full min-h-screen text-text-primary font-plusJakartaSans overflow-hidden"
    >
      <HeaderSection data={data} />
      <main>
        <CarrerPathSection data={data} />
        <SkillsSection data={data} />
        <ServicesSection data={data} />
        <AchievementsSection data={data} />
        <HobbiesSection data={data} />
        <ReferralsSection data={data} />
      </main>
      <FooterScetion />
    </div>
  );
}
