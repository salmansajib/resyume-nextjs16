import React from "react";
import Image from "next/image";

export default function Navbar({ handleMenuClick }) {
  return (
    <div className="flex items-center justify-between gap-5 py-10">
      <div>
        <Image
          src="/assets/marketer/logos/logo-header.svg"
          alt="rezyume logo"
          width={200}
          height={200}
          className="w-[168px] h-auto"
        />
      </div>
      <button onClick={() => handleMenuClick()} className="cursor-pointer">
        <Image
          src="/assets/marketer/icons/menu-icon.svg"
          alt="nav menu icon"
          width={50}
          height={50}
          className="w-[30px] h-auto"
        />
      </button>
    </div>
  );
}
