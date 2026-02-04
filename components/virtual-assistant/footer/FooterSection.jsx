import React from "react";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "../header/SocialLinks";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary">
      <div className="w-full max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col gap-4 items-center justify-center">
          <Link href="/">
            <Image
              src="/assets/virtual-assistant/logos/logo-footer-new.svg"
              alt="rezyume footer logo"
              width={200}
              height={200}
              className="w-[168px] h-auto object-cover"
            />
          </Link>
          <p className="max-w-[55ch] text-center capitalize text-text-secondary">
            where creativity meets functionality! I am passionate Interior
            Designer dedicated to transforming spaces into elegant.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center sm:justify-between gap-5">
          <SocialLinks />
          <p className="text-base text-text-secondary space-x-2">
            <span>Copyright &copy; {currentYear}</span>
            <span>|</span>
            <span className="capitalize">powered by rezyume</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
