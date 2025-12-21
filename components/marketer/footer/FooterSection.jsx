import Image from "next/image";
import React from "react";
import ContactInfo from "./ContactInfo";
import SocialLinks from "./SocialLinks";

export default function FooterSection({ data }) {
  const { hero } = data;
  const getCurrentYear = new Date().getFullYear();

  return (
    <footer>
      {/* top part */}
      <div className="bg-background-secondary px-4 py-20">
        <div className="w-full max-w-7xl mx-auto space-y-6">
          <div className="flex items-center justify-center">
            <Image
              src="/assets/marketer/logos/logo-footer.svg"
              alt="rezyume logo"
              width={300}
              height={300}
              className="w-[216px] h-auto"
            />
          </div>
          <p className="font-rubik font-normal text-base text-text-secondary text-center max-w-[60ch] mx-auto">
            I am a passionate photographer specializing in portrait I capture
            moments that tell compelling stories with creativity and precision.
          </p>
          <ContactInfo heroData={hero} />
        </div>
      </div>

      {/* bottom part */}
      <div className="bg-background-primary px-4 py-10">
        <div className="w-full max-w-[1580px] mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
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
