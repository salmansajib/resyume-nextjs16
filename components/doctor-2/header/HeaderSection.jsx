"use client";
import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import SocialLinks from "./SocialLinks";
import ContactInfo from "./ContactInfo";
import ProfilePhoto from "./ProfilePhoto";
import About from "./About";
import Navigation from "@/components/Navigation";
import useMenuToggle from "@/hooks/useMenuToggle";
import Image from "next/image";

export default function HeaderSection({ data }) {
  const { hero } = data;
  const { isMenuOpen, setIsMenuOpen, handleMenuClick } = useMenuToggle();

  return (
    <header className="px-4 relative">
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <Navbar handleMenuClick={handleMenuClick} />
        <Navigation
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          bgColor="bg-background-secondary"
          textColor="text-text-primary"
          logoSrc="/assets/doctor-2/logos/footer-logo.svg"
        />
        <div className="py-10">
          <div className="flex flex-col items-center lg:items-start lg:flex-row gap-10">
            <div>
              <Intro heroData={hero} />
              <SocialLinks />
            </div>
            <div className="flex flex-col gap-10">
              <ContactInfo heroData={hero} className="order-2 lg:order-1" />
              <ProfilePhoto heroData={hero} className="order-1 lg:order-2" />
            </div>
          </div>
          <About
            heroData={hero}
            className="mt-10 lg:-mt-30 w-full sm:w-[80%] lg:w-full mx-auto"
          />
        </div>
      </div>
      {/* background image */}
      <div aria-hidden="true" className="absolute right-0 top-20">
        <Image
          src="/assets/doctor-2/images/hero-bg-image.png"
          alt=""
          width={700}
          height={700}
          priority
          className="w-[500px] h-auto"
        />
      </div>
      {/* background gradient circle */}
      <div className="absolute -top-200 -left-200 size-[1500px] bg-radial-[circle_at_center] from-[#409B61]/20 from-0% via-[#D9D9D9]/5 via-55% to-transparent to-70%"></div>
    </header>
  );
}
