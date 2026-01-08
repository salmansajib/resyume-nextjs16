import React from "react";
import PhoneIcon from "@/components/icons/PhoneIcon";
import EmailIcon from "@/components/icons/EmailIcon";
import LocationIcon from "@/components/icons/LocationIcon";

export default function ContactInfo({ heroData }) {
  return (
    <div className="font-jost flex flex-col items-end gap-5 xl:gap-8">
      {/* phone */}
      <a
        href={`tel:${heroData.contact.phone}`}
        className="flex items-center gap-5 hover:text-primary transition-colors group"
        aria-label={`Call ${heroData.contact.phone}`}
      >
        <span className="text-xl font-normal text-text-secondary group-hover:text-primary transition-colors">
          {heroData.contact.phone}
        </span>
        <div className="border border-primary size-9 flex items-center justify-center rounded-full">
          <PhoneIcon />
        </div>
      </a>

      {/* email */}
      <a
        href={`mailto:${heroData.contact.email}`}
        className="flex items-center gap-5 hover:text-primary transition-colors group"
        aria-label={`Email ${heroData.contact.email}`}
      >
        <span className="text-xl font-normal text-text-secondary group-hover:text-primary transition-colors">
          {heroData.contact.email}
        </span>
        <div className="border border-primary size-9 flex items-center justify-center rounded-full">
          <EmailIcon />
        </div>
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
        <span className="text-xl font-normal text-text-secondary group-hover:text-primary transition-colors">
          {heroData.contact.address}
        </span>
        <div className="border border-primary size-9 flex items-center justify-center rounded-full">
          <LocationIcon />
        </div>
      </a>
    </div>
  );
}
