import React from "react";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "../header/SocialLinks";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 py-10 relative z-10">
        <div className="flex flex-col gap-4 items-center justify-center">
          <Link href="/">
            <Image
              src="/assets/travel-agent/logos/logo-footer-2.svg"
              alt="rezyume footer logo"
              width={200}
              height={200}
              className="w-[168px] h-auto object-cover"
            />
          </Link>
          <p className="max-w-[55ch] text-center capitalize text-text-secondary">
            With extensive experience in flight bookings, hotel reservations,
            visa processing, and custom tour planning, I ensure that every
            journey is smooth and stress-free.
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

      {/* background image */}
      <div aria-hidden className="absolute left-0 bottom-0">
        <Image
          src="/assets/travel-agent/images/bg-img-footer-left.png"
          alt=""
          width={600}
          height={400}
          className="w-[531px] h-auto object-cover"
        />
      </div>
      <div aria-hidden className="absolute top-0 right-0">
        <Image
          src="/assets/travel-agent/images/bg-img-footer-right.png"
          alt=""
          width={600}
          height={400}
          className="w-[531px] h-auto object-cover"
        />
      </div>
    </footer>
  );
}
