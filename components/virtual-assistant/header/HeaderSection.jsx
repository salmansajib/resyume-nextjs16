"use client";
import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import ProfilePhoto from "./ProfilePhoto";
import SocialLinks from "./SocialLinks";
import About from "./About";
import ContactInfo from "./ContactInfo";
import Navigation from "@/components/Navigation";
import useMenuToggle from "@/hooks/useMenuToggle";

export default function HeaderSection({ data }) {
  const { hero } = data;
  const { isMenuOpen, setIsMenuOpen, handleMenuClick } = useMenuToggle();

  return (
    <header>
      <div className="overflow-hidden">
        <Navbar handleMenuClick={handleMenuClick} />
        <Navigation
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          bgColor="bg-background-secondary"
          textColor="text-text-primary"
          logoSrc="/assets/virtual-assistant/logos/logo-footer-new.svg"
        />
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-10 px-4 pt-10 lg:pt-5 pb-20">
          {/* download cv and portfolio link is inside the intro */}
          <Intro heroData={hero} />
          <ProfilePhoto heroData={hero} />
          <SocialLinks className="flex justify-center lg:hidden" />
        </div>

        {/* about and contact */}
        <div className="relative bg-background-secondary bg-linear-to-br from-background-secondary/8 to-background-secondary/12 px-4 py-20">
          <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 justify-items-center lg:justify-items-normal lg:grid-cols-2 gap-30 items-center">
            {/* about */}
            <About heroData={hero} />
            {/* contact */}
            <ContactInfo heroData={hero} />
          </div>

          {/* decorative circles */}
          <div className="hidden md:block absolute -bottom-30 -right-70 size-[550px] rounded-full border-80 border-[#ECB386] "></div>
          <div className="hidden md:block absolute top-20 -left-60 size-[420px] rounded-full border-70 border-[#9BDEE4] "></div>
        </div>
      </div>
    </header>
  );
}
