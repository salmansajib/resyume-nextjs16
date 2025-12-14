"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import ContactInfo from "./ContactInfo";
import ProfilePhoto from "./ProfilePhoto";
import Intro from "./Intro";
import About from "./About";
import Navigation from "@/components/Navigation";
import useMenuToggle from "@/hooks/useMenuToggle";

export default function HeaderSection({ data }) {
  const { hero } = data;

  const { isMenuOpen, setIsMenuOpen, handleMenuClick } = useMenuToggle();

  return (
    <header className="px-4 relative">
      <div className="hidden sm:block absolute top-0 right-0 w-[63%] h-[50%] lg:h-[57%] bg-background-secondary z-10" />
      <Navbar handleMenuClick={handleMenuClick} />
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        bgColor="bg-gray-900"
        textColor="text-background-primary"
      />
      <div className="w-full pt-8 pb-16 z-20 relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="space-y-10 md:flex md:items-center lg:items-start lg:flex-col gap-5 lg:gap-2">
            <div className="md:order-2 lg:order-1">
              <ContactInfo hero={hero} />
            </div>
            <div className="md:order-1 lg:order-2">
              <ProfilePhoto hero={hero} />
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-28">
            <Intro hero={hero} />
            <About hero={hero} />
          </div>
        </div>
      </div>
    </header>
  );
}
