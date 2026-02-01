import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import ContactInfo from "./ContactInfo";
import ProfilePhoto from "./ProfilePhoto";
import SocialLinks from "./SocialLinks";

export default function HeaderSection({ data }) {
  return (
    <header>
      <div className="w-full max-w-7xl mx-auto px-4">
        <Navbar />
        <div className="pt-5 lg:pt-10 pb-20 grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center lg:justify-items-normal gap-10">
          <div>
            <Intro data={data} />
            <ContactInfo data={data} />
          </div>
          <div>
            <ProfilePhoto data={data} className="justify-self-end " />
            <SocialLinks className="mt-6 justify-self-center md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
}
