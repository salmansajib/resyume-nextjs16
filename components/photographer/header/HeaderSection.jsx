"use client";
import React from "react";
import Navbar from "./Navbar";
import ProfilePhoto from "./ProfilePhoto";
import Intro from "./Intro";
import ContactInfo from "./ContactInfo";
import About from "./About";
import Navigation from "@/components/Navigation";
import useMenuToggle from "@/hooks/useMenuToggle";

export default function HeaderSection({ data }) {
  const { hero } = data;

  const { isMenuOpen, setIsMenuOpen, handleMenuClick } = useMenuToggle();

  return (
    <header className="px-4 pb-20">
      <Navbar handleMenuClick={handleMenuClick} />
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        bgColor="bg-gray-900"
        textColor="text-text-primary"
        logoSrc="/assets/photographer/logos/logo-footer.svg"
      />
      <div className="py-10 xl:pb-30 xl:mt-30 w-full max-w-7xl mx-auto flex flex-col md:flex-row md:gap-15 items-center md:justify-center xl:gap-65">
        <div className="">
          <ProfilePhoto />
        </div>
        <div className="xl:flex-1 flex flex-col gap-10">
          <Intro heroData={hero} />
          <div className="xl:self-end">
            <ContactInfo heroData={hero} />
          </div>
        </div>
      </div>
      <About />
    </header>
  );
}
