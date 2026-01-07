import React from "react";
import Image from "next/image";
import SocialLinks from "./SocilaLinks";
import Link from "next/link";

export default function FooterScetion() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background-secondary px-4 py-10">
      <div className="w-full max-w-[1580px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          <p className="text-base text-text-secondary space-x-3 text-center md:justify-self-start order-3 md:order-1">
            <span>Copyright &copy; {currentYear}</span>
            <span>|</span>
            <span className=" capitalize">powered by rezyume</span>
          </p>
          <Link href="/" className="order-1 md:order-2">
            <Image
              src="/assets/architect/logos/logo-footer.svg"
              alt="rezyume logo"
              width={300}
              height={300}
              className="w-[216px] h-auto object-cover"
            />
          </Link>
          <SocialLinks className="md:justify-self-end order-2 md:order-3" />
        </div>
      </div>
    </footer>
  );
}
