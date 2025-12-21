"use client";
import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import ProfilePhoto from "./ProfilePhoto";
import ContactInfo from "./ContactInfo";
import Navigation from "@/components/Navigation";
import useMenuToggle from "@/hooks/useMenuToggle";

export default function HeaderSection({ data }) {
  const { hero } = data;

  const { isMenuOpen, setIsMenuOpen, handleMenuClick } = useMenuToggle();

  return (
    <header className="px-4">
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        bgColor="bg-background-secondary"
        textColor="text-text-primary"
        logoSrc="/assets/lawyer/logos/logo-footer.svg"
      />
      <div className="w-full max-w-7xl mx-auto">
        <Navbar handleMenuClick={handleMenuClick} />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-items-center gap-15 xl:gap-10 pt-10 pb-20">
          <Intro heroData={hero} />
          <div className="row-span-1 md:row-span-2 xl:row-span-1">
            <ProfilePhoto heroData={hero} />
          </div>
          <ContactInfo heroData={hero} />
        </div>
      </div>
    </header>
  );
}
