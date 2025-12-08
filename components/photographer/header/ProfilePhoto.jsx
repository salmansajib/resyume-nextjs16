import React from "react";
import Image from "next/image";
import SocialLinksHeader from "./SocialLinksHeader";

export default function ProfilePhoto() {
  return (
    <div className="relative">
      {/* profile image */}
      <div className="relative z-20">
        <Image
          src="/assets/photographer/images/profile-image-photographer.jpg"
          alt="Photographer Profile Photo"
          loading="eager"
          width={500}
          height={500}
          className="w-[461px] h-auto object-cover"
        />
      </div>

      {/* decorative elements */}
      <div className="hidden xl:block absolute -top-15 left-26.5 w-[276px] h-[311px] bg-background-neutral z-10"></div>
      <div className="hidden xl:block absolute -top-30 left-97.5 w-[274px] h-[367px] bg-background-neutral z-10"></div>
      <div className="hidden xl:block absolute top-90 left-22 w-[57px] h-[305px] bg-linear-to-b from-gradient-primary-start to-gradient-primary-end z-30 opacity-65"></div>
      <div className="hidden xl:block absolute top-85 left-38 w-[228px] h-[300px] bg-background-neutral z-10"></div>
      <div className="hidden xl:block absolute top-64 left-97 w-[113px] h-[151px] bg-background-neutral z-10"></div>
      <div className="hidden xl:block absolute top-104 left-97 w-[113px] h-[290px] bg-background-neutral z-10"></div>
      <div className="hidden xl:block absolute top-64 left-127.5 w-[155px] h-[333px] bg-background-neutral z-10"></div>

      {/* social links */}
      <div className="hidden xl:block absolute top-84 left-144 z-20">
        <SocialLinksHeader />
      </div>
    </div>
  );
}
