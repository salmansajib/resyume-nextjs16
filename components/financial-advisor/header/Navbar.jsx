import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({ handleMenuClick }) {
  return (
    <div className="py-7 flex items-center justify-between">
      <Link href="/">
        <Image
          src="/assets/financial-advisor/logos/logo-header.svg"
          alt="rezyume logo"
          width={200}
          height={200}
          priority
          className="w-[168px] h-auto object-cover"
        />
      </Link>
      <button onClick={() => handleMenuClick()} className="cursor-pointer">
        <Image
          src="/assets/financial-advisor/icons/menu-icon.svg"
          alt="menu icon"
          width={40}
          height={30}
          priority
          className="w-[30px] h-auto object-cover"
        />
      </button>
    </div>
  );
}
