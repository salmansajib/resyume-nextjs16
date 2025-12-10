import React from "react";
import LocationIcon from "@/components/icons/LocationIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import EmailIcon from "@/components/icons/EmailIcon";

export default function ContactInfo({ heroData }) {
  return (
    <div className="space-y-4 flex flex-wrap gap-3 items-center justify-between mt-10">
      {/* phone */}
      <a
        href={`tel:${heroData.contact.phone}`}
        className="flex items-center gap-5 hover:text-primary transition-colors group"
        aria-label={`Call ${heroData.contact.phone}`}
      >
        <div className="border border-text-secondary text-text-secondary group-hover:text-primary group-hover:border-primary size-10 md:size-[50px] flex items-center justify-center rounded-full">
          <PhoneIcon width={20} height={23} />
        </div>
        <p className="text-lg md:text-2xl font-normal text-text-secondary group-hover:text-primary transition-colors">
          {heroData.contact.phone}
        </p>
      </a>

      {/* email */}
      <a
        href={`mailto:${heroData.contact.email}`}
        className="flex items-center gap-5 hover:text-primary transition-colors group"
        aria-label={`Email ${heroData.contact.email}`}
      >
        <div className="border border-text-secondary text-text-secondary group-hover:text-primary group-hover:border-primary size-10 md:size-[50px] flex items-center justify-center rounded-full">
          <EmailIcon width={23} height={17} />
        </div>
        <p className="text-lg md:text-2xl font-normal text-text-secondary group-hover:text-primary transition-colors">
          {heroData.contact.email}
        </p>
      </a>

      {/* location */}
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          heroData.contact.address,
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-5 hover:text-primary transition-colors group"
        aria-label={`View location: ${heroData.contact.address}`}
      >
        <div className="border border-text-secondary text-text-secondary group-hover:text-primary group-hover:border-primary size-10 md:size-[50px] flex items-center justify-center rounded-full">
          <LocationIcon width={19} height={24} />
        </div>
        <p className="text-lg md:text-2xl font-normal text-text-secondary group-hover:text-primary transition-colors">
          {heroData.contact.address}
        </p>
      </a>
    </div>
  );
}
