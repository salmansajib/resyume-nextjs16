import React from "react";
import PhoneIcon from "@/components/icons/PhoneIcon";
import EmailIcon from "@/components/icons/EmailIcon";
import LocationIcon from "@/components/icons/LocationIcon";

export default function ContactInfo({ heroData }) {
  return (
    <div className="space-y-4 max-w-[500px] bg-background-neutral p-5 md:p-10">
      {/* phone */}
      <a
        href={`tel:${heroData.contact.phone}`}
        className="flex items-center gap-5 hover:text-primary transition-colors group"
        aria-label={`Call ${heroData.contact.phone}`}
      >
        <div className="border border-text-secondary text-text-secondary group-hover:text-primary group-hover:border-primary size-9 flex items-center justify-center rounded-full">
          <PhoneIcon />
        </div>
        <p className="text-lg font-normal text-text-secondary group-hover:text-primary transition-colors">
          {heroData.contact.phone}
        </p>
      </a>

      {/* email */}
      <a
        href={`mailto:${heroData.contact.email}`}
        className="flex items-center gap-5 hover:text-primary transition-colors group"
        aria-label={`Email ${heroData.contact.email}`}
      >
        <div className="border border-text-secondary text-text-secondary group-hover:text-primary group-hover:border-primary size-9 flex items-center justify-center rounded-full">
          <EmailIcon />
        </div>
        <p className="text-lg font-normal text-text-secondary group-hover:text-primary transition-colors">
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
        <div className="border border-text-secondary text-text-secondary group-hover:text-primary group-hover:border-primary size-9 flex items-center justify-center rounded-full">
          <LocationIcon />
        </div>
        <p className="text-lg font-normal text-text-secondary group-hover:text-primary transition-colors">
          {heroData.contact.address}
        </p>
      </a>
    </div>
  );
}
