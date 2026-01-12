import React from "react";
import Image from "next/image";
import SocialLinks from "./SocialLinks";
import Link from "next/link";

export default function FooterScetion() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full bg-background-secondary px-4 py-10 border-t border-border-primary"
      style={{
        background:
          "linear-gradient(to bottom right, #DAD9D3 0%, #E8E6E5 23%, #D7D3CE 48%, #DBDAD4 73%, #DCD8D3 88%, #CDC9C3 100%)",
      }}
    >
      <div className="w-full max-w-[1580px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          <p className="text-base text-text-primary space-x-3 text-center md:justify-self-end order-3 md:order-3">
            <span>Copyright &copy; {currentYear}</span>
            <span>|</span>
            <span className=" capitalize">powered by rezyume</span>
          </p>
          <Link href="/" className="order-1 md:order-2">
            <Image
              src="/assets/doctor-1/logos/logo-footer.svg"
              alt="rezyume logo"
              width={300}
              height={300}
              className="w-[216px] h-auto object-cover"
            />
          </Link>
          <SocialLinks className="md:justify-self-start order-2 md:order-1" />
        </div>
      </div>
    </footer>
  );
}
