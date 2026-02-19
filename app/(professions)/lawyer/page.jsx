import React from "react";
import lawyerData from "@/data/lawyer.json";
import HeaderSection from "@/components/lawyer/header/HeaderSection";
import ServicesSection from "@/components/lawyer/services/ServicesSection";
import SkillsAndReferralsSection from "@/components/lawyer/skills-referrals/SkillsAndReferralsSection";
import CareerPathSection from "@/components/lawyer/carrer-path/CareerPathSection";
import PortfolioSection from "@/components/lawyer/portfolio/PortfolioSection";
import HobbiesSection from "@/components/lawyer/hobbies/HobbiesSection";
import FooterSection from "@/components/lawyer/footer/FooterSection";

export const metadata = {
  title: "Lawyer Resume | Rezyume",
  description:
    "A sophisticated lawyer resume template featuring services, skills, career path, portfolio, and hobbies.",
};

export default function LawyerHome() {
  const data = lawyerData;

  return (
    <div
      data-theme={data.theme}
      className="w-full min-h-screen bg-background-primary text-text-primary font-inter"
    >
      <HeaderSection data={data} />
      <main>
        <ServicesSection data={data} />
        <SkillsAndReferralsSection data={data} />
        <CareerPathSection data={data} />
        <PortfolioSection data={data} />
        <HobbiesSection data={data} />
      </main>
      <FooterSection data={data} />
    </div>
  );
}
