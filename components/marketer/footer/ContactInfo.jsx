import React from "react";
import PhoneIcon from "@/components/icons/PhoneIcon";
import EmailIcon from "@/components/icons/EmailIcon";
import LocationIcon from "@/components/icons/LocationIcon";

export default function ContactInfo({ heroData }) {
  return (
    <div className="font-rubik flex flex-wrap gap-4 items-center justify-between">
      {/* phone */}
      <a
        href={`tel:${heroData.contact.phone}`}
        className="flex items-center gap-5 hover:text-primary transition-colors group"
        aria-label={`Call ${heroData.contact.phone}`}
      >
        <div className="border border-primary/25 bg-background-neutral/23 shadow-[inset_1px_1px_16px_0px_rgba(169,241,113,0.15)] text-text-secondary group-hover:text-primary group-hover:border-primary size-[50px] flex items-center justify-center rounded-md">
          <PhoneIcon />
        </div>
        <p className="text-xl font-normal text-text-secondary group-hover:text-primary transition-colors">
          {heroData.contact.phone}
        </p>
      </a>

      {/* email */}
      <a
        href={`mailto:${heroData.contact.email}`}
        className="flex items-center gap-5 hover:text-primary transition-colors group"
        aria-label={`Email ${heroData.contact.email}`}
      >
        <div className="border border-primary/25 bg-background-neutral/23 shadow-[inset_1px_1px_16px_0px_rgba(169,241,113,0.15)] text-text-secondary group-hover:text-primary group-hover:border-primary size-[50px] flex items-center justify-center rounded-md">
          <EmailIcon />
        </div>
        <p className="text-xl font-normal text-text-secondary group-hover:text-primary transition-colors">
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
        <div className="border border-primary/25 bg-background-neutral/23 shadow-[inset_1px_1px_16px_0px_rgba(169,241,113,0.15)] text-text-secondary group-hover:text-primary group-hover:border-primary size-[50px] flex items-center justify-center rounded-md">
          <LocationIcon />
        </div>
        <p className="text-xl font-normal text-text-secondary group-hover:text-primary transition-colors">
          {heroData.contact.address}
        </p>
      </a>
    </div>
  );
}
