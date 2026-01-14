import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between gap-10 py-7">
      <Link href="/">
        <Image
          src="/assets/doctor-3/logos/logo-header.svg"
          alt="rezyume logo"
          width={200}
          height={200}
          priority
          className="w-[168px] h-auto object-cover"
        />
      </Link>
      <button className="cursor-pointer">
        <Image
          src="/assets/doctor-3/icons/menu-icon.svg"
          alt="menu icon"
          width={50}
          height={50}
          priority
          className="w-6 h-auto object-cover"
        />
      </button>
    </div>
  );
}
