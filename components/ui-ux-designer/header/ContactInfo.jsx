import React from "react";
import PhoneIcon from "@/components/icons/PhoneIcon";
import EmailIcon from "@/components/icons/EmailIcon";
import LocationIcon from "@/components/icons/LocationIcon";

export default function ContactInfo({ hero }) {
  return (
    <div className="space-y-5">
      {/* phone */}
      <a
        href={`tel:${hero.contact.phone}`}
        className="flex items-center gap-5 hover:text-primary transition-colors group"
        aria-label={`Call ${hero.contact.phone}`}
      >
        <div className="border border-primary size-9 flex items-center justify-center rounded-full">
          <PhoneIcon />
        </div>
        <p className="text-lg font-normal text-text-primary group-hover:text-primary transition-colors">
          {hero.contact.phone}
        </p>
      </a>

      {/* email */}
      <a
        href={`mailto:${hero.contact.email}`}
        className="flex items-center gap-5 hover:text-primary transition-colors group"
        aria-label={`Email ${hero.contact.email}`}
      >
        <div className="border border-primary size-9 flex items-center justify-center rounded-full">
          <EmailIcon />
        </div>
        <p className="text-lg font-normal text-text-primary group-hover:text-primary transition-colors">
          {hero.contact.email}
        </p>
      </a>

      {/* location */}
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          hero.contact.address,
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-5 hover:text-primary transition-colors group"
        aria-label={`View location: ${hero.contact.address}`}
      >
        <div className="border border-primary size-9 flex items-center justify-center rounded-full">
          <LocationIcon />
        </div>
        <p className="text-lg font-normal text-text-primary group-hover:text-primary transition-colors">
          {hero.contact.address}
        </p>
      </a>
    </div>
  );
}
