import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="py-10 flex items-center gap-5 justify-between">
      <div>
        <Image
          src="/assets/chef/logos/logo-header.svg"
          alt="profile photo"
          width={300}
          height={300}
          className="w-[165px] h-auto"
        />
      </div>
      <button>
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
