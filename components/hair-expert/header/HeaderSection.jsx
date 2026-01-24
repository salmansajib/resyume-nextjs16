"use client";
import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import ProfilePhoto from "./ProfilePhoto";
import SocialLinks from "./SocialLinks";
import ContactInfo from "./ContactInfo";
import About from "./About";
import Navigation from "@/components/Navigation";
import useMenuToggle from "@/hooks/useMenuToggle";

export default function HeaderSection({ data }) {
  const { isMenuOpen, setIsMenuOpen, handleMenuClick } = useMenuToggle();

  return (
    <header className="">
      <div className="bg-linear-to-b from-[#E9D1CB] from-17% to-[#B9BDCB] to-100% overflow-hidden">
        <div className="lg:relative w-full max-w-7xl mx-auto px-4">
          <Navbar handleMenuClick={handleMenuClick} />
          <Navigation
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            bgColor="bg-background-secondary"
            textColor="text-text-primary"
            logoSrc="/assets/hair-expert/logos/logo-footer.svg"
          />
          <div className="grid grid-cols-1 justify-items-center gap-10 lg:grid-cols-12 pb-10 lg:pb-0">
            <Intro
              data={data}
              className="lg:col-start-1 lg:col-end-7 lg:row-start-1 lg:self-center relative z-20"
            />
            <ProfilePhoto
              data={data}
              className="lg:col-start-5 lg:col-end-12 lg:row-start-1"
            />
            <SocialLinks
              data={data}
              className="flex gap-3 lg:flex-col lg:self-end lg:justify-self-end lg:mb-20 lg:relative lg:z-30"
            />
          </div>
        </div>
      </div>

      {/* contact and about */}
      <div className="grid lg:grid-cols-[1fr_2fr]">
        <ContactInfo data={data} />
        <About data={data} />
      </div>
    </header>
  );
}
