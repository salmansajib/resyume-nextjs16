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
    <header className="bg-background-secondary bg-[url(/assets/educator/images/bg-img-header.svg)] bg-cover bg-no-repeat px-4 relative">
      <div className="w-full max-w-7xl mx-auto relative">
        <Navbar handleMenuClick={handleMenuClick} />
        <Navigation
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          bgColor="bg-background-primary"
          textColor="text-text-primary"
          logoSrc="/assets/educator/logos/logo-footer.svg"
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-5 items-center justify-items-center lg:justify-items-normal pt-5 lg:pt-2 pb-80 sm:pb-70 lg:pb-0 lg:-mt-10">
          <div className="lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-2">
            <Intro heroData={hero} />
            <SocialLinks className="mt-10 lg:mt-25" />
          </div>
          <ProfilePhoto
            heroData={hero}
            className="lg:col-start-4 lg:col-end-9 lg:row-start-1 lg:row-end-2"
          />
          {/* download cv is inside about */}
          <About
            heroData={hero}
            className="lg:col-start-9 lg:col-end-13 lg:row-start-1 lg:row-end-2"
          />
        </div>
      </div>
      <ContactInfo
        heroData={hero}
        className="absolute -bottom-30 left-1/2 -translate-x-1/2"
      />
    </header>
  );
}
