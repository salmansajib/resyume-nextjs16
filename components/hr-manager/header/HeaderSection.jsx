import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import ProfilePhoto from "./ProfilePhoto";
import About from "./About";
import ContactInfo from "./ContactInfo";

export default function HeaderSection({ data }) {
  const { hero } = data;

  return (
    <header className="relative bg-[url(/assets/hr-manager/images/bg-img-header-hero.png)] bg-cover bg-no-repeat text-primary">
      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4">
        <Navbar />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-15 items-center justify-items-center lg:justify-items-normal pt-10 pb-20">
          <Intro heroData={hero} />
          <ProfilePhoto heroData={hero} />
          <div className="space-y-10 flex flex-col lg:flex-row xl:flex-col gap-5 lg:gap-15 lg:col-span-2 xl:col-span-1">
            <About heroData={hero} />
            <ContactInfo heroData={hero} className="flex-1" />
          </div>
        </div>
      </div>

      {/* overlay */}
      <div className="absolute inset-0 bg-[#0A110D]/87 "></div>
    </header>
  );
}
