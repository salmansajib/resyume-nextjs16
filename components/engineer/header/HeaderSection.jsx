"use client";
import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import ContactInfo from "./ContactInfo";
import ProfilePhoto from "./ProfilePhoto";
import About from "./About";
import SocialLinks from "./SocialLinks";
import DownloadCvLink from "./DownloadCvLink";
import Navigation from "@/components/Navigation";
import useMenuToggle from "@/hooks/useMenuToggle";

export default function HeaderSection({ data }) {
  const { hero } = data;
  const { isMenuOpen, setIsMenuOpen, handleMenuClick } = useMenuToggle();

  return (
    <header className="">
      <div className="w-full max-w-[1620px] mx-auto">
        <Navbar handleMenuClick={handleMenuClick} />
        <Navigation
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          bgColor="bg-background-secondary"
          textColor="text-text-primary"
          logoSrc="/assets/engineer/logos/logo-footer.svg"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-[1fr_560px_1fr] justify-items-center pb-10 items-center gap-10 px-4">
          <div className="space-y-10 lg:space-y-20 pt-27 lg:pt-20">
            <Intro heroData={hero} />
            <ContactInfo heroData={hero} />
          </div>
          <ProfilePhoto heroData={hero} />
          <div className="space-y-10 lg:space-y-20 lg:pt-20">
            <About heroData={hero} />
            <SocialLinks />
            <DownloadCvLink className="lg:justify-self-end" />
          </div>
        </div>
      </div>
    </header>
  );
}
