"use client";
import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import ProfilePhoto from "./ProfilePhoto";
import About from "./About";
import Title from "./Title";
import ContactInfo from "./ContactInfo";
import GridBackground from "../GridBackground";
import Navigation from "@/components/Navigation";
import useMenuToggle from "@/hooks/useMenuToggle";

export default function HeaderSection({ data }) {
  const { hero } = data;

  const { isMenuOpen, setIsMenuOpen, handleMenuClick } = useMenuToggle();

  return (
    <GridBackground
      gridColor="rgba(201, 201, 201, 0.1)"
      gridSize="200px"
      className="bg-background-secondary overflow-hidden"
    >
      <header className="px-4 w-full relative z-20">
        <Navigation
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          bgColor="bg-background-primary"
          textColor="text-text-primary"
          logoSrc="/assets/marketer/logos/logo-footer.svg"
        />
        <div className="w-full max-w-[1580px] mx-auto">
          <Navbar handleMenuClick={handleMenuClick} />
          <div className="pb-30 pt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-items-center gap-15">
            <div className="space-y-15">
              <Intro heroData={hero} />
              <About heroData={hero} />
            </div>
            <div>
              <ProfilePhoto heroData={hero} />
            </div>
            <div className="xl:space-y-15 flex flex-col gap-15 md:flex-row xl:flex-col items-center justify-between md:col-span-2 xl:col-span-1">
              <Title heroData={hero} />
              <ContactInfo heroData={hero} />
            </div>
          </div>
        </div>
      </header>

      {/* subtle black overlay */}
      <div className=" absolute inset-0 bg-black/10 z-10"></div>

      {/* gradient background circles */}
      <div
        aria-hidden="true"
        className="absolute -top-50 -left-30 size-[1200px] bg-radial-[circle_at_center] from-[#3A8300]/50 from-0% via-[#5D982F]/5 via-55% to-transparent to-70% rounded-full"
      ></div>
      <div
        aria-hidden="true"
        className="absolute -top-100 right-0 size-[1200px] bg-radial-[circle_at_center] from-[#975219]/50 from-0% via-[#995E2E]/5 via-55% to-transparent to-70% rounded-full"
      ></div>
      <div
        aria-hidden="true"
        className="absolute -right-100 -bottom-100 size-[1200px] bg-radial-[circle_at_center] from-[#12AFBF]/30 from-0% via-[#328F99]/5 via-55% to-transparent to-70% rounded-full"
      ></div>
    </GridBackground>
  );
}
