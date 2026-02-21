"use client";
import React from "react";
import Navbar from "./Navbar";
import ContactInfo from "./ContactInfo";
import SocialLinks from "./SocialLinks";
import ProfilePhoto from "./ProfilePhoto";
import Intro from "./Intro";
import About from "./About";
import Downloadcv from "./Downloadcv";
import Navigation from "@/components/Navigation";
import useMenuToggle from "@/hooks/useMenuToggle";

export default function HeaderSection({ data }) {
  const { hero } = data;
  const { isMenuOpen, setIsMenuOpen, handleMenuClick } = useMenuToggle();

  return (
    <header className="bg-[url(/assets/web-designer-developer/images/bg-img-header.png)] bg-no-repeat bg-cover">
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        bgColor="bg-background-primary"
        textColor="text-text-primary"
        logoSrc="/assets/web-designer-developer/logos/logo-footer.svg"
      />
      <div className="w-full max-w-[1640px] mx-auto px-4">
        <Navbar handleMenuClick={handleMenuClick} />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr_auto_1fr] gap-10 items-center justify-self-center md:justify-items-normal pt-10 pb-20">
          <div className="xl:space-y-20 flex flex-col gap-10 items-center xl:items-start justify-between">
            <ContactInfo heroData={hero} />
            <Downloadcv className="xl:self-end" />
          </div>
          <ProfilePhoto heroData={hero} />
          <div className="xl:space-y-20 flex flex-col md:flex-row xl:flex-col gap-10 items-center md:col-start-1 md:col-end-3 xl:col-start-3 xl:col-end-4">
            <Intro heroData={hero} />
            <About heroData={hero} />
          </div>
        </div>
      </div>
    </header>
  );
}
