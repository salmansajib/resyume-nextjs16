import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({ handleMenuClick }) {
  return (
    <div className="py-5 flex items-center justify-between gap-10">
      <Link href="/" className="cursor-pointer">
        <Image
          src="/assets/hair-expert/logos/logo-header.svg"
          alt="rezyume logo"
          width={200}
          height={200}
          priority
          className="w-44 h-auto object-cover"
        />
      </Link>
      <button onClick={() => handleMenuClick()} className="cursor-pointer">
        <Image
          src="/assets/hair-expert/icons/menu-icon.svg"
          alt="menu icon"
          width={50}
          height={50}
          priority
          className="w-11 h-auto object-cover"
        />
      </button>
    </div>
  );
}
