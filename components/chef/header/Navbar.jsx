import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({ handleMenuClick }) {
  return (
    <div className="py-10 flex items-center gap-5 justify-between">
      <Link href="/">
        <Image
          src="/assets/chef/logos/logo-header.svg"
          alt="rezyume logo"
          width={300}
          height={300}
          className="w-[165px] h-auto"
        />
      </Link>
      <button onClick={() => handleMenuClick()} className="cursor-pointer">
        <Image
          src="/assets/chef/icons/menu-icon.svg"
          alt="navigation menu icon"
          width={50}
          height={50}
          className="w-[25px] h-auto"
        />
      </button>
    </div>
  );
}
