"use client";
import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import About from "./About";
import ProfilePhoto from "./ProfilePhoto";
import SocialLinks from "./SocialLinks";
import ContactInfo from "./ContactInfo";
import Navigation from "@/components/Navigation";
import useMenuToggle from "@/hooks/useMenuToggle";

export default function HeaderSection({ data }) {
  const { hero } = data;
  const { isMenuOpen, setIsMenuOpen, handleMenuClick } = useMenuToggle();

  return (
    <header className="pb-10 relative overflow-hidden">
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        bgColor="bg-background-primary"
        textColor="text-text-primary"
        logoSrc="/assets/motion-designer/logos/logo-footer.svg"
      />
      <div className="w-full max-w-[1642px] mx-auto px-4 relative z-10">
        <Navbar handleMenuClick={handleMenuClick} />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-5 items-center justify-items-center lg:justify-items-normal pt-10 lg:pt-5">
          <div className="lg:col-start-1 lg:col-end-6 lg:row-start-1 lg:row-end-2 space-y-10 xl:space-y-20">
            <Intro heroData={hero} />
            {/* download cv link is inside the about */}
            <About heroData={hero} />
          </div>
          <ProfilePhoto
            heroData={hero}
            className="lg:col-start-4 lg:col-end-10 lg:row-start-1 lg:row-end-2"
          />
          {/* title is inside the social links */}
          <SocialLinks
            heroData={hero}
            className="lg:col-start-9 lg:col-end-13 lg:row-start-1 lg:row-end-2"
          />
        </div>
      </div>

      <ContactInfo
        heroData={hero}
        className="max-[1100px]:mt-10 relative z-10"
      />

      {/* background gradient circle */}
      <div
        aria-hidden
        className="absolute -top-150 -left-80 size-[1500px] rounded-full bg-radial-[circle_at_center] from-[#826BE4]/40 from-0% via-[#07060D]/5 via-55% to-transparent to-70%"
      ></div>

      {/* very big title */}
      <p
        aria-hidden
        className="hidden lg:block absolute top-20 left-1/2 -translate-x-1/2 text-[clamp(5rem,20vw,12rem)] font-exo2 font-semibold whitespace-nowrap text-center bg-linear-to-r from-[#5B4E92]/36 to-[#1B1631]/59 bg-clip-text text-transparent"
      >
        Motion Designer
      </p>
    </header>
  );
}
