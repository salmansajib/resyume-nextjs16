import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import ContactInfo from "./ContactInfo";
import ProfilePhoto from "./ProfilePhoto";

export default function HeaderSection({ data }) {
  return (
    <header>
      <div className="w-full max-w-7xl mx-auto px-4">
        <Navbar />
        <div className="py-20 grid grid-cols-2 items-center gap-20">
          <div>
            <Intro data={data} />
            <ContactInfo data={data} />
          </div>
          <div>
            <ProfilePhoto data={data} className="justify-self-end " />
          </div>
        </div>
      </div>
    </header>
  );
}
