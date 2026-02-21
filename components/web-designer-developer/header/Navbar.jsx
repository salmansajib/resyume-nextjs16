import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({ handleMenuClick }) {
  return (
    <div className="py-7 flex items-center justify-between gap-10">
      <Link href="/" className="cursor-pointer">
        <Image
          src="/assets/web-designer-developer/logos/logo-header.svg"
          alt="rezyume logo"
          width={200}
          height={200}
          priority
          className="w-42 h-auto object-cover"
        />
      </Link>
      <button className="cursor-pointer" onClick={() => handleMenuClick()}>
        <Image
          src="/assets/web-designer-developer/icons/menu-icon.svg"
          alt="menu icon"
          width={50}
          height={50}
          priority
          className="w-6.5 h-auto object-cover"
        />
      </button>
    </div>
  );
}
