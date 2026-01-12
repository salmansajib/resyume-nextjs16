import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({ handleMenuClick }) {
  return (
    <div className="flex items-center justify-between gap-10 py-5">
      <Link href="/">
        <Image
          src="/assets/doctor-2/logos/header-logo.svg"
          alt="rezyume logo"
          width={200}
          height={200}
          className="w-[168px] h-auto object-cover"
        />
      </Link>
      <button onClick={() => handleMenuClick()} className="cursor-pointer">
        <Image
          src="/assets/doctor-2/icons/menu-icon.svg"
          alt="menu icon"
          width={50}
          height={50}
          className="w-6 h-auto object-cover"
        />
      </button>
    </div>
  );
}
