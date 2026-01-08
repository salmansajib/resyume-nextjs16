import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import ContactInfo from "./ContactInfo";
import SocialLinks from "./SocialLinks";
import ProfilePhoto from "./ProfilePhoto";

export default function HeaderSection({ data }) {
  const { hero } = data;

  return (
    <header
      className="px-4 bg-background-primary"
      style={{
        background:
          "linear-gradient(to bottom right, #DAD9D3 0%, #E8E6E5 23%, #D7D3CE 48%, #DBDAD4 73%, #DCD8D3 88%, #CDC9C3 100%)",
      }}
    >
      <div className="w-full max-w-7xl mx-auto">
        <Navbar />
        <div className="pt-5 pb-20 grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center lg:justify-items-start gap-10">
          <div className="space-y-15 lg:space-y-20 order-2 lg:order-1">
            <Intro heroData={hero} />
            <ContactInfo heroData={hero} />
            <SocialLinks />
          </div>
          <div className="order-1 lg:order-2">
            <ProfilePhoto heroData={hero} />
          </div>
        </div>
      </div>
    </header>
  );
}
