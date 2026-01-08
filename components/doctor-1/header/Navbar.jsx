import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({ handleMenuClick }) {
  return (
    <div className="py-5 flex gap-5 items-center justify-between">
      <Link href="/">
        <Image
          src="/assets/doctor-1/logos/logo-header.svg"
          alt="rezyume logo"
          width={200}
          height={200}
          className="w-[168px] h-auto"
        />
      </Link>
      <button onClick={() => handleMenuClick()} className="cursor-pointer">
        <Image
          src="/assets/doctor-1/icons/menu-icon.svg"
          alt="menu icon"
          width={30}
          height={30}
          className="w-[17.5px] h-auto object-cover"
        />
      </button>
    </div>
  );
}
