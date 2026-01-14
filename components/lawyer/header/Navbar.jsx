import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar({ handleMenuClick }) {
  return (
    <div className="flex items-center justify-between gap-10 py-10">
      {/* logo */}
      <Link href="/">
        <Image
          src="/assets/lawyer/logos/logo-header.svg"
          alt="rezyume-logo"
          width={200}
          height={200}
          priority
          className="w-[168px] h-auto"
        />
      </Link>
      {/* menu icon */}
      <button onClick={() => handleMenuClick()} className="cursor-pointer">
        <Image
          src="/assets/lawyer/icons/menu-icon.svg"
          alt="navigation-menu-icon"
          width={50}
          height={50}
          priority
          className="w-[25px] h-auto"
        />
      </button>
    </div>
  );
}
