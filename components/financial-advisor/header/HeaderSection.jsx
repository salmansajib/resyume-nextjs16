"use client";
import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import SocialLinks from "./SocialLinks";
import ProfilePhoto from "./ProfilePhoto";
import About from "./About";
import ContactInfo from "./ContactInfo";
import Navigation from "@/components/Navigation";
import useMenuToggle from "@/hooks/useMenuToggle";

export default function HeaderSection({ data }) {
  const { hero } = data;
  const { isMenuOpen, setIsMenuOpen, handleMenuClick } = useMenuToggle();

  return (
    <header>
      <div className="w-full max-w-7xl mx-auto px-4 relative">
        <Navbar handleMenuClick={handleMenuClick} />
        <Navigation
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          bgColor="bg-background-primary"
          textColor="text-text-primary"
          logoSrc="/assets/financial-advisor/logos/logo-footer.svg"
        />
        <div className="pt-5 pb-20 grid grid-cols-1 md:grid-cols-7 lg:grid-cols-12 justify-items-center md:justify-items-normal gap-10 lg:gap-10">
          <div className="self-center space-y-5 md:space-y-25 lg:col-start-1 lg:col-end-6 md:row-start-1 md:row-end-2 relative z-10 md:col-start-1 md:col-end-5">
            <Intro heroData={hero} />
            {/* download cv link is inside the social links */}
            <SocialLinks />
          </div>
          <ProfilePhoto
            heroData={hero}
            className="lg:col-start-4 lg:col-end-9 md:row-start-1 md:row-end-2 md:col-start-4 md:col-end-8"
          />
          <div className="lg:self-end lg:space-y-20 md:col-span-7 lg:col-span-1 flex flex-col lg:flex-col md:flex-row items-center gap-5 lg:col-start-9 lg:col-end-13 lg:row-start-1 xl:row-end-2">
            <About heroData={hero} />
            <ContactInfo heroData={hero} className="w-full" />
          </div>
        </div>
      </div>
    </header>
  );
}
