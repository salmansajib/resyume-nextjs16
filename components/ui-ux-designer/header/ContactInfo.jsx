import React from "react";
import Image from "next/image";

export default function ContactInfo({ hero }) {
  return (
    <div className="space-y-5">
      {/* phone */}
      <div className="flex items-center gap-5">
        <div className="border border-primary size-9 flex items-center justify-center rounded-full">
          <Image
            src="/assets/uiuxdesigner/icons/phone-icon.svg"
            alt="Phone Icon"
            width={50}
            height={50}
            className="w-3.5 h-auto"
          />
        </div>
        <p className="text-lg font-normal text-text-primary">
          {hero.contact.phone}
        </p>
      </div>
      {/* email */}
      <div className="flex items-center gap-5">
        <div className="border border-primary size-9 flex items-center justify-center rounded-full">
          <Image
            src="/assets/uiuxdesigner/icons/inbox-icon.svg"
            alt="Phone Icon"
            width={50}
            height={50}
            className="w-4 h-auto"
          />
        </div>
        <p className="text-lg font-normal text-text-primary">
          {hero.contact.email}
        </p>
      </div>
      {/* location */}
      <div className="flex items-center gap-5">
        <div className="border border-primary size-9 flex items-center justify-center rounded-full">
          <Image
            src="/assets/uiuxdesigner/icons/location-icon.svg"
            alt="Phone Icon"
            width={50}
            height={50}
            className="w-3.5 h-auto"
          />
        </div>
        <p className="text-lg font-normal text-text-primary">
          {hero.contact.address}
        </p>
      </div>
    </div>
  );
}
