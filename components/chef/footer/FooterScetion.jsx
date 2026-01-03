import React from "react";
import Image from "next/image";
import SocialLinks from "./SocialLinks";
import Link from "next/link";

export default function FooterScetion() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background-secondary px-4 py-10">
      <div className="w-full max-w-[1580px] mx-auto">
        <div className="flex flex-wrap gap-10 items-center justify-center md:justify-between">
          <p className="text-xl text-text-secondary font-jost space-x-3 text-center">
            <span>Copyright &copy; {currentYear}</span>
            <span>|</span>
            <span className=" capitalize">powered by rezyume</span>
          </p>
          <Link href="/">
            <Image
              src="/assets/chef/logos/logo-footer.svg"
              alt="rezyume logo"
              width={300}
              height={300}
              className="w-[216px] h-auto object-cover"
            />
          </Link>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
