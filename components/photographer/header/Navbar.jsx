import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({ handleMenuClick }) {
  return (
    <div className="w-full max-w-7xl mx-auto flex items-center justify-between py-5">
      {/* logo */}
      <Link href="/">
        <Image
          width={300}
          height={300}
          priority
          src="/assets/photographer/logos/logo-header.svg"
          alt="Rezyume Logo"
          className="w-40 h-auto object-cover"
        />
      </Link>

      {/* menu icon */}
      <button className="cursor-pointer" onClick={() => handleMenuClick()}>
        <Image
          width={30}
          height={30}
          priority
          src="/assets/photographer/icons/menu-icon.svg"
          alt="Rezyume Logo"
          className="w-6 h-auto object-cover"
        />
      </button>
    </div>
  );
}
