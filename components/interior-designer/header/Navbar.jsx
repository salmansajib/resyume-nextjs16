import React from "react";
import Image from "next/image";
import SocialLinks from "./SocialLinks";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="py-7 flex items-center justify-between">
      <Link href="/">
        <Image
          src="/assets/interior-designer/logos/logo-header.svg"
          alt="rezyume logo"
          width={200}
          height={200}
          priority
          className="w-[168px] h-auto object-cover"
        />
      </Link>
      <div className="flex items-center gap-8">
        <SocialLinks className="hidden md:flex" />
        <div className="hidden md:block relative w-40 h-0.5 bg-primary">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-2 bg-primary"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-2 bg-primary"></div>
        </div>
        <button>
          <Image
            src="/assets/interior-designer/icons/menu-icon.svg"
            alt="manu icon"
            width={30}
            height={30}
            priority
            className="w-[24] h-auto object-cover"
          />
        </button>
      </div>
    </div>
  );
}
