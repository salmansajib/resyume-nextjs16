import React from "react";
import Image from "next/image";
import PhoneIcon from "@/components/icons/PhoneIcon";
import EmailIcon from "@/components/icons/EmailIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import ContactInfo from "./ContactInfo";
import SocialLinks from "./SocialLinks";

export default function FooterSection({ data }) {
  const { hero } = data;
  const heroData = hero;

  // get current year
  const getCurrentYear = new Date().getFullYear();

  return (
    <footer>
      {/* top part */}
      <div className="bg-background-secondary py-10 px-4">
        <div className="w-full max-w-7xl mx-auto space-y-5">
          {/* logo */}
          <div className="flex items-center justify-center">
            <Image
              src="/assets/lawyer/logos/logo-footer.svg"
              alt="rezyume logo"
              width={300}
              height={300}
              className="w-[216px] h-auto"
            />
          </div>
          {/* description */}
          <p className="text-lg font-normal text-text-secondary max-w-[65ch] text-center mx-auto">
            I am a passionate photographer specializing in portrait I capture
            moments that tell compelling stories with creativity and precision.
          </p>
          {/* contact info */}
          <ContactInfo heroData={heroData} />
        </div>
      </div>

      {/* bottom part */}
      <div className="bg-background-primary px-4 py-10">
        <div className="w-full max-w-7xl mx-auto flex items-center gap-5 flex-wrap justify-center md:justify-between">
          <div className="font-rubik text-text-secondary space-x-2">
            <span>Copyright &copy; {getCurrentYear}</span>
            <span>|</span>
            <span>Powered By Rezyume</span>
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
