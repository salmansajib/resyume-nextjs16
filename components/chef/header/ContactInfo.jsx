import React from "react";
import PhoneIcon from "@/components/icons/PhoneIcon";
import EmailIcon from "@/components/icons/EmailIcon";
import LocationIcon from "@/components/icons/LocationIcon";

export default function ContactInfo({ heroData }) {
  return (
    <div className="font-jost flex flex-col items-end gap-8">
      {/* phone */}
      <a
        href={`tel:${heroData.contact.phone}`}
        className="flex items-center gap-5 hover:text-primary transition-colors group"
        aria-label={`Call ${heroData.contact.phone}`}
      >
        <p className="text-xl font-normal text-text-secondary group-hover:text-primary transition-colors">
          {heroData.contact.phone}
        </p>
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
        <p className="text-xl font-normal text-text-secondary group-hover:text-primary transition-colors">
          {heroData.contact.email}
        </p>
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
        <p className="text-xl font-normal text-text-secondary group-hover:text-primary transition-colors">
          {heroData.contact.address}
        </p>
        <div className="border border-primary size-9 flex items-center justify-center rounded-full">
          <LocationIcon />
        </div>
      </a>
    </div>
  );
}
