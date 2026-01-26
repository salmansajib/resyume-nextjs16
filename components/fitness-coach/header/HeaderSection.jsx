"use client";
import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import SocialLinks from "./SocialLinks";
import ContactInfo from "./ContactInfo";
import ProfilePhoto from "./ProfilePhoto";
import About from "./About";
import Navigation from "@/components/Navigation";
import useMenuToggle from "@/hooks/useMenuToggle";

export default function HeaderSection({ data }) {
  const { hero } = data;
  const { isMenuOpen, setIsMenuOpen, handleMenuClick } = useMenuToggle();

  return (
    <header>
      <Navbar handleMenuClick={handleMenuClick} />
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        bgColor="bg-background-secondary"
        textColor="text-text-primary"
        logoSrc="/assets/fitness-coach/logos/logo-footer.svg"
      />
      <div className="w-full max-w-7xl mx-auto px-4 grid grid-cols-1 justify-items-center lg:justify-items-normal lg:grid-cols-2 gap-x-5 gap-y-10 lg:gap-y-0 items-center pt-30 lg:pt-0 pb-10 lg:pb-0">
        <div className="space-y-10 lg:space-y-40 order-2 lg:order-1">
          <Intro heroData={hero} />
          {/* download cv link is inside social links */}
          <SocialLinks />
        </div>
        <div className="space-y-10 lg:space-y-0 order-1 lg:order-2">
          <ContactInfo heroData={hero} className="relative z-20" />
          <ProfilePhoto
            heroData={hero}
            className="lg:justify-self-end lg:-mt-10"
          />
        </div>
      </div>
      <About heroData={hero} className="lg:-mt-35" />
    </header>
  );
}
