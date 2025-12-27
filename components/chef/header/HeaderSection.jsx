import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import ContactInfo from "./ContactInfo";
import ProfilePhoto from "./ProfilePhoto";
import AboutMe from "./AboutMe";

export default function HeaderSection({ data }) {
  const { hero } = data;

  return (
    <header>
      <div className="relative w-full max-w-[1580px] mx-auto px-4 pb-20">
        <Navbar />
        <div className="w-full flex flex-col xl:flex-row items-center gap-4 justify-center xl:justify-between">
          <div className="flex flex-col md:flex-row gap-5 items-center">
            <Intro heroData={hero} />
            <ProfilePhoto heroData={hero} />
          </div>
          <div className="xl:self-start flex flex-col md:flex-row items-center justify-between gap-15">
            <div>
              <ContactInfo heroData={hero} />
            </div>
            <div className="xl:hidden">
              <AboutMe heroData={hero} />
            </div>
          </div>
        </div>
        <div className="hidden xl:block xl:absolute bottom-0 right-4">
          <AboutMe heroData={hero} />
        </div>
      </div>
    </header>
  );
}
