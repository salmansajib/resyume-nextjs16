"use client";
import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import DownloadCV from "./DownloadCV";
import ContactInfo from "./ContactInfo";
import ProfilePhoto from "./ProfilePhoto";
import Navigation from "@/components/Navigation";
import useMenuToggle from "@/hooks/useMenuToggle";

export default function HeaderSection({ data }) {
  const { hero } = data;
  const { isMenuOpen, setIsMenuOpen, handleMenuClick } = useMenuToggle();

  return (
    <header className="bg-background-secondary px-4">
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        bgColor="bg-background-primary"
        textColor="text-text-primary"
        logoSrc="/assets/sales-executive-officer/logos/logo-footer.svg"
      />
      <div className="w-full max-w-7xl mx-auto">
        <Navbar handleMenuClick={handleMenuClick} />
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center lg:justify-items-normal gap-15 lg:gap-10 pt-5 pb-20">
          <div className="space-y-15 order-2 lg:order-1">
            <Intro heroData={hero} />
            <DownloadCV />
            <ContactInfo heroData={hero} />
          </div>
          <ProfilePhoto
            heroData={hero}
            className="order-1 lg:order-2 lg:justify-self-end"
          />
        </div>
      </div>
    </header>
  );
}
