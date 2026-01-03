"use client";
import React from "react";
import Navbar from "./Navbar";
import ProfilePhoto from "./ProfilePhoto";
import Intro from "./Intro";
import ContactInfo from "./ContactInfo";
import Navigation from "@/components/Navigation";
import useMenuToggle from "@/hooks/useMenuToggle";

export default function HeaderSection({ data }) {
  const { hero } = data;

  const { isMenuOpen, setIsMenuOpen, handleMenuClick } = useMenuToggle();

  return (
    <header className="px-4">
      <div className="w-full max-w-[1580px] mx-auto">
        <Navbar handleMenuClick={handleMenuClick} />
        <Navigation
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          bgColor="bg-background-secondary"
          textColor="text-text-primary"
          logoSrc="/assets/architect/logos/logo-footer.svg"
        />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center pb-20">
          <ProfilePhoto heroData={hero} className="md:row-span-2" />
          <Intro heroData={hero} className="md:max-[1440px]:row-span-2" />
          <ContactInfo
            heroData={hero}
            className="md:max-[1440px]:col-span-2 flex-col md:flex-row"
          />
        </div>
      </div>
    </header>
  );
}
