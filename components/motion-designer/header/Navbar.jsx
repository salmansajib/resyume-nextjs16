import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({ handleMenuClick }) {
  return (
    <div className="py-5 lg:pt-5 lg:pb-0 flex items-center justify-between gap-10">
      <Link href="/" className="cursor-pointer">
        <Image
          src="/assets/motion-designer/logos/logo-header.svg"
          alt="rezyume logo"
          width={200}
          height={200}
          priority
          className="w-42 h-auto object-cover"
        />
      </Link>
      <button className="cursor-pointer" onClick={() => handleMenuClick()}>
        <Image
          src="/assets/motion-designer/icons/menu-icon.svg"
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
