import React from "react";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between py-7">
      <Link href="/">
        <Image
          src="/assets/hr-manager/logos/logo-header.svg"
          alt="rezyume logo"
          width={200}
          height={200}
          priority
          className="w-[168px] h-auto object-cover"
        />
      </Link>
      <div className="flex items-center gap-10">
        <SocialLinks className="hidden lg:flex" />
        {/* decorative line */}
        <div className="hidden lg:block w-[350px] h-px bg-border-primary/50"></div>
        <button>
          <Image
            src="/assets/hr-manager/icons/menu-icon.svg"
            alt="menu button"
            width={50}
            height={20}
            priority
            className="w-[30px] h-auto object-cover"
          />
        </button>
      </div>
    </div>
  );
}
