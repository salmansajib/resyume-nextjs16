"use client";
import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import Intro from "./Intro";
import ProfilePhoto from "./ProfilePhoto";
import About from "./About";
import ContactInfo from "./ContactInfo";
import SocialLinks from "./SocialLinks";
import Navigation from "@/components/Navigation";
import useMenuToggle from "@/hooks/useMenuToggle";

export default function HeaderSection({ data }) {
  const { hero } = data;
  const { isMenuOpen, setIsMenuOpen, handleMenuClick } = useMenuToggle();

  return (
    <header className="relative">
      <div className="relative z-10">
        <Navbar handleMenuClick={handleMenuClick} />
        <Navigation
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          bgColor="bg-background-primary"
          textColor="text-text-primary"
          logoSrc="/assets/travel-agent/logos/logo-footer.svg"
        />
        <div className="w-full max-w-7xl mx-auto px-4 pt-10 pb-20 lg:pb-0 grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center lg:justify-items-normal">
          <div className="space-y-15">
            <Intro heroData={hero} />
            <ProfilePhoto heroData={hero} />
            <SocialLinks className="md:hidden justify-center mt-10" />
          </div>
          {/* the title and download cv link is inside about */}
          <About heroData={hero} className="lg:mt-20" />
        </div>

        <ContactInfo heroData={hero} className="lg:-mt-80" />
      </div>

      {/* decorative image */}
      <div aria-hidden>
        <Image
          src="/assets/travel-agent/images/bg-image-hero.png"
          alt=""
          width={1000}
          height={350}
          priority
          className="w-[941px] h-auto object-cover absolute right-0 bottom-75"
        />
      </div>
    </header>
  );
}
