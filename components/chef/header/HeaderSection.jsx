"use client";
import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import ContactInfo from "./ContactInfo";
import ProfilePhoto from "./ProfilePhoto";
import AboutMe from "./AboutMe";
import Navigation from "@/components/Navigation";
import useMenuToggle from "@/hooks/useMenuToggle";

export default function HeaderSection({ data }) {
  const { hero } = data;

  const { isMenuOpen, setIsMenuOpen, handleMenuClick } = useMenuToggle();

  return (
    <header>
      <div className="relative w-full max-w-[1580px] mx-auto px-4 pb-20">
        <Navbar handleMenuClick={handleMenuClick} />
        <Navigation
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          bgColor="bg-background-secondary"
          textColor="text-text-primary"
          logoSrc="/assets/chef/logos/logo-footer.svg"
        />
        <div className="w-full flex flex-col xl:flex-row items-center gap-4 justify-center xl:justify-between">
          <div className="flex flex-col md:flex-row gap-5 items-center">
            <Intro heroData={hero} />
            <ProfilePhoto heroData={hero} />
          </div>
          <div className="xl:self-start flex flex-col md:flex-row items-center justify-between gap-10">
            <div>
              <ContactInfo heroData={hero} />
            </div>
            <div className="xl:hidden">
              <AboutMe heroData={hero} />
            </div>
          </div>
        </div>
        <div className="hidden xl:block xl:absolute bottom-0 right-4">
          <AboutMe heroData={hero} />
        </div>
      </div>
    </header>
  );
}
