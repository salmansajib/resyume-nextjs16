"use client";
import React from "react";
import Link from "next/link";
import GridBackground from "@/components/marketer/GridBackground";
import Navbar from "@/components/marketer/header/Navbar";
import Navigation from "@/components/Navigation";
import useMenuToggle from "@/hooks/useMenuToggle";
import FooterSection from "@/components/marketer/footer/FooterSection";
import marketerData from "@/data/marketer.json";

export default function NotFound() {
  const data = marketerData;

  const { isMenuOpen, setIsMenuOpen, handleMenuClick } = useMenuToggle();

  return (
    <div data-theme="marketer">
      <GridBackground
        gridColor="rgba(201, 201, 201, 0.1)"
        gridSize="200px"
        className="min-h-screen bg-background-primary overflow-hidden"
      >
        <Navigation
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          bgColor="bg-background-primary"
          textColor="text-text-primary"
          logoSrc="/assets/marketer/logos/logo-footer.svg"
        />

        <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4">
          <Navbar handleMenuClick={handleMenuClick} />

          <div className="min-h-[90vh] flex flex-col items-center justify-center">
            <h1 className="leading-none bg-linear-to-b from-text-primary to-background-primary bg-clip-text text-transparent font-inter font-bold text-[clamp(10rem,20vw,20rem)] text-center opacity-50">
              404
            </h1>
            <p className="font-semibold font-leagueSpartan text-[clamp(2.5rem,4vw,3.5rem)] capitalize text-text-primary -mt-20 relative z-10">
              page not found!
            </p>
            <Link
              href="/"
              className="mt-10 bg-linear-to-br font-leagueSpartan from-text-primary/20 to-background-primary/10 text-lg text-text-primary px-10 py-3 rounded-full backdrop-blur-md ring-2 ring-text-primary/10 capitalize flex items-center gap-3 group"
            >
              go back to home
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right-icon lucide-arrow-right group-hover:-rotate-45 transition-all duration-200"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="relative z-20">
          <FooterSection data={data} />
        </div>

        {/* subtle black overlay */}
        {/* <div className="absolute inset-0 bg-black/10 z-10"></div> */}

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
    </div>
  );
}
