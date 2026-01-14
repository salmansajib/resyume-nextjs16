"use client";
import React from "react";
import Navbar from "./Navbar";
import ProfilePhoto from "./ProfilePhoto";
import Intro from "./Intro";
import About from "./About";
import ContactInfo from "./ContactInfo";
import Navigation from "@/components/Navigation";
import useMenuToggle from "@/hooks/useMenuToggle";

export default function HeaderSection({ data }) {
  const { hero } = data;
  const { isMenuOpen, setIsMenuOpen, handleMenuClick } = useMenuToggle();

  return (
    <header className="px-4 bg-background-secondary/40">
      <div className="w-full max-w-7xl mx-auto">
        <Navbar handleMenuClick={handleMenuClick} />
        <Navigation
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          bgColor="bg-background-secondary"
          textColor="text-text-primary"
          logoSrc="/assets/doctor-2/logos/footer-logo.svg"
        />
        <div className="pt-10 pb-20 flex flex-col lg:flex-row items-center justify-center gap-20">
          {/* photo, intro and social link. Social links is inside the intro */}
          <div className="w-full max-w-[557px] h-[750px] sm:h-[900px] rounded-full p-px bg-linear-to-b from-[#FDF8FF] to-[#F2FFED]">
            <div className="w-full h-full flex flex-col items-center justify-start pt-8 px-8 bg-background-primary bg-linear-to-b from-[#F9E8FE]/54 to-[#81E4A5]/20 rounded-full ">
              <ProfilePhoto heroData={hero} />
              <Intro heroData={hero} />
            </div>
          </div>
          {/* about and contact, download cv is inside the contact */}
          <div className="flex-1 space-y-20">
            <About heroData={hero} />
            <ContactInfo heroData={hero} />
          </div>
        </div>
      </div>
    </header>
  );
}
