import React from "react";
import Link from "next/link";
import Image from "next/image";
import SocialLinks from "./SocialLinks";

export default function Navbar({ handleMenuClick }) {
  return (
    <div className="py-7 px-4 w-full max-w-7xl mx-auto grid gap-10 grid-cols-2 md:grid-cols-3">
      <Link href="/">
        <Image
          src="/assets/travel-agent/logos/logo-header.png"
          alt="rezyume logo"
          width={200}
          height={200}
          priority
          className="w-[168px] h-auto object-cover"
        />
      </Link>
      <SocialLinks className="hidden md:flex justify-self-center" />
      <button
        onClick={() => handleMenuClick()}
        className="cursor-pointer justify-self-end"
      >
        <Image
          src="/assets/travel-agent/icons/menu-icon.png"
          alt="menu icon"
          priority
          width={30}
          height={30}
          className="w-[25] h-auto object-cover"
        />
      </button>
    </div>
  );
}
