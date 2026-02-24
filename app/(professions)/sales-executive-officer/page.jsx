import React from "react";
import salesExecutiveOfficerData from "@/data/sales-executive-officer.json";
import HeaderSection from "@/components/sales-executive-officer/header/HeaderSection";
import ExperienceSection from "@/components/sales-executive-officer/experience/ExperienceSection";
import ServicesSection from "@/components/sales-executive-officer/services/ServicesSection";
import SkillsSection from "@/components/sales-executive-officer/skills/SkillsSection";
import PortfolioSection from "@/components/sales-executive-officer/portfolio/PortfolioSection";
import ReferralsSection from "@/components/sales-executive-officer/referrals/ReferralsSection";
import HobbiesSection from "@/components/sales-executive-officer/hobbies/HobbiesSection";
import FooterScetion from "@/components/sales-executive-officer/footer/FooterSection";

export const metadata = {
  title: "Sales Executive Officer Resume | Rezyume",
  description:
    "A creative photographer resume template with career path, services, skills, and portfolio.",
};

export default function SalesExecutiveOfficerHome() {
  const data = salesExecutiveOfficerData;

  return (
    <div
      data-theme={data.theme}
      className="min-h-screen bg-background-primary font-poppins text-text-primary"
    >
      <HeaderSection data={data} />
      <main>
        <ExperienceSection data={data} />
        <ServicesSection data={data} />
        <SkillsSection data={data} />
        <PortfolioSection data={data} />
        <div className="bg-[url(/assets/sales-executive-officer/images/bg-img-ref-hob.png)] bg-no-repeat bg-cover">
          <ReferralsSection data={data} />
          <HobbiesSection data={data} />
        </div>
      </main>
      <FooterScetion />
    </div>
  );
}
