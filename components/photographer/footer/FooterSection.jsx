import React from "react";
import Image from "next/image";
import ContactInfo from "./ContactInfo";
import SocialLinksFooter from "./SocialLinksFooter";

export default function FooterSection({ data }) {
  const { hero } = data;
  const heroData = hero;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="">
      {/* top section */}
      <div className="bg-background-secondary py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-5">
          <div className="flex items-center justify-center">
            <Image
              src="/assets/photographer/logos/logo-footer.svg"
              alt="footer logo"
              width={300}
              height={300}
              className="w-[216px] h-auto"
            />
          </div>
          <p className="text-lg font-normal text-text-secondary max-w-[70ch] text-center mx-auto">
            I am a passionate photographer specializing in portrait I capture
            moments that tell compelling stories with creativity and precision.
          </p>
          <ContactInfo heroData={heroData} />
        </div>
      </div>

      {/* bottom section */}
      <div className="bg-background-primary py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-5 items-center justify-between">
          <p className="text-text-secondary text-base">
            Copyright &copy; {currentYear} | Powered by Rezyume
          </p>
          <SocialLinksFooter />
        </div>
      </div>
    </footer>
  );
}
