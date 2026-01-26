import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({ handleMenuClick }) {
  return (
    <div className="flex items-center justify-between gap-10 pt-5 absolute z-30 top-0 left-0 right-0 max-w-7xl mx-auto px-4">
      <Link href="/">
        <Image
          src="/assets/fitness-coach/logos/logo-header.svg"
          alt="rezyume logo"
          width={200}
          height={200}
          priority
          className="w-[168px] h-auto object-cover"
        />
      </Link>
      <button onClick={() => handleMenuClick()} className="cursor-pointer">
        <Image
          src="/assets/fitness-coach/icons/menu-icon.svg"
          alt="menu icon"
          width={30}
          height={30}
          priority
          className="w-[21px] h-auto object-cover"
        />
      </button>
    </div>
  );
}
