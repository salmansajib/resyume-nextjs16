import React from "react";
import doctorthreeData from "@/data/doctor-3.json";
import HeaderSection from "@/components/doctor-3/header/HeaderSection";
import SkillsSection from "@/components/doctor-3/skills/SkillsSection";
import CareerPathSection from "@/components/doctor-3/career-path/CareerPathSection";
import ServicesSection from "@/components/doctor-3/services/ServicesSection";
import PortfolioSection from "@/components/doctor-3/portfolio/PortfolioSection";
import ReferralsSection from "@/components/doctor-3/referrals/ReferralsSection";
import HobbiesSection from "@/components/doctor-3/hobbies/HobbiesSection";
import FooterSection from "@/components/doctor-3/footer/FooterSection";

export default function DoctorThreeHome() {
  const data = doctorthreeData;

  return (
    <div
      data-theme="doctor-3"
      className="relative bg-background-primary w-full min-h-screen text-text-primary font-poppins overflow-hidden"
    >
      <div className="relative z-10">
        <HeaderSection data={data} />
        <main>
          <SkillsSection data={data} />
          <CareerPathSection data={data} />
          <ServicesSection data={data} />
          <PortfolioSection data={data} />
          <ReferralsSection data={data} />
          <HobbiesSection data={data} />
        </main>
        <FooterSection />
      </div>

      {/* background gradient circles */}
      <div className="absolute top-100 -left-100 size-[890px] rounded-full bg-radial from-[#FFB1B5]/30 from-18% via-[#D9D9D9]/10 via-50% to-transparent to-80%" />
      <div className="absolute top-100 left-1/2 -translate-x-1/2 size-[1200px] rounded-full bg-radial from-[#7F1DFF]/30 from-0% via-[#D9D9D9]/10 via-50% to-transparent to-80%" />
      <div className="absolute top-20 -right-110 size-[1200px] rounded-full bg-radial from-[#7F1DFF]/30 from-0% via-[#D9D9D9]/10 via-50% to-transparent to-80%" />
      <div className="absolute top-200 -left-100 size-[1200px] rounded-full bg-radial from-[#409B61]/30 from-0% via-[#D9D9D9]/10 via-50% to-transparent to-80%" />
      <div className="absolute top-380 left-1/2 -translate-x-1/2 size-[1200px] rounded-full bg-radial from-[#409B61]/30 from-0% via-[#D9D9D9]/10 via-50% to-transparent to-80%" />
      <div className="absolute top-320 -right-120 size-[1200px] rounded-full bg-radial from-[#FFB1B5]/30 from-0% via-[#D9D9D9]/10 via-50% to-transparent to-80%" />
      <div className="absolute top-535 -left-30 size-[970px] rounded-full bg-radial from-[#FFB1B5]/30 from-0% via-[#D9D9D9]/10 via-50% to-transparent to-80%" />
      <div className="absolute top-650 left-1/2 -translate-x-1/2 size-[970px] rounded-full bg-radial from-[#FFB1B5]/30 from-0% via-[#D9D9D9]/10 via-50% to-transparent to-80%" />
      <div className="absolute top-650 -right-20 size-[800px] rounded-full bg-radial from-[#7F1DFF]/30 from-0% via-[#D9D9D9]/10 via-50% to-transparent to-80%" />
      <div className="absolute top-820 -left-50 size-[800px] rounded-full bg-radial from-[#7F1DFF]/30 from-0% via-[#D9D9D9]/10 via-50% to-transparent to-80%" />
      <div className="absolute top-920 left-1/2 -translate-x-1/2 size-[830px] rounded-full bg-radial from-[#409B61]/30 from-0% via-[#D9D9D9]/10 via-50% to-transparent to-80%" />
      <div className="absolute top-1200 -left-100 size-[1250px] rounded-full bg-radial from-[#409B61]/30 from-0% via-[#D9D9D9]/10 via-50% to-transparent to-80%" />
      <div className="absolute top-1150 -right-100 size-[1250px] rounded-full bg-radial from-[#7F1DFF]/30 from-0% via-[#D9D9D9]/10 via-50% to-transparent to-80%" />
      <div className="absolute -bottom-50 -left-50 size-[970px] rounded-full bg-radial from-[#FFB1B5]/30 from-16% via-[#D9D9D9]/10 via-50% to-transparent to-80%" />
      <div className="absolute -bottom-100 left-1/2 -translate-x-1/2 size-[900px] rounded-full bg-radial from-[#7F1DFF]/30 from-0% via-[#D9D9D9]/10 via-50% to-transparent to-80%" />
      <div className="absolute -bottom-100 -right-50 size-[900px] rounded-full bg-radial from-[#FFB1B5]/30 from-16% via-[#D9D9D9]/10 via-50% to-transparent to-80%" />
    </div>
  );
}
