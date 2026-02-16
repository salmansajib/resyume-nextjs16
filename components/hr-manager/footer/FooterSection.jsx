import React from "react";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "../header/SocialLinks";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#091415] overflow-hidden relative">
      <div className="w-full max-w-7xl mx-auto px-4 py-10 relative z-10">
        <div className="flex flex-col gap-4 items-center justify-center">
          <Link href="/">
            <Image
              src="/assets/hr-manager/logos/logo-footer.svg"
              alt="rezyume footer logo"
              width={200}
              height={200}
              className="w-[168px] h-auto object-cover"
            />
          </Link>
          <p className="max-w-[55ch] text-center capitalize text-primary">
            With extensive experience in flight bookings, hotel reservations,
            visa processing, and custom tour planning, I ensure that every
            journey is smooth and stress-free.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center sm:justify-between gap-5">
          <SocialLinks />
          <p className="text-base text-primary space-x-2">
            <span>Copyright &copy; {currentYear}</span>
            <span>|</span>
            <span className="capitalize">powered by rezyume</span>
          </p>
        </div>
      </div>

      {/* gradient circles */}
      <div className="size-[650px] bg-radial from-gradient-primary-start/10 via-gradient-primary-middle/10 to-transparent to-70% absolute -right-50 -bottom-100"></div>
      <div className="size-[650px] bg-radial from-gradient-primary-start/10 via-gradient-primary-middle/10 to-transparent to-70% absolute -left-50 -top-100"></div>
    </footer>
  );
}
