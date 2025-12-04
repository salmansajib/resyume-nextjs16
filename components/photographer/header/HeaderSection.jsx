import React from "react";
import Navbar from "./Navbar";
import ProfilePhoto from "./ProfilePhoto";
import Intro from "./Intro";
import ContactInfo from "./ContactInfo";
import About from "./About";

export default function HeaderSection({ data }) {
  const { hero } = data;

  return (
    <div className="px-4 pb-20">
      <Navbar />
      <div className="py-10 xl:pb-30 xl:mt-30 w-full max-w-7xl mx-auto flex flex-col md:flex-row md:gap-15 items-center md:justify-center xl:gap-65">
        <div className="">
          <ProfilePhoto />
        </div>
        <div className="xl:flex-1 flex flex-col gap-10">
          <Intro heroData={hero} />
          <div className="xl:self-end">
            <ContactInfo heroData={hero} />
          </div>
        </div>
      </div>
      <About />
    </div>
  );
}
