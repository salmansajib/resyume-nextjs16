import React from "react";
import Link from "next/link";
import Image from "next/image";
import SocialLinks from "./SocialLinks";

export default function Navbar({ handleMenuClick }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-7 flex items-center justify-between gap-10">
      <Link href="/">
        <Image
          src="/assets/virtual-assistant/logos/logo-header.svg"
          alt="rezyume header logo"
          width={200}
          height={200}
          priority
          className="w-[168px] h-auto object-cover"
        />
      </Link>
      <div className="flex items-center gap-15">
        <SocialLinks className="hidden lg:flex" />
        <button onClick={() => handleMenuClick()} className="cursor-pointer">
          <Image
            src="/assets/virtual-assistant/icons/menu-icon.svg"
            alt="menu icon"
            width={50}
            height={50}
            priority
            className="w-10 h-auto object-cover"
          />
        </button>
      </div>
    </div>
  );
}
